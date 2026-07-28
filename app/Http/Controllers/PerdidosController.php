<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Perdidos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PerdidosController extends Controller
{

    /**
     * Almacenar y comprimir una imagen en el disco.
     */
    private function guardarImagen($archivo, string $folder, string $nombreBase, int $index): string
    {
        $extension = strtolower($archivo->getClientOriginalExtension());
        $fileName = time() . '_' . $nombreBase . '_' . $index . '.' . $extension;
        $rutaDestino = storage_path('app/public/uploads/' . $folder . '/' . $fileName);

        // Crear directorio si no existe
        if (!is_dir(dirname($rutaDestino))) {
            mkdir(dirname($rutaDestino), 0755, true);
        }

        if (in_array($extension, ['jpg', 'jpeg'])) {
            $img = imagecreatefromjpeg($archivo->getPathname());
            imagejpeg($img, $rutaDestino, 70); // 70 = calidad
            imagedestroy($img);
        } elseif ($extension === 'png') {
            $img = imagecreatefrompng($archivo->getPathname());
            imagepng($img, $rutaDestino, 6); // 0 (sin compresión) a 9 (máxima)
            imagedestroy($img);
        } elseif ($extension === 'webp') {
            $img = imagecreatefromwebp($archivo->getPathname());
            imagewebp($img, $rutaDestino, 70);
            imagedestroy($img);
        } else {
            // Otros formatos, solo mover
            $archivo->move(storage_path('app/public/uploads/' . $folder), $fileName);
        }

        return $fileName;
    }

    /**
     * Procesar y guardar múltiples fotos.
     *
     * @param  array  $fotos  Array de archivos UploadedFile
     * @param  string  $folder  Carpeta de destino
     * @param  string  $nombreBase  Nombre base para los archivos
     * @param  int  $maxFotos  Máximo de fotos permitidas (default 6)
     * @return array  Lista de nombres de archivos guardados
     */
    private function procesarFotos(array $fotos, string $folder, string $nombreBase, int $maxFotos = 6): array
    {
        $nombresArchivos = [];
        $limite = min(count($fotos), $maxFotos);

        for ($i = 0; $i < $limite; $i++) {
            try {
                $nombresArchivos[] = $this->guardarImagen($fotos[$i], $folder, $nombreBase, $i + 1);
            } catch (\Exception $e) {
                Log::error("Error al guardar foto índice {$i}: " . $e->getMessage());
                // Continuamos con las siguientes fotos
            }
        }

        return $nombresArchivos;
    }

    /**
     * Crear un reporte público de animal perdido/encontrado.
     */
    public function CrearReporte(Request $request)
    {
        $request->validate([
            'nombre_reportante' => 'required|string|max:255',
            'contacto'          => 'required|string|max:20',
            'email'             => 'string|email|max:255',
            'nombre'            => 'nullable|string|max:250',
            'raza'              => 'nullable|max:250',
            'color'             => 'nullable|string|max:100',
            'tamano'            => 'nullable|in:pequeno,mediano,grande',
            'particularidades'  => 'nullable|string|max:1000',
            'descripcion'       => 'required|string|max:1000',
            'estado_encuentra'  => 'nullable|in:muy_bien,bien,regular,delicado,herido_enfermo',
            'lugar'             => 'required|string|max:250',
            'fecha_hora'        => 'required|date',
            'tipo'              => 'required|in:Propietario,Canino perdido',
            'fotos'             => 'nullable|array|max:6',
            'fotos.*'           => 'image|mimes:jpg,jpeg,png,webp|max:10240', // 10MB c/u
            'autorizacion'      => 'required|boolean|accepted', // Debe ser true
            'origen'            => 'required|in:ciudadano,policia,hospivet,clinica,fundacion',
        ]);

        DB::beginTransaction();

        try {

            // =========================================
            // Verifica el token de reCAPTCHA
            // =========================================
            $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
                'secret'   => env('RECAPTCHA_SECRET_KEY'),
                'response' => $request->recaptcha_token,
            ]);

            $recaptchaData = $response->json();

            Log::info('reCAPTCHA response:', $recaptchaData);

            if (!$recaptchaData['success'] || $recaptchaData['score'] < 0.4) {
                if ($request->campo_obligatorio != null && $request->campo_obligatorio != '') {
                    return back()->withErrors(['error' => 'La validación de reCAPTCHA falló. Inténtelo nuevamente.']);
                }
            }

            // =========================================
            // Procesar fotos (máximo 6)
            // =========================================
            $fotosGuardadas = [];

            if ($request->hasFile('fotos')) {
                $nombreBase = preg_replace('/[^a-zA-Z0-9_-]/', '_', $request->nombre_reportante ?? 'reporte');
                $fotosGuardadas = $this->procesarFotos(
                    $request->file('fotos'),
                    'perdidos',
                    $nombreBase,
                    6
                );
            }

            // =========================================
            // Crear el reporte
            // =========================================
            $reporte = Perdidos::create([
                'user_id'           => auth()->id(),
                'nombre_reportante' => $request->nombre_reportante,
                'contacto'          => $request->contacto,
                'email'             => $request->email,
                'nombre'            => $request->nombre,
                'raza'              => $request->input('raza.label'),
                'color'             => $request->color,
                'tamano'            => $request->tamano,
                'particularidades'  => $request->particularidades,
                'descripcion'       => $request->descripcion,
                'estado_encuentra'  => $request->estado_encuentra,
                'lugar'             => $request->lugar,
                'fecha_hora'        => $request->fecha_hora,
                'tipo'              => $request->tipo,
                'fotos'             => !empty($fotosGuardadas) ? $fotosGuardadas : null,
                'autorizacion'      => $request->autorizacion,
                'origen'            => $request->origen,
                'estado'            => 'pendiente',
            ]);

            DB::commit();

            Log::info("Reporte #{$reporte->id} creado por {$request->origen}: {$request->nombre_reportante}");

            return back()->with('success', 'Reporte creado exitosamente.');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error al crear reporte perdidos: ' . $e->getMessage());
            return back()->withErrors(['error' => 'Ocurrió un error al crear el reporte. Inténtelo nuevamente.']);
        }
    }

    /**
     * Listar todos los reportes (admin) con filtros.
     */
    public function index(Request $request)
    {
        $query = Perdidos::with(['usuario', 'aprobador']);

        // Filtro por nombre del reportante
        if ($request->filled('nombre_reportante')) {
            $query->where('nombre_reportante', 'like', '%' . $request->nombre_reportante . '%');
        }

        // Filtro por contacto
        if ($request->filled('contacto')) {
            $query->where('contacto', 'like', '%' . $request->contacto . '%');
        }

        // Filtro por estado
        if ($request->filled('estado')) {
            $query->where('estado', $request->estado);
        }

        // Filtro por origen
        if ($request->filled('origen')) {
            $query->where('origen', $request->origen);
        }

        $reportes = $query->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Perdidos/Index', [
            'reportes' => $reportes,
            'filters'  => $request->only(['nombre_reportante', 'contacto', 'estado', 'origen']),
        ]);
    }

    /**
     * Mostrar formulario para crear reporte (admin).
     */
    public function create()
    {
        return Inertia::render('Perdidos/Add');
    }

    /**
     * Guardar reporte desde el admin.
     */
    public function store(Request $request)
    {
        // Similar a CrearReporte pero sin reCAPTCHA y con autenticación
        $request->validate([
            'nombre_reportante' => 'required|string|max:255',
            'contacto'          => 'required|string|max:20',
            'email'             => 'nullable|string|email|max:255',
            'nombre'            => 'nullable|string|max:250',
            'raza'              => 'nullable|max:250',
            'color'             => 'nullable|string|max:100',
            'tamano'            => 'nullable|in:pequeno,mediano,grande',
            'particularidades'  => 'nullable|string|max:1000',
            'descripcion'       => 'required|string|max:1000',
            'estado_encuentra'  => 'nullable|in:muy_bien,bien,regular,delicado,herido_enfermo',
            'lugar'             => 'required|string|max:250',
            'fecha_hora'        => 'required|date',
            'tipo'              => 'required|in:Propietario,Canino perdido',
            'fotos'             => 'nullable|array|max:6',
            'fotos.*'           => 'image|mimes:jpg,jpeg,png,webp|max:10240',
            'autorizacion'      => 'required|boolean',
            'origen'            => 'required|in:ciudadano,policia,hospivet,clinica,fundacion',
        ]);

        DB::beginTransaction();

        try {
            $fotosGuardadas = [];

            if ($request->hasFile('fotos')) {
                $nombreBase = preg_replace('/[^a-zA-Z0-9_-]/', '_', $request->nombre_reportante);
                $fotosGuardadas = $this->procesarFotos(
                    $request->file('fotos'),
                    'perdidos',
                    $nombreBase,
                    6
                );
            }

            Perdidos::create([
                'user_id'           => auth()->id(),
                'nombre_reportante' => $request->nombre_reportante,
                'contacto'          => $request->contacto,
                'email'             => $request->email,
                'nombre'            => $request->nombre,
                'raza'              => $request->input('raza.label'),
                'color'             => $request->color,
                'tamano'            => $request->tamano,
                'particularidades'  => $request->particularidades,
                'descripcion'       => $request->descripcion,
                'estado_encuentra'  => $request->estado_encuentra,
                'lugar'             => $request->lugar,
                'fecha_hora'        => $request->fecha_hora,
                'tipo'              => $request->tipo,
                'fotos'             => !empty($fotosGuardadas) ? $fotosGuardadas : null,
                'autorizacion'      => $request->autorizacion,
                'origen'            => $request->origen,
                'estado'            => 'activo',
            ]);

            DB::commit();

            return to_route('perdidos.index')->with('success', 'Reporte creado exitosamente.');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error admin al crear reporte: ' . $e->getMessage());
            return back()->withErrors(['error' => 'Error al crear el reporte.']);
        }
    }

    /**
     * Mostrar detalle de un reporte.
     */
    public function show($id)
    {
        $reporte = Perdidos::with(['usuario', 'aprobador'])->findOrFail($id);
        return Inertia::render('Perdidos/Show', compact('reporte'));
    }

    /**
     * Mostrar formulario de edición.
     */
    public function edit($id)
    {
        $reporte = Perdidos::findOrFail($id);
        return Inertia::render('Perdidos/Edit', compact('reporte'));
    }

    /**
     * Actualizar un reporte.
     */
    public function update(Request $request, $id)
    {
        $reporte = Perdidos::findOrFail($id);

        $request->validate([
            'nombre_reportante' => 'required|string|max:255',
            'contacto'          => 'required|string|max:20',
            'email'             => 'nullable|string|email|max:255',
            'nombre'            => 'nullable|string|max:250',
            'raza'              => 'nullable|max:250',
            'color'             => 'nullable|string|max:100',
            'tamano'            => 'nullable|in:pequeno,mediano,grande',
            'particularidades'  => 'nullable|string|max:1000',
            'descripcion'       => 'required|string|max:1000',
            'estado_encuentra'  => 'nullable|in:muy_bien,bien,regular,delicado,herido_enfermo',
            'lugar'             => 'required|string|max:250',
            'fecha_hora'        => 'required|date',
            'tipo'              => 'required|in:Propietario,Canino perdido',
            'fotos'             => 'nullable|array|max:6',
            'fotos.*'           => 'image|mimes:jpg,jpeg,png,webp|max:10240',
            'autorizacion'      => 'required|boolean',
            'origen'            => 'required|in:ciudadano,policia,hospivet,clinica,fundacion',
            'estado'            => 'required|in:activo,pendiente,aprobado,rechazado,resuelto,no_encontrado',
        ]);

        DB::beginTransaction();

        try {
            $data = $request->except('fotos');

            // Procesar nuevas fotos si se enviaron
            if ($request->hasFile('fotos')) {
                $nombreBase = preg_replace('/[^a-zA-Z0-9_-]/', '_', $request->nombre_reportante);
                $fotosGuardadas = $this->procesarFotos(
                    $request->file('fotos'),
                    'perdidos',
                    $nombreBase,
                    6
                );

                // Mezclar con fotos existentes si no se borraron
                $fotosExistentes = $request->input('fotos_existentes', []);
                if (!empty($fotosExistentes) && is_array($fotosExistentes)) {
                    $data['fotos'] = array_merge($fotosExistentes, $fotosGuardadas);
                } else {
                    $data['fotos'] = $fotosGuardadas;
                }

                // Limitar a 6
                $data['fotos'] = array_slice($data['fotos'], 0, 6);
            } else {
                // Solo fotos existentes (las que ya estaban)
                $fotosExistentes = $request->input('fotos_existentes', []);
                $data['fotos'] = !empty($fotosExistentes) ? $fotosExistentes : $reporte->fotos;
            }

            if (isset($data['raza']) && is_array($data['raza'])) {
                $data['raza'] = $request->input('raza.label');
            }

            $reporte->fill($data)->save();

            DB::commit();

            return to_route('perdidos.index')->with('success', 'Reporte actualizado exitosamente.');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error al actualizar reporte: ' . $e->getMessage());
            return back()->withErrors(['error' => 'Error al actualizar el reporte.']);
        }
    }

    /**
     * Aprobar un reporte (cambiar estado a 'activo').
     */
    public function aprobar($id)
    {
        $reporte = Perdidos::findOrFail($id);
        $reporte->update([
            'estado'       => 'activo',
            'aprobado_por' => auth()->id(),
        ]);

        return back()->with('success', 'Reporte aprobado y visible al público.');
    }

    /**
     * Rechazar un reporte.
     */
    public function rechazar(Request $request, $id)
    {
        $request->validate([
            'motivo_rechazo' => 'required|string|max:500',
        ]);

        $reporte = Perdidos::findOrFail($id);
        $reporte->update([
            'estado'         => 'rechazado',
            'motivo_rechazo' => $request->motivo_rechazo,
            'aprobado_por'   => auth()->id(),
        ]);

        return back()->with('success', 'Reporte rechazado.');
    }

    /**
     * Marcar como resuelto (animal recuperado/reunido con dueño).
     */
    public function resolver($id)
    {
        $reporte = Perdidos::findOrFail($id);
        $reporte->update([
            'estado'       => 'resuelto',
            'aprobado_por' => auth()->id(),
        ]);

        return back()->with('success', 'Reporte marcado como resuelto.');
    }
}
