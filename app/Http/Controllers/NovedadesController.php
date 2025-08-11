<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Novedades;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class NovedadesController extends Controller
{
    public function index()
    {

        $novedades = Novedades::paginate(5)->withQueryString();

        return Inertia::render(
            'Novedades/Index',
            [
                'novedades' => $novedades,
            ]
        );
    }

    public function create()
    {

        return Inertia::render('Novedades/Add');
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
