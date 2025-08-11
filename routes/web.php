<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CargueMasivoController;
use App\Http\Controllers\CertificadosController;
use App\Http\Controllers\ConsultasController;
use App\Http\Controllers\DelegadosController;
use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\EventosController;
use App\Http\Controllers\NovedadesController;
use App\Http\Controllers\OfertasController;
use App\Http\Controllers\PerdidosController;
use App\Http\Controllers\PerfilController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PuntosController;
use App\Http\Controllers\RestaurantesController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\ValidacionesController;
use App\Models\Caninos;
use App\Models\PageView;
use App\Models\Perdidos;
use App\Models\Perfil;
use App\Models\Restaurantes;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//inicio pagina web
Route::get('/Welcome', function () {

    return Inertia::render('Welcome', [

        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,



    ]);
})->name('welcome');


Route::get('/', function () {
    if (auth()->check()) {
        return redirect()->route('dashboard');
    } else {
        return Inertia::render('Welcome', [

            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,



        ]);
    }
});


Route::get('/certificado-ejemplo', function () {

    $canino =  Caninos::with([
        'user.informacionUsuario:nombre_completo,tipo_documento,numero_documento,direccion,telefono,celular,comuna,edad,zona,user_id',
        'certificado'
    ])->findOrFail(1);

    return view('pdf/certificado', ['canino' => $canino]);
});


Route::get('/home', function () {
    if (auth()->check()) {
        return redirect()->route('dashboard');
    } else {
        redirect()->route('welcome');
    }
});

Route::get('/consultar', [ConsultasController::class, 'showConsultasRegistros'])->name('consultarRegistro');
// Route::get('/searchRestaurant', [RestaurantesController::class, 'searchRestaurant'])->name('searchRestaurant');

Route::get('/certificado', function () {

    return Inertia::render('Certificados', [


    ]);

});

//gestión perdidos
Route::get('/busqueda-perdidos', function () {

    return Inertia::render('BusquedaPerdidos', [
        'perdidos' => Perdidos::where('estado', 1)->get(),
    ]);

});
Route::post('/crear-reporte', [PerdidosController::class, 'CrearReporte'])->name('crear-reporte');


//Consultar por qr de carnet
Route::get('/consulta-certificado/{id}', function ($id) {
    $canino = Caninos::with([
        'user.informacionUsuario:nombre_completo,tipo_documento,numero_documento,direccion,telefono,celular,comuna,edad,zona,user_id',
        'certificado'
    ])->findOrFail($id);

    return view('consulta_certificado', ['canino' => $canino]);
})->name('consulta.certificado.publica');


Route::get('/dashboard', function () {
    $user = Auth::user();

    if ($user->roles->pluck('name')->toArray() == ['Administrador'] || $user->roles->pluck('name')->toArray() == ['Supervisor']) {
        // Si el usuario es administrador, obtiene el conteo total de caninos registrados
        $caninos = Caninos::count();
        $caninos_info = [];
    } else {
        // Si el usuario no es administrador, obtiene el conteo de caninos registrados por el usuario
        $caninos = Caninos::where('user_id', $user->id)->count();

        $caninos_info = Caninos::select('id', 'user_id', 'foto_url', 'nombre', 'raza', 'caracteristicas', 'es_peligroso', 'estado')
        ->where('user_id', $user->id)->paginate(6);
    }

    return Inertia::render('Dashboard', [
        'views' => PageView::all(),
        'registros' => User::role('Usuario')->count(), // Filtra solo los usuarios con el rol 'Usuario'
        'caninos' => $caninos,
        'caninos_info' => $caninos_info,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/about', fn () => Inertia::render('About'))->name('about');
    Route::get('users', [UserController::class, 'index'])->name('users.index');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //GESTION REGISTROS
    Route::post('/aprobar-registro', [ValidacionesController::class, 'aprobarRegistro'])->name('aprobarRegistro');
    Route::post('/rechazar-registro', [ValidacionesController::class, 'rechazarRegistro'])->name('rechazarRegistro');

    //GESTION CERTIFICADOS
    //descargar
    Route::get('/certificados/descargar/{id}', [CertificadosController::class, 'descargarCertificado'])->name('certificados.descargar');
    //ver certificado
    Route::get('/certificados/ver/{id}', [CertificadosController::class, 'verCertificado'])->name('certificados.ver');

    //CORREGIR REGISTROS
    Route::get('/corregirDatos/{id}', [ConsultasController::class, 'fixData'])->name('caninos.fixData');
    Route::post('/corregirDatos', [ConsultasController::class, 'updateData'])->name('corregirDatos');

    //update caninos
    Route::post('/updateCaninos', [ConsultasController::class, 'updateCaninos'])->name('updateCaninos');

    //PLANTILLA EXCEL para cargue masivo
    //usuario
    Route::get('plantillaRes', [CargueMasivoController::class, 'plantillaRes'])->name('plantillaRes.excel');

    //import excel carga masiva
    //usuarios
    Route::post('/cargueRestaurantes', [CargueMasivoController::class, 'cargueRestaurantes'])->name('cargueRestaurantes');
});

Route::group(['middleware' => ['auth']], function () {
    Route::resource('caninos', ConsultasController::class)->middleware('auth');
    Route::resource('certificados', CertificadosController::class)->middleware('auth');
    Route::resource('users', UserController::class)->middleware('auth');
    Route::resource('roles', RoleController::class);
    Route::resource('gestion_registros', ValidacionesController::class);
    Route::resource('delegado', DelegadosController::class);
    Route::resource('novedades', NovedadesController::class);


});



require __DIR__ . '/auth.php';
