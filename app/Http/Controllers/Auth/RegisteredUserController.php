<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Caninos;
use App\Models\InformacionUsuario;
use App\Models\Puntos;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image as Image;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {


        return Inertia::render(
            'Auth/Register',
            []
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
            'nombre' => 'required|string|max:255',
            'edad' => 'required|integer|min:0|max:120',
            'tipo_documento' => 'required|string', // Ajusta los valores según tu lógica
            'identificacion' => 'required|integer|digits_between:6,15|unique:informacion_usuario,numero_documento',
            'direccion' => 'required|string|max:255',
            'zona' => 'required|string|in:Urbana,Rural',
            'sector' => 'required',
            'telefono' => 'nullable|string|max:15',
            'celular' => 'required',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => ['required', Rules\Password::defaults()],
            //canino
            'nombre_canino' => 'required|string|max:255',
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
            'foto_url' => 'nullable|image|mimes:pg,png,jpeg,jpg,gif,bmp,tiff,svg,web,webp|max:2048',
            'vacunas' => 'required|mimes:pdf|max:2048',
            'poliza' => 'nullable|mimes:pdf|max:2048',
            'certificado_sanidad' => 'nullable|mimes:pdf|max:2048',
            'checked' => 'required|boolean',
            'declaracion' => 'required|boolean',
            'recaptcha_token' => 'required|string',
        ]);

        DB::beginTransaction();

        try {

            // Verifica el token de reCAPTCHA
            $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
                'secret' => env('RECAPTCHA_SECRET_KEY'), // Llave secreta de reCAPTCHA
                'response' => $request->recaptcha_token,
            ]);

            $recaptchaData = $response->json();

            Log::info('reCAPTCHA response:', $recaptchaData);

            if (!$recaptchaData['success'] || $recaptchaData['score'] < 0.4) {
                if ($request->campoObligatorio != null && $request->campoObligatorio != '') {
                    return back()->withErrors(['error' => 'La validación de reCAPTCHA falló. Inténtelo nuevamente.']);

                }
            }

            // Crear el usuario
            $user = User::create([
                'name' => $request->nombre,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            // Sincronizar el rol de usuario
            $user->assignRole('Usuario'); // Asegúrate de que el rol "usuario" exista en tu sistema

            // Crear la información del usuario
            InformacionUsuario::create([
                'nombre_completo' => $request->nombre,
                'edad' => $request->edad,
                'tipo_documento' => $request->tipo_documento,
                'numero_documento' => $request->identificacion,
                'direccion' => $request->direccion,
                'zona' => $request->zona,
                'comuna' => $request->input('sector.label'),
                'telefono' => $request->telefono,
                'celular' => $request->celular,
                'user_id' => $user->id,
            ]);

            $fileName = 'NA';
            $fileNameVacunas = 'NA';
            $fileNamePoliza = 'NA';
            $fileNameSanidad = 'NA';



            if ($request->hasFile('foto_url')) {
                $folder = 'caninos';
                $original = $request->file('foto_url');
                $extension = strtolower($original->getClientOriginalExtension());
                $fileName = time() . '_canino_' . $request->nombre_canino . '_' . $user->id . '.' . $extension;

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
                $fileNameVacunas = time() . '_vacunas_' . $request->nombre_canino . '_' . $user->id . '.' . $extension;
                $request->file('vacunas')->storeAs('uploads/' . $folder, $fileNameVacunas, 'public');
            }


            if ($request->hasFile('poliza')) {

                $folder = 'poliza';
                $extension = $request->file('poliza')->getClientOriginalExtension();
                $fileNamePoliza = time() . '_poliza_' . $request->nombre_canino . '_' . $user->id . '.' . $extension;
                $request->file('poliza')->storeAs('uploads/' . $folder, $fileNamePoliza, 'public');
            }

            if ($request->hasFile('certificado_sanidad')) {

                $folder = 'certificado_sanidad';
                $extension = $request->file('certificado_sanidad')->getClientOriginalExtension();
                $fileNameSanidad = time() . '_certificado_sanidad_' . $request->nombre_canino . '_' . $user->id . '.' . $extension;
                $request->file('certificado_sanidad')->storeAs('uploads/' . $folder, $fileNameSanidad, 'public');
            }



            // Crear la información del canino
            Caninos::create([
                'nombre' => $request->nombre_canino,
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
                'certificado_sanidad' => $fileNameSanidad,
                'poliza' => $fileNamePoliza,
                'vencimiento' => now()->addYear(),
                'user_id' => $user->id,
            ]);

            // Disparar el evento de registro
            event(new Registered($user));

            DB::commit();

            return back()->with('success', 'Registro completado exitosamente.');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('error '.$e);
            return back()->withErrors(['error' => 'Ocurrió un error durante el registro. Inténtelo nuevamente. '.$e]);
        }
    }
}
