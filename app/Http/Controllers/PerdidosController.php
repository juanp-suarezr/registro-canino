<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Perdidos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class PerdidosController extends Controller
{

    public function CrearReporte(Request $request)
    {
        $request->validate([
            'nombre' => 'nullable|string|max:250',
            'contacto' => 'required',
            'email' => 'required|string|email|max:255',
            'lugar' => 'required|string|max:250',
            'descripcion' => 'required|string|max:500',
            'raza' => 'required',
            'tipo' => 'required',
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



            $fileName = 'NA';



            if ($request->hasFile('banner')) {
                $folder = 'perdidos';
                $original = $request->file('banner');
                $extension = strtolower($original->getClientOriginalExtension());
                $fileName = time() . '_perdidos_' . $request->nombre . '.' . $extension;

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



            // Crear la información del canino
            Perdidos::create([
                'nombre' => $request->nombre,
                'contacto' => $request->contacto,
                'email' => $request->email,
                'lugar' => $request->lugar,
                'raza' => $request->input('raza.label'),
                'descripcion' => $request->descripcion,
                'tipo' => $request->tipo,
                'banner' => $fileName,
                'estado' => 1,
            ]);


            DB::commit();

            return back()->with('success', 'Registro completado exitosamente.');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('error '.$e);
            return back()->withErrors(['error' => 'Ocurrió un error durante el registro. Inténtelo nuevamente. '.$e]);
        }




        return back();
    }

    public function index()
    {



        return Inertia::render(
            'Perdidos/Index',
            [

            ]
        );
    }

    //Crear reporte o form
    public function create()
    {

        return Inertia::render('Perdidos/Add');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:250',
        ]);



        $novedades = Novedades::create([
            'nombre' => $request->nombre,
            'estado' => $request->estado,
        ]);


        return to_route('novedades.index');
    }

    public function edit(Request $request, $id_novedad)
    {
        $novedad = Novedades::findOrFail($id_novedad);

        return Inertia::render('Novedades/Edit', compact('novedad'));
    }

    public function update(Request $request, $id_novedad)
    {
        // Validar los datos de entrada
        $data = $request->validate([
            'nombre' => ['required', 'string', 'max:255'],
            'estado' => ['required'],

        ]);

        $novedad = Novedades::findOrFail($id_novedad);
        // Actualizar el modelo de usuario con los datos validados
        $novedad->fill($data)->save();
        return to_route('novedades.index');
    }
}
