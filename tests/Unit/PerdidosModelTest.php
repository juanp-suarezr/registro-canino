<?php

namespace Tests\Unit;

use App\Models\Perdidos;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PerdidosModelTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        // Run only the perdidos migration for this test
        $this->artisan('migrate', [
            '--path' => 'database/migrations/2024_06_27_000001_create_perdidos_table.php',
            '--realpath' => true,
        ]);
    }

    /** @test */
    public function it_has_correct_table_name()
    {
        $model = new Perdidos();
        $this->assertEquals('perdidos', $model->getTable());
    }

    /** @test */
    public function it_has_correct_fillable_fields()
    {
        $model = new Perdidos();
        $expectedFillable = [
            'user_id',
            'nombre_reportante',
            'contacto',
            'email',
            'nombre',
            'raza',
            'color',
            'tamano',
            'particularidades',
            'descripcion',
            'estado_encuentra',
            'lugar',
            'fecha_hora',
            'tipo',
            'fotos',
            'autorizacion',
            'origen',
            'estado',
            'motivo_rechazo',
            'aprobado_por',
            'created_at',
            'updated_at',
        ];

        foreach ($expectedFillable as $field) {
            $this->assertContains($field, $model->getFillable(), "Field '{$field}' should be fillable");
        }
    }

    /** @test */
    public function it_has_correct_casts()
    {
        $model = new Perdidos();
        $casts = $model->getCasts();

        $this->assertArrayHasKey('fotos', $casts);
        $this->assertEquals('array', $casts['fotos']);

        $this->assertArrayHasKey('autorizacion', $casts);
        $this->assertEquals('boolean', $casts['autorizacion']);

        $this->assertArrayHasKey('fecha_hora', $casts);
        $this->assertEquals('datetime', $casts['fecha_hora']);
    }

    /** @test */
    public function it_has_usuario_relation()
    {
        $model = new Perdidos();
        $this->assertInstanceOf(
            \Illuminate\Database\Eloquent\Relations\BelongsTo::class,
            $model->usuario()
        );
    }

    /** @test */
    public function it_has_aprobador_relation()
    {
        $model = new Perdidos();
        $this->assertInstanceOf(
            \Illuminate\Database\Eloquent\Relations\BelongsTo::class,
            $model->aprobador()
        );
    }

    /** @test */
    public function scope_activos_filters_correctly()
    {
        $query = Perdidos::activos();
        $this->assertStringContainsString('estado', $query->toSql());
        $this->assertEquals('activo', $query->getBindings()[0]);
    }

    /** @test */
    public function scope_pendientes_filters_correctly()
    {
        $query = Perdidos::pendientes();
        $this->assertStringContainsString('estado', $query->toSql());
        $this->assertEquals('pendiente', $query->getBindings()[0]);
    }

    /** @test */
    public function scope_resueltos_filters_correctly()
    {
        $query = Perdidos::resueltos();
        $this->assertStringContainsString('estado', $query->toSql());
        $this->assertEquals('resuelto', $query->getBindings()[0]);
    }

    /** @test */
    public function scope_de_tipo_filters_correctly()
    {
        $query = Perdidos::deTipo('Propietario');
        $sql = $query->toSql();
        $this->assertStringContainsString('tipo', $sql);
        $this->assertEquals('Propietario', $query->getBindings()[0]);
    }

    /** @test */
    public function scope_de_origen_filters_correctly()
    {
        $query = Perdidos::deOrigen('policia');
        $sql = $query->toSql();
        $this->assertStringContainsString('origen', $sql);
        $this->assertEquals('policia', $query->getBindings()[0]);
    }

    /** @test */
    public function it_returns_empty_fotos_urls_when_no_fotos()
    {
        $model = new Perdidos();
        $model->fotos = null;

        $this->assertIsArray($model->fotos_urls);
        $this->assertEmpty($model->fotos_urls);
    }

    /** @test */
    public function it_generates_fotos_urls_from_array()
    {
        $model = new Perdidos();
        $model->fotos = ['foto1.jpg', 'foto2.jpg'];

        $urls = $model->fotos_urls;
        $this->assertCount(2, $urls);
        $this->assertStringContainsString('foto1.jpg', $urls[0]);
        $this->assertStringContainsString('foto2.jpg', $urls[1]);
    }

    /** @test */
    public function it_filters_out_NA_from_fotos()
    {
        $model = new Perdidos();
        $model->fotos = ['foto1.jpg', 'NA', 'foto2.jpg'];

        $urls = $model->fotos_urls;
        $this->assertCount(2, $urls);
    }

    /** @test */
    public function it_returns_first_foto_url()
    {
        $model = new Perdidos();
        $model->fotos = ['primera.jpg', 'segunda.jpg'];

        $this->assertStringContainsString('primera.jpg', $model->primera_foto_url);
    }

    /** @test */
    public function it_returns_null_primera_foto_when_empty()
    {
        $model = new Perdidos();
        $model->fotos = null;

        $this->assertNull($model->primera_foto_url);
    }

    /** @test */
    public function it_counts_fotos_correctly()
    {
        $model = new Perdidos();
        $model->fotos = ['a.jpg', 'b.jpg', 'c.jpg'];

        $this->assertEquals(3, $model->cantidad_fotos);
    }

    /** @test */
    public function it_counts_zero_when_no_fotos()
    {
        $model = new Perdidos();
        $model->fotos = null;

        $this->assertEquals(0, $model->cantidad_fotos);
    }

    /** @test */
    public function it_returns_correct_tipo_labels()
    {
        $model = new Perdidos();

        $model->tipo = 'Propietario';
        $this->assertEquals('Búsqueda de canino perdido', $model->tipo_label);

        $model->tipo = 'Canino perdido';
        $this->assertEquals('Búsqueda de propietario', $model->tipo_label);
    }

    /** @test */
    public function it_returns_correct_estado_encuentra_labels()
    {
        $model = new Perdidos();

        $model->estado_encuentra = 'bueno';
        $this->assertEquals('Buen estado', $model->estado_encuentra_label);

        $model->estado_encuentra = 'herido';
        $this->assertEquals('Herido/lesionado', $model->estado_encuentra_label);

        $model->estado_encuentra = null;
        $this->assertEquals('No especificado', $model->estado_encuentra_label);
    }

    /** @test */
    public function it_returns_correct_origen_labels()
    {
        $model = new Perdidos();

        $model->origen = 'ciudadano';
        $this->assertEquals('Ciudadano', $model->origen_label);

        $model->origen = 'policia';
        $this->assertEquals('Policía', $model->origen_label);

        $model->origen = 'hospivet';
        $this->assertEquals('Hospivet', $model->origen_label);

        $model->origen = 'clinica';
        $this->assertEquals('Clínica veterinaria', $model->origen_label);

        $model->origen = 'fundacion';
        $this->assertEquals('Fundación', $model->origen_label);
    }

    /** @test */
    public function it_returns_correct_tamano_labels()
    {
        $model = new Perdidos();

        $model->tamano = 'pequeno';
        $this->assertEquals('Pequeño', $model->tamano_label);

        $model->tamano = 'mediano';
        $this->assertEquals('Mediano', $model->tamano_label);

        $model->tamano = 'grande';
        $this->assertEquals('Grande', $model->tamano_label);

        $model->tamano = null;
        $this->assertEquals('No especificado', $model->tamano_label);
    }

    /** @test */
    public function it_can_create_a_report_with_minimal_data()
    {
        $reporte = Perdidos::create([
            'nombre_reportante' => 'Juan Pérez',
            'contacto'          => '3001234567',
            'email'             => 'juan@example.com',
            'descripcion'       => 'Perro negro de tamaño mediano',
            'lugar'             => 'Parque Central',
            'fecha_hora'        => now(),
            'tipo'              => 'Propietario',
            'autorizacion'      => true,
            'origen'            => 'ciudadano',
            'estado'            => 'activo',
        ]);

        $this->assertNotNull($reporte);
        $this->assertEquals('activo', $reporte->estado);
        $this->assertDatabaseHas('perdidos', [
            'id'                 => $reporte->id,
            'nombre_reportante'  => 'Juan Pérez',
            'tipo'               => 'Propietario',
            'estado'             => 'activo',
        ]);
    }

    /** @test */
    public function it_can_create_report_with_all_optional_fields()
    {
        $reporte = Perdidos::create([
            'nombre_reportante' => 'María García',
            'contacto'          => '3107654321',
            'email'             => 'maria@example.com',
            'nombre'            => 'Max',
            'raza'              => 'Pastor Alemán',
            'color'             => 'Negro y marrón',
            'tamano'            => 'grande',
            'particularidades'  => 'Tiene collar rojo',
            'descripcion'       => 'Perro grande, amigable',
            'estado_encuentra'  => 'bueno',
            'lugar'             => 'Carrera 5 #10-20',
            'fecha_hora'        => now()->subHours(5),
            'tipo'              => 'Canino perdido',
            'fotos'             => ['foto1.jpg', 'foto2.jpg'],
            'autorizacion'      => true,
            'origen'            => 'policia',
            'estado'            => 'pendiente',
        ]);

        $this->assertNotNull($reporte);
        $this->assertEquals('Max', $reporte->nombre);
        $this->assertEquals('grande', $reporte->tamano);
        $this->assertCount(2, $reporte->fotos);
        $this->assertEquals('pendiente', $reporte->estado);
        $this->assertEquals('policia', $reporte->origen);
    }

    /** @test */
    public function it_returns_correct_estado_label()
    {
        $model = new Perdidos();

        $model->estado = 'activo';
        $this->assertEquals('Activo', $model->estado_label);

        $model->estado = 'pendiente';
        $this->assertEquals('Pendiente', $model->estado_label);

        $model->estado = 'aprobado';
        $this->assertEquals('Aprobado', $model->estado_label);

        $model->estado = 'rechazado';
        $this->assertEquals('Rechazado', $model->estado_label);

        $model->estado = 'resuelto';
        $this->assertEquals('Resuelto', $model->estado_label);

        $model->estado = 'no_encontrado';
        $this->assertEquals('No encontrado', $model->estado_label);
    }
}
