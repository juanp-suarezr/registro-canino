<?php

namespace App\Http\Controllers;

use App\Models\Caninos;
use App\Models\HashNovedades;
use App\Models\InformacionUsuario;
use App\Models\Novedades;
use Illuminate\Support\Facades\Request as RequestFacade;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Spatie\Permission\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image as Image;

class ConsultasController extends Controller

{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    function __construct() {}

    public function showConsultasRegistros()
    {
        $identificacion = RequestFacade::input('identificacion');

        return Inertia::render(
            'ConsultarRegistro',
            [
                'registro' => Caninos::query()
                    ->with([
                        'user:id,name,email',
                        'user.informacionUsuario:nombre_completo,user_id',
                        'certificado'
                    ])
                    ->whereDoesntHave('novedades.novedad', function ($query) {
                        $query->whereIn('nombre', ['Fallecimiento', 'Cancelar registro']);
                    })
                    ->whereIn('estado', ['Aprobado', 'Vencido'])
                    ->where(function ($query) use ($identificacion) {
                        // Incluir registros que tienen informacionUsuario y cumplen filtros
                        $query->whereHas('user.informacionUsuario', function ($q) use ($identificacion) {
                            if ($identificacion) {
                                $q->where('numero_documento', 'like', '%' . $identificacion . '%');
                            }
                        })
                        // O incluir registros que NO tienen informacionUsuario
                        ->orWhereDoesntHave('user.informacionUsuario');
                    })
                    ->select('id', 'nombre', 'raza', 'edad_canino', 'sexo', 'foto_url', 'es_peligroso', 'user_id', 'estado')
                    ->paginate(4)
                    ->withQueryString(),
                'filters' => RequestFacade::only(['identificacion']),
            ]
        );
    }


    public function index()
    {
        $user = Auth::user();

        $identificacion = RequestFacade::input('identificacion');
        $nombre = RequestFacade::input('nombre');
        $rango_fechas = RequestFacade::input('rangoFechas');
        $estado = RequestFacade::input('estado');
        $nombreCanino = RequestFacade::input('nombreCanino');

        $caninos = Caninos::query()
            ->with([
                'user:id,name,email',
                'user.informacionUsuario:nombre_completo,tipo_documento,numero_documento,direccion,telefono,celular,comuna,edad,zona,user_id',
                'novedades.novedad'
            ])
            ->where(function ($query) use ($rango_fechas, $estado, $nombreCanino) {
                if ($estado) {
                    $query->where('estado', $estado);
                }
                if ($rango_fechas) {
                    $query->whereBetween('created_at', [
                        \Carbon\Carbon::parse($rango_fechas[0])->startOfDay(),
                        \Carbon\Carbon::parse($rango_fechas[1] ?? date('Y-m-d'))->endOfDay()
                    ]);
                }
                if ($nombreCanino) {
                    $query->where('nombre', 'like', '%' . $nombreCanino . '%');
                }
            })
            ->where(function ($query) use ($user, $identificacion, $nombre) {
                // Incluir registros que tienen informacionUsuario y cumplen filtros
                $query->whereHas('user.informacionUsuario', function ($q) use ($user, $identificacion, $nombre) {
                    if ($user->roles->pluck('name')->toArray() == ['Administrador'] || $user->roles->pluck('name')->toArray() == ['Supervisor']) {
                        if ($identificacion) {
                            $q->where('numero_documento', 'like', '%' . $identificacion . '%');
                        }
                        if ($nombre) {
                            $q->where('nombre_completo', 'like', '%' . $nombre . '%');
                        }
                    } else {
                        $identificacion = InformacionUsuario::where('user_id', $user->id)->pluck('numero_documento')->first();
                        $q->where('numero_documento', $identificacion);
                    }
                })
                // O incluir registros que NO tienen informacionUsuario
                ->orWhereDoesntHave('user.informacionUsuario');
            })
            ->paginate(5)
            ->withQueryString();

        return Inertia::render(
            'Caninos/Index',
            [
                'caninos' => $caninos,
                'filters' => RequestFacade::only(['identificacion', 'nombre']),
            ]
        );
    }

