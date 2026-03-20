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

        // Filtros obtenidos de la request
        $identificacion = RequestFacade::input('identificacion');
        $nombre = RequestFacade::input('nombre');
        $nombreCanino = RequestFacade::input('nombreCanino');

        $caninos = Caninos::query()
            ->with([
                'user:id,name,email',
                'user.informacionUsuario:nombre_completo,tipo_documento,numero_documento,direccion,telefono,celular,comuna,edad,zona,user_id',
            ])
            ->where('estado', 'Pendiente')
            ->when($nombreCanino, function ($query) use ($nombreCanino) {
                $query->where('nombre', 'like', '%' . $nombreCanino . '%');
            })
            ->where(function ($query) use ($identificacion, $nombre) {
                // Incluir registros que tienen informacionUsuario con los filtros
                $query->whereHas('user.informacionUsuario', function ($q) use ($identificacion, $nombre) {
                    if ($identificacion) {
                        $q->where('numero_documento', 'like', '%' . $identificacion . '%');
                    }
                    if ($nombre) {
                        $q->where('nombre_completo', 'like', '%' . $nombre . '%');
                    }
                })
                // O incluir registros que NO tienen informacionUsuario
                ->orWhereDoesntHave('user.informacionUsuario');
            })
            ->orderBy('created_at', 'desc')
            ->paginate(6)
            ->withQueryString();

        return Inertia::render(
            'GestionRegistros/Index',
            [
                'caninos' => $caninos,
                'filters' => RequestFacade::only(['identificacion', 'nombre', 'nombreCanino']),
            ]
        );
    }

    public function show($id)
    {
        $canino = Caninos::with([
            'user:id,name,email',
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
