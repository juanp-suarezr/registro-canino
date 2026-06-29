<?php

namespace Tests\Feature;

use App\Models\Perdidos;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Tests\TestCase;

class PerdidosControllerTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        // Create necessary permissions and roles for admin tests
        $permissions = [
            'usuarios-listar', 'usuarios-crear', 'usuarios-editar', 'usuarios-eliminar',
            'rol-listar', 'rol-crear', 'rol-editar', 'rol-eliminar',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        $role = Role::create(['name' => 'Administrador']);
        $role->syncPermissions(Permission::pluck('id', 'id')->all());
    }

    /** @test */
    public function public_page_returns_successful_response()
    {
        $response = $this->get('/busqueda-perdidos');

        $response->assertStatus(200);
    }

    /** @test */
    public function public_page_shows_only_active_reports()
    {
        // Create active report (should be visible)
        Perdidos::create([
            'nombre_reportante' => 'Juan Pérez',
            'contacto'          => '3001112233',
            'email'             => 'juan@test.com',
            'descripcion'       => 'Perro perdido',
            'lugar'             => 'Parque Central',
            'fecha_hora'        => now(),
            'tipo'              => 'Propietario',
            'autorizacion'      => true,
            'origen'            => 'ciudadano',
            'estado'            => 'activo',
        ]);

        // Create pending report (should NOT be visible)
        Perdidos::create([
            'nombre_reportante' => 'María López',
            'contacto'          => '3104445566',
            'email'             => 'maria@test.com',
            'descripcion'       => 'Gato encontrado',
            'lugar'             => 'Calle 10',
            'fecha_hora'        => now(),
            'tipo'              => 'Canino perdido',
            'autorizacion'      => true,
            'origen'            => 'ciudadano',
            'estado'            => 'pendiente', // explicitly not active
        ]);

        $response = $this->get('/busqueda-perdidos');

        $response->assertStatus(200);

        // Check Inertia props — perdidos is now paginated with 'data' array
        $response->assertInertia(fn ($page) => $page
            ->component('BusquedaPerdidos')
            ->has('perdidos.data', 1)
            ->where('perdidos.data.0.nombre_reportante', 'Juan Pérez')
        );
    }

    /** @test */
    public function public_page_shows_empty_message_when_no_active_reports()
    {
        $response = $this->get('/busqueda-perdidos');

        $response->assertStatus(200);

        // Check that perdidos.data is an empty array (paginated)
        $response->assertInertia(fn ($page) => $page
            ->component('BusquedaPerdidos')
            ->has('perdidos.data', 0)
        );
    }

    /** @test */
    public function it_can_create_a_report_via_public_form()
    {
        Storage::fake('public');

        $foto = UploadedFile::fake()->image('perro.jpg', 400, 400);

        $response = $this->post(route('crear-reporte'), [
            'nombre_reportante' => 'Carlos Ruiz',
            'contacto'          => '3207778899',
            'email'             => 'carlos@test.com',
            'nombre'            => 'Rex',
            'raza'              => 'Pastor Alemán',
            'color'             => 'Negro',
            'tamano'            => 'grande',
            'particularidades'  => 'Collar azul',
            'descripcion'       => 'Perro grande y amigable',
            'estado_encuentra'  => 'bueno',
            'lugar'             => 'Carrera 15 #20-30',
            'fecha_hora'        => now()->format('Y-m-d\TH:i'),
            'tipo'              => 'Propietario',
            'fotos'             => [$foto],
            'autorizacion'      => true,
            'origen'            => 'ciudadano',
            'recaptcha_token'   => 'test-token',
            'campo_obligatorio' => '',
        ]);

        $this->assertDatabaseHas('perdidos', [
            'nombre_reportante' => 'Carlos Ruiz',
            'contacto'          => '3207778899',
            'nombre'            => 'Rex',
            'estado'            => 'activo', // default is 'activo' now
        ]);

        // Verify photo was stored
        $reporte = Perdidos::where('nombre_reportante', 'Carlos Ruiz')->first();
        $this->assertNotNull($reporte->fotos);
        $this->assertCount(1, $reporte->fotos);
    }

    /** @test */
    public function it_validates_required_fields_on_create()
    {
        $response = $this->post(route('crear-reporte'), [
            // Missing all required fields
        ]);

        $response->assertSessionHasErrors([
            'nombre_reportante',
            'contacto',
            'descripcion',
            'lugar',
            'fecha_hora',
            'tipo',
            'autorizacion', 'origen',
        ]);
    }

    /** @test */
    public function it_rejects_more_than_6_photos()
    {
        Storage::fake('public');

        $fotos = [];
        for ($i = 0; $i < 8; $i++) {
            $fotos[] = UploadedFile::fake()->image("foto_{$i}.jpg", 100, 100);
        }

        $response = $this->post(route('crear-reporte'), [
            'nombre_reportante' => 'Test User',
            'contacto'          => '3000000000',
            'email'             => 'test@test.com',
            'descripcion'       => 'Test description',
            'lugar'             => 'Test location',
            'fecha_hora'        => now()->format('Y-m-d\TH:i'),
            'tipo'              => 'Propietario',
            'fotos'             => $fotos,
            'autorizacion'      => true,
            'origen'            => 'ciudadano',
            'campo_obligatorio' => '',
        ]);

        $response->assertSessionHasErrors('fotos');
    }

    /** @test */
    public function it_rejects_report_without_authorization()
    {
        $response = $this->post(route('crear-reporte'), [
            'nombre_reportante' => 'Test User',
            'contacto'          => '3000000000',
            'email'             => 'test@test.com',
            'descripcion'       => 'Test',
            'lugar'             => 'Test',
            'fecha_hora'        => now()->format('Y-m-d\TH:i'),
            'tipo'              => 'Propietario',
            'autorizacion'      => false,
            'origen'            => 'ciudadano',
            'campo_obligatorio' => '',
        ]);

        $response->assertSessionHasErrors('autorizacion');
    }

    /** @test */
    public function admin_can_view_reports_index()
    {
        $user = User::factory()->create();
        $user->assignRole('Administrador');

        $response = $this->actingAs($user)->get('/perdidos');

        // Admin should not be redirected (status should not be 302)
        $this->assertNotEquals(302, $response->status(), 'Admin should not be redirected');
    }

    /** @test */
    public function guest_cannot_access_admin_routes()
    {
        $response = $this->get('/perdidos');

        // Guest should be redirected (302) to login or receive 401
        $this->assertContains($response->status(), [302, 401],
            'Guest should be redirected or unauthorized');
    }

    /** @test */
    public function admin_can_approve_a_report()
    {
        $user = User::factory()->create();
        $user->assignRole('Administrador');

        $reporte = Perdidos::create([
            'nombre_reportante' => 'Test',
            'contacto'          => '3000000000',
            'email'             => 'test@test.com',
            'descripcion'       => 'Test',
            'lugar'             => 'Test',
            'fecha_hora'        => now(),
            'tipo'              => 'Propietario',
            'autorizacion'      => true,
            'origen'            => 'ciudadano',
            'estado'            => 'pendiente',
        ]);

        $response = $this->actingAs($user)
            ->post(route('perdidos.aprobar', ['id' => $reporte->id]));

        $this->assertDatabaseHas('perdidos', [
            'id'     => $reporte->id,
            'estado' => 'activo',
        ]);
    }

    /** @test */
    public function admin_can_reject_a_report_with_motivo()
    {
        $user = User::factory()->create();
        $user->assignRole('Administrador');

        $reporte = Perdidos::create([
            'nombre_reportante' => 'Test',
            'contacto'          => '3000000000',
            'email'             => 'test@test.com',
            'descripcion'       => 'Test',
            'lugar'             => 'Test',
            'fecha_hora'        => now(),
            'tipo'              => 'Propietario',
            'autorizacion'      => true,
            'origen'            => 'ciudadano',
            'estado'            => 'pendiente',
        ]);

        $response = $this->actingAs($user)
            ->post(route('perdidos.rechazar', ['id' => $reporte->id]), [
                'motivo_rechazo' => 'Fotos no visibles',
            ]);

        $this->assertDatabaseHas('perdidos', [
            'id'             => $reporte->id,
            'estado'         => 'rechazado',
            'motivo_rechazo' => 'Fotos no visibles',
        ]);
    }

    /** @test */
    public function admin_can_mark_report_as_resolved()
    {
        $user = User::factory()->create();
        $user->assignRole('Administrador');

        $reporte = Perdidos::create([
            'nombre_reportante' => 'Test',
            'contacto'          => '3000000000',
            'email'             => 'test@test.com',
            'descripcion'       => 'Test',
            'lugar'             => 'Test',
            'fecha_hora'        => now(),
            'tipo'              => 'Canino perdido',
            'autorizacion'      => true,
            'origen'            => 'ciudadano',
            'estado'            => 'activo',
        ]);

        $response = $this->actingAs($user)
            ->post(route('perdidos.resolver', ['id' => $reporte->id]));

        $this->assertDatabaseHas('perdidos', [
            'id'     => $reporte->id,
            'estado' => 'resuelto',
        ]);
    }

    /** @test */
    public function admin_can_update_report_with_photos()
    {
        $user = User::factory()->create();
        $user->assignRole('Administrador');

        $reporte = Perdidos::create([
            'nombre_reportante' => 'Test',
            'contacto'          => '3000000000',
            'email'             => 'test@test.com',
            'descripcion'       => 'Test desc',
            'lugar'             => 'Test lugar',
            'fecha_hora'        => now(),
            'tipo'              => 'Propietario',
            'autorizacion'      => true,
            'origen'            => 'ciudadano',
            'estado'            => 'pendiente',
            'fotos'             => ['vieja1.jpg', 'vieja2.jpg'],
        ]);

        Storage::fake('public');
        $nuevaFoto = UploadedFile::fake()->image('nueva.jpg', 400, 400);

        $response = $this->actingAs($user)
            ->put(route('perdidos.update', ['id' => $reporte->id]), [
                'nombre_reportante' => 'Test Actualizado',
                'contacto'          => '3001112222',
                'email'             => 'actualizado@test.com',
                'descripcion'       => 'Descripción actualizada',
                'lugar'             => 'Lugar actualizado',
                'fecha_hora'        => now()->format('Y-m-d\TH:i'),
                'tipo'              => 'Propietario',
                'autorizacion'      => true,
                'origen'            => 'policia',
                'estado'            => 'activo',
                'fotos_existentes'  => ['vieja1.jpg'],
                'fotos'             => [$nuevaFoto],
            ]);

        $reporte->refresh();

        $this->assertEquals('Test Actualizado', $reporte->nombre_reportante);
        $this->assertEquals('policia', $reporte->origen);
        $this->assertEquals('activo', $reporte->estado);

        // Should have vieja1.jpg + nueva.jpg
        $this->assertCount(2, $reporte->fotos);
        $this->assertContains('vieja1.jpg', $reporte->fotos);
    }
}