    public function create()
    {
        $users = User::select('name', 'estado', 'id')
            ->where('estado', 1)
            ->where('id', '!=', Auth::id())
            ->get();
        return Inertia::render(
            'Caninos/Add',
            [
                'users' => $users,
            ]
        );
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'user_id' => 'required',
            'nombre' => 'required|string|max:255',
            'sexo' => 'required|string|in:Macho,Hembra',
            'fecha_nacimiento' => 'required|date|before_or_equal:today',
            'edad_canino' => 'nullable|string|max:10',
            'raza' => 'required',
            'caracteristicas' => 'nullable|string|max:500',
            'es_peligroso' => 'required|string',
            'tiene_agresiones' => 'required|string',
            'entrenado_ataque' => 'required|string',
            'entrenado_proteccion' => 'required|string',
            'esterilizado' => 'required|string',
            'observaciones' => 'nullable|string|max:500',
            'foto_url' => 'nullable|image|mimes:pg,png,jpeg,jpg,gif,bmp,tiff,svg,web,webp,heic|max:2048',
            'vacunas' => 'required|mimes:pdf|max:2048',
            'poliza' => 'nullable|mimes:pdf|max:2048',
            'certificado_sanidad' => 'nullable|mimes:pdf|max:2048',
            'declaracion' => 'required|boolean',
        ]);

        DB::beginTransaction();

        try {


            $fileName = 'NA';
            $fileNameVacunas = 'NA';
            $fileNamePoliza = 'NA';
            $fileNameSanidad = 'NA';



            if ($request->hasFile('foto_url')) {
                $folder = 'caninos';
                $original = $request->file('foto_url');
                $extension = strtolower($original->getClientOriginalExtension());
                $fileName = time() . '_canino_' . $request->nombre . '_' . $request->user_id . '.' . $extension;

                $rutaDestino = storage_path('app/public/uploads/' . $folder . '/' . $fileName);

                if (in_array($extension, ['jpg', 'jpeg'])) {
                    $img = imagecreatefromjpeg($original->getPathname());
                    imagejpeg($img, $rutaDestino, 70); // 70 es la calidad, puedes bajarla más si quieres
                    imagedestroy($img);
                } elseif ($extension === 'png') {
                    $img = imagecreatefrompng($original->getPathname());
                    imagepng($img, $rutaDestino, 6); // 0 (sin compresión) a 9 (máxima compresión)
                    imagedestroy($img);
                } else {
                    // Otros formatos, solo mover
                    $original->move(storage_path('app/public/uploads/' . $folder), $fileName);
                }
            }

            if ($request->hasFile('vacunas')) {
                $folder = 'vacunas';
                $extension = $request->file('vacunas')->getClientOriginalExtension();
                $fileNameVacunas = time() . '_vacunas_' . $request->nombre . '_' . $request->user_id . '.' . $extension;
                $request->file('vacunas')->storeAs('uploads/' . $folder, $fileNameVacunas, 'public');
            }


            if ($request->hasFile('poliza')) {

                $folder = 'poliza';
                $extension = $request->file('poliza')->getClientOriginalExtension();
                $fileNamePoliza = time() . '_poliza_' . $request->nombre . '_' . $request->user_id . '.' . $extension;
                $request->file('poliza')->storeAs('uploads/' . $folder, $fileNamePoliza, 'public');
            }

            if ($request->hasFile('certificado_sanidad')) {

                $folder = 'certificado_sanidad';
                $extension = $request->file('certificado_sanidad')->getClientOriginalExtension();
                $fileNameSanidad = time() . '_certificado_sanidad_' . $request->nombre . '_' . $request->user_id . '.' . $extension;
                $request->file('certificado_sanidad')->storeAs('uploads/' . $folder, $fileNameSanidad, 'public');
            }



            // Crear la información del canino
            Caninos::create([
                'nombre' => $request->nombre,
                'sexo' => $request->sexo,
                'fecha_nacimiento' => $request->fecha_nacimiento,
                'edad_canino' => $request->edad_canino,
                'raza' => $request->input('raza.label'),
                'caracteristicas' => $request->caracteristicas,
                'es_peligroso' => $request->es_peligroso,
                'tiene_agresiones' => $request->tiene_agresiones,
                'entrenado_ataque' => $request->entrenado_ataque,
                'entrenado_proteccion' => $request->entrenado_proteccion,
                'esterilizado' => $request->esterilizado,
                'observaciones' => $request->observaciones,
                'foto_url' => $fileName,
                'vacunas' => $fileNameVacunas,
                'poliza' => $fileNamePoliza,
                'certificado_sanidad' => $fileNameSanidad,
                'vencimiento' => now()->addYear(),
                'user_id' => $request->user_id,
            ]);


            DB::commit();

            return back()->with('success', 'Registro completado exitosamente.');
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->withErrors(['error' => 'Ocurrió un error durante el registro. Inténtelo nuevamente.']);
        }
    }

    public function edit(Request $request, $id_canino)
    {
        $canino = Caninos::with('novedades.novedad')->findOrFail($id_canino);
        $novedades = Novedades::where('estado', 1)->get();
        return Inertia::render('Caninos/Edit', compact('canino', 'novedades'));
    }

    public function updateCaninos(Request $request)
    {
        // Validar los datos de entrada
        $request->validate([

            //canino
            'nombre' => 'required|string|max:255',
            'sexo' => 'required|string|in:Macho,Hembra',
            'fecha_nacimiento' => 'required|date|before_or_equal:today',
            'edad_canino' => 'nullable|string|max:10',
            'raza' => 'required',
            'caracteristicas' => 'nullable|string|max:500',
            'es_peligroso' => 'required|string',
            'tiene_agresiones' => 'required|string',
            'entrenado_ataque' => 'required|string',
            'entrenado_proteccion' => 'required|string',
            'esterilizado' => 'required|string',
            'observaciones' => 'nullable|string|max:500',

            'declaracion' => 'required|boolean',
        ]);

        $canino = Caninos::findOrFail($request->canino_id);

        // === FOTO DEL CANINO ===
        if ($request->hasFile('foto_url')) {
            // Eliminar la foto anterior si existe
            if ($canino->foto_url && Storage::disk('public')->exists("uploads/caninos/{$canino->foto_url}")) {
                Storage::disk('public')->delete("uploads/caninos/{$canino->foto_url}");
            }

            $folder = 'caninos';
            $original = $request->file('foto_url');
            $extension = strtolower($original->getClientOriginalExtension());
            $fileName = time() . "_canino_{$request->nombre_canino}_" . Auth::id() . ".{$extension}";

            $rutaDestino = storage_path("app/public/uploads/{$folder}/{$fileName}");

            if (in_array($extension, ['jpg', 'jpeg'])) {
                $img = imagecreatefromjpeg($original->getPathname());
                imagejpeg($img, $rutaDestino, 70);
                imagedestroy($img);
            } elseif ($extension === 'png') {
                $img = imagecreatefrompng($original->getPathname());
                imagepng($img, $rutaDestino, 6);
                imagedestroy($img);
            } else {
                $original->move(storage_path("app/public/uploads/{$folder}"), $fileName);
            }

            $canino->foto_url = $fileName;
        }

        // === VACUNAS ===
        if ($request->hasFile('vacunas')) {
            if ($canino->vacunas && Storage::disk('public')->exists("uploads/vacunas/{$canino->vacunas}")) {
                Storage::disk('public')->delete("uploads/vacunas/{$canino->vacunas}");
            }

            $folder = 'vacunas';
            $extension = $request->file('vacunas')->getClientOriginalExtension();
            $fileNameVacunas = time() . "_vacunas_{$request->nombre_canino}_" . Auth::id() . ".{$extension}";
            $request->file('vacunas')->storeAs("uploads/{$folder}", $fileNameVacunas, 'public');

            $canino->vacunas = $fileNameVacunas;
        }

        // === POLIZA ===
        if ($request->hasFile('poliza')) {
            if ($canino->poliza && Storage::disk('public')->exists("uploads/poliza/{$canino->poliza}")) {
                Storage::disk('public')->delete("uploads/poliza/{$canino->poliza}");
            }

            $folder = 'poliza';
            $extension = $request->file('poliza')->getClientOriginalExtension();
            $fileNamePoliza = time() . "_poliza_{$request->nombre_canino}_" . Auth::id() . ".{$extension}";
            $request->file('poliza')->storeAs("uploads/{$folder}", $fileNamePoliza, 'public');

            $canino->poliza = $fileNamePoliza;
        }



        $canino->nombre = $request->nombre;
        $canino->sexo = $request->sexo;
        $canino->raza = $request->raza;
        $canino->fecha_nacimiento = $request->fecha_nacimiento;
        $canino->edad_canino = $request->edad_canino;
        $canino->caracteristicas = $request->caracteristicas;
        $canino->observaciones = $request->observaciones;
        $canino->es_peligroso = $request->es_peligroso;
        $canino->tiene_agresiones = $request->tiene_agresiones;
        $canino->entrenado_ataque = $request->entrenado_ataque;
        $canino->entrenado_proteccion = $request->entrenado_proteccion;
        $canino->esterilizado = $request->esterilizado;
        $canino->save();

        // Primero eliminamos todas las novedades actuales del canino
        HashNovedades::where('canino_id', $canino->id)->delete();

        if (!empty($request->novedades)) {


            // Luego insertamos las que llegan desde el request
            foreach ($request->novedades as $novedad) {
                // Si llega como objeto, tomamos su ID, si llega como número, lo usamos directo
                $novedadId = is_array($novedad) ? $novedad['id'] : (is_object($novedad) ? $novedad->id : $novedad);

                HashNovedades::create([
                    'canino_id'  => $canino->id,
                    'novedad_id' => $novedadId
                ]);
            }
        }




        return back()->with('success', 'Datos actualizados correctamente');
    }

    public function fixData(Request $request, $id_canino)
    {
        $canino = Caninos::findOrFail($id_canino);

        return Inertia::render('Caninos/FixData', compact('canino'));
    }

    public function updateData(Request $request)
    {
        $canino = Caninos::findOrFail($request->canino_id);

        // === FOTO DEL CANINO ===
        if ($request->hasFile('foto_url')) {
            // Eliminar la foto anterior si existe
            if ($canino->foto_url && Storage::disk('public')->exists("uploads/caninos/{$canino->foto_url}")) {
                Storage::disk('public')->delete("uploads/caninos/{$canino->foto_url}");
            }

            $folder = 'caninos';
            $original = $request->file('foto_url');
            $extension = strtolower($original->getClientOriginalExtension());
            $fileName = time() . "_canino_{$request->nombre_canino}_" . Auth::id() . ".{$extension}";

            $rutaDestino = storage_path("app/public/uploads/{$folder}/{$fileName}");

            if (in_array($extension, ['jpg', 'jpeg'])) {
                $img = imagecreatefromjpeg($original->getPathname());
                imagejpeg($img, $rutaDestino, 70);
                imagedestroy($img);
            } elseif ($extension === 'png') {
                $img = imagecreatefrompng($original->getPathname());
                imagepng($img, $rutaDestino, 6);
                imagedestroy($img);
            } else {
                $original->move(storage_path("app/public/uploads/{$folder}"), $fileName);
            }

            $canino->foto_url = $fileName;
        }

        // === VACUNAS ===
        if ($request->hasFile('vacunas')) {
            if ($canino->vacunas && Storage::disk('public')->exists("uploads/vacunas/{$canino->vacunas}")) {
                Storage::disk('public')->delete("uploads/vacunas/{$canino->vacunas}");
            }

            $folder = 'vacunas';
            $extension = $request->file('vacunas')->getClientOriginalExtension();
            $fileNameVacunas = time() . "_vacunas_{$request->nombre_canino}_" . Auth::id() . ".{$extension}";
            $request->file('vacunas')->storeAs("uploads/{$folder}", $fileNameVacunas, 'public');

            $canino->vacunas = $fileNameVacunas;
        }

        $canino->nombre = $request->nombre;
        $canino->es_peligroso = $request->es_peligroso;
        $canino->tiene_agresiones = $request->tiene_agresiones;
        $canino->entrenado_ataque = $request->entrenado_ataque;
        $canino->entrenado_proteccion = $request->entrenado_proteccion;
        $canino->esterilizado = $request->esterilizado;
        $canino->raza = $request->raza;
        $canino->estado = 'Pendiente';
        $canino->save();


        return back()->with('success', 'Datos actualizados correctamente');
    }


    public function destroy(Request $request, $id)
    {

        $request->validate([
            'password' => ['required', 'current_password'],
        ]);
        DB::table("users")->where('id', $id)->delete();
        return redirect()->route('users.index')
            ->with('success', 'Recurso eliminado exitosamente');
    }
}
