<?php

// app/Http/Controllers/CertificadosController.php
namespace App\Http\Controllers;

use App\Models\Caninos;
use App\Models\InformacionUsuario;
use App\Models\PageView;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request as RequestFacade;
use Illuminate\Support\Facades\Storage;
use Barryvdh\DomPDF\Facade\Pdf;

use App\Models\Delegado;
use Illuminate\Support\Facades\Log;

use SimpleSoftwareIO\QrCode\Facades\QrCode;

class CertificadosController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    function __construct()
    {
        // $this->middleware('permission:certificados-listar|certificados-crear|certificados-editar|certificados-eliminar', ['only' => ['index', 'store']]);
        // $this->middleware('permission:certificados-crear', ['only' => ['create', 'store']]);
        // $this->middleware('permission:certificados-editar', ['only' => ['edit', 'update']]);
        // $this->middleware('permission:certificados-eliminar', ['only' => ['destroy']]);
    }
    public function index()
    {
        $user = Auth::user();

        $caninos = Caninos::query()
            ->whereHas('user.informacionUsuario', function ($query) use ($user) {
                if ($user->roles->pluck('name')->toArray() == ['Administrador'] || $user->roles->pluck('name')->toArray() == ['Supervisor']) {
                    // Filtros opcionales para el administrador
                    $identificacion = RequestFacade::input('identificacion');
                    $nombre = RequestFacade::input('nombre');

                    if ($identificacion) {
                        $query->where('numero_documento', $identificacion);
                    }

                    if ($nombre) {
                        $query->where('nombre_completo', 'like', '%' . $nombre . '%');
                    }
                } else {
                    // Filtro obligatorio para usuarios no administradores
                    $identificacion = InformacionUsuario::where('user_id', $user->id)->pluck('numero_documento')->first();
                    $query->where('numero_documento', $identificacion);
                }
            })
            ->whereDoesntHave('novedades.novedad', function ($query) {
                $query->whereIn('nombre', ['Fallecimiento', 'Cancelar registro']);
            })
            ->whereIn('estado', ['Aprobado', 'Vencido'])
            ->with([
                'user.informacionUsuario:nombre_completo,tipo_documento,numero_documento,direccion,celular,comuna,zona,user_id',
                'certificado' // Solo trae los campos necesarios de informacionUsuario
            ])
            ->paginate(5)
            ->withQueryString();

        return Inertia::render(
            'Certificados/Index',
            [
                'caninos' => $caninos,
                'filters' => RequestFacade::only(['identificacion', 'nombre']),
            ]
        );
    }
    //generar certificado
    public function descargarCertificado($id)
    {

        ini_set('memory_limit', '1024M'); // 1 GB, puedes ajustar el valor
        ini_set('max_execution_time', 180); // 180 segundos (3 minutos)

        $canino = Caninos::with([
            'user.informacionUsuario:nombre_completo,tipo_documento,numero_documento,direccion,telefono,celular,comuna,edad,zona,user_id',
            'certificado'
        ])->findOrFail($id);

        $delegado = Delegado::where('estado', 1)->first();
        // Generar nombre único para el PDF

        $nombreLimpio = preg_replace('/[^A-Za-z0-9\-]/', '_', $canino->nombre);


        Log::info('Datos para PDF', ['canino' => $canino, 'delegado' => $delegado]);

        $qr = 'data:image/svg+xml;base64,' . base64_encode(QrCode::format('svg')->size(120)->generate(url('/consulta-certificado/' . $canino->id)));

        $pdf = Pdf::loadView('pdf.certificado', [
            'canino' => $canino,
            'delegado' => $delegado,
            'qr' => $qr
        ]);

        return $pdf->download('certificado' . $nombreLimpio . '_' . $canino->id . '.pdf');
    }

    //ver certificado
    public function verCertificado($id)
    {
        ini_set('memory_limit', '1024M');
        ini_set('max_execution_time', 180);

        $canino = Caninos::with([
            'user.informacionUsuario:nombre_completo,tipo_documento,numero_documento,direccion,telefono,celular,comuna,edad,zona,user_id',
            'certificado'
        ])->findOrFail($id);

        $delegado = Delegado::where('estado', 1)->first();
        $nombreLimpio = preg_replace('/[^A-Za-z0-9\-]/', '_', $canino->nombre);

        Log::info('Datos para PDF', ['canino' => $canino, 'delegado' => $delegado]);

        $qr = 'data:image/svg+xml;base64,' . base64_encode(QrCode::format('svg')->size(120)->generate(url('/consulta-certificado/' . $canino->id)));

        $pdf = Pdf::loadView('pdf.certificado', [
            'canino' => $canino,
            'delegado' => $delegado,
            'qr' => $qr
        ]);

        return $pdf->stream('certificado' . $nombreLimpio . '_' . $canino->id . '.pdf');
    }
}
