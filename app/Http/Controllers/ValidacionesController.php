<?php

namespace App\Http\Controllers;

use App\Mail\InscriptionApprovedMail;
use App\Mail\InscriptionDisapprovedMail;
use App\Models\Caninos;
use App\Models\Certificados;
use App\Models\Delegado;
use App\Models\InformacionUsuario;
use Illuminate\Support\Facades\Request as RequestFacade;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Spatie\Permission\Models\Role;
use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class ValidacionesController extends Controller

{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    function __construct() {}


    public function index()
    {
        $user = Auth::user();

        $caninos = Caninos::query()
            ->whereHas('user.informacionUsuario', function ($query) use ($user) {
                if ($user->roles->pluck('name')->toArray() == ['Administrador']) {
                    // Filtros opcionales para el administrador
                    $identificacion = RequestFacade::input('identificacion');
                    $nombre = RequestFacade::input('nombre');

                    if ($identificacion) {
                        $query->where('numero_documento', $identificacion);
                    }

                    if ($nombre) {
                        $query->where('nombre_completo', 'like', '%' . $nombre . '%');
                    }
                }
            })
            ->with([
                'user.informacionUsuario:nombre_completo,tipo_documento,numero_documento,direccion,telefono,celular,comuna,edad,zona,user_id', // Solo trae los campos necesarios de informacionUsuario
            ])
            ->where('estado', 'Pendiente')
            ->paginate(5)
            ->withQueryString();

        return Inertia::render(
            'GestionRegistros/Index',
            [
                'caninos' => $caninos,
                'filters' => RequestFacade::only(['identificacion', 'nombre']),
            ]
        );
    }

    public function show($id)
    {
        $canino = Caninos::with([
            'user.informacionUsuario:nombre_completo,tipo_documento,numero_documento,direccion,telefono,celular,comuna,edad,zona,user_id'
        ])->findOrFail($id);

        return Inertia::render(
            'GestionRegistros/Show',
            [
                'canino' => $canino,
            ]
        );
    }

    //aprobar registro
    public function aprobarRegistro(Request $request)
    {

        DB::beginTransaction();
        try {
            $canino = Caninos::with([
                'user.informacionUsuario:nombre_completo,tipo_documento,numero_documento,direccion,telefono,celular,comuna,edad,zona,user_id'
            ])->findOrFail($request->id);

            $canino->estado = 'Aprobado';
            $canino->vencimiento = now()->addYear();
            $canino->save();

            $certificado = Certificados::where('estado', 1)
            ->where('canino_id', $request->id)
            ->first();

            if($certificado) {

                $certificado->fecha_emision = now();
                $certificado->fecha_vencimiento = now()->addYear();
                $certificado->estado = 1;
                $certificado->save;


            } else {

                Certificados::create([
                    'canino_id' => $request->id,
                    'fecha_emision' => now(),
                    'fecha_vencimiento' => now()->addYear(),
                    'estado' => 1,
                ]);
            }





            Mail::to($canino->user->email)->send(new InscriptionApprovedMail($canino));

            DB::commit();
            return back()->with('message', 'registro aprobado con éxito.');
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->withErrors(['error' => 'Ocurrió un error durante el proceso. Inténtelo nuevamente. '.$e]);
        }
    }

    //rechazar registro
    public function rechazarRegistro(Request $request)
    {

        DB::beginTransaction();
        try {
            $canino = Caninos::with([
                'user.informacionUsuario:nombre_completo,tipo_documento,numero_documento,direccion,telefono,celular,comuna,edad,zona,user_id'
            ])->findOrFail($request->id);

            $canino->motivo = $request->motivo;
            $canino->estado = 'Rechazado';
            $canino->vencimiento = now()->addYear();
            $canino->save();


            Mail::to($canino->user->email)->send(new InscriptionDisapprovedMail($canino));

            DB::commit();
            return back()->with('message', 'registro rechazado exitosamente.');
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->withErrors(['error' => 'Ocurrió un error durante el proceso. Inténtelo nuevamente. '.$e]);
        }
    }
}
