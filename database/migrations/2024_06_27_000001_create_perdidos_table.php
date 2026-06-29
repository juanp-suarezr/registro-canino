<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * Crea o actualiza la tabla 'perdidos' con todos los campos necesarios
     * para el registro de animales perdidos y encontrados.
     */
    public function up(): void
    {
        if (!Schema::hasTable('perdidos')) {
            // =========================================================
            // CREAR LA TABLA DESDE CERO (si no existe)
            // =========================================================
            Schema::create('perdidos', function (Blueprint $table) {
                $table->id();

                // --- Relación con usuario (opcional) ---
                // Para cuando reporta un usuario autenticado: policía, hospivet, etc.
                $table->foreignId('user_id')
                    ->nullable()
                    ->constrained('users')
                    ->nullOnDelete();

                // --- Datos del reportante ---
                $table->string('nombre_reportante');               // Nombre completo de quien reporta
                $table->string('contacto');                        // Celular de contacto
                $table->string('email')->nullable();              // Email de contacto

                // --- Datos del animal ---
                $table->string('nombre')->nullable();             // Nombre del canino (opcional)
                $table->string('raza')->nullable();               // Raza o parecido
                $table->string('color')->nullable();              // Color del pelaje
                $table->enum('tamano', ['pequeno', 'mediano', 'grande'])->nullable(); // Tamaño
                $table->text('particularidades')->nullable();     // Particularidades / señas particulares

                // --- Descripción y estado ---
                $table->text('descripcion');                      // Descripción general
                $table->enum('estado_encuentra', [
                    'bueno', 'regular', 'malo', 'herido'
                ])->nullable()->comment('Estado físico en que se encuentra el animal');

                // --- Lugar y fecha ---
                $table->string('lugar');                          // Lugar donde se perdió/encontró
                $table->dateTime('fecha_hora');                   // Fecha y hora del incidente

                // --- Tipo de reporte ---
                $table->enum('tipo', [
                    'Propietario',       // Busca a su mascota perdida (lost)
                    'Canino perdido'     // Encontró un animal (found)
                ])->comment('Propietario = dueño busca su mascota | Canino perdido = alguien encontró un animal');

                // --- Fotos (array JSON, máximo 6) ---
                $table->json('fotos')->nullable()->comment('Array de nombres de archivos de fotos (máx 6)');

                // --- Autorización y origen ---
                $table->boolean('autorizacion')->default(false)->comment('Consentimiento para publicar datos');
                $table->enum('origen', [
                    'ciudadano', 'policia', 'hospivet', 'clinica', 'fundacion'
                ])->default('ciudadano')->comment('Entidad que realiza el reporte');

                // --- Estado del reporte y aprobación ---
                $table->enum('estado', [
                    'activo', 'pendiente', 'aprobado', 'rechazado', 'resuelto', 'no_encontrado'
                ])->default('activo')->comment('Estado del reporte');
                $table->text('motivo_rechazo')->nullable();      // Motivo si fue rechazado
                $table->foreignId('aprobado_por')
                    ->nullable()
                    ->constrained('users')
                    ->nullOnDelete()
                    ->comment('Usuario que aprobó/rechazó el reporte');

                // --- Timestamps ---
                $table->timestamps();
            });
        } else {
            // =========================================================
            // ACTUALIZAR TABLA EXISTENTE (agregar columnas faltantes)
            // =========================================================
            Schema::table('perdidos', function (Blueprint $table) {
                // user_id
                if (!Schema::hasColumn('perdidos', 'user_id')) {
                    $table->foreignId('user_id')
                        ->nullable()
                        ->constrained('users')
                        ->nullOnDelete();
                }

                // nombre_reportante
                if (!Schema::hasColumn('perdidos', 'nombre_reportante')) {
                    $table->string('nombre_reportante')->nullable();
                }

                // fotos (reemplaza banner/banner2)
                if (!Schema::hasColumn('perdidos', 'fotos')) {
                    $table->json('fotos')->nullable()->after('tipo');
                }

                // color
                if (!Schema::hasColumn('perdidos', 'color')) {
                    $table->string('color')->nullable();
                }

                // tamano
                if (!Schema::hasColumn('perdidos', 'tamano')) {
                    $table->enum('tamano', ['pequeno', 'mediano', 'grande'])->nullable();
                }

                // particularidades
                if (!Schema::hasColumn('perdidos', 'particularidades')) {
                    $table->text('particularidades')->nullable();
                }

                // estado_encuentra
                if (!Schema::hasColumn('perdidos', 'estado_encuentra')) {
                    $table->enum('estado_encuentra', ['bueno', 'regular', 'malo', 'herido'])->nullable();
                }

                // fecha_hora
                if (!Schema::hasColumn('perdidos', 'fecha_hora')) {
                    $table->dateTime('fecha_hora')->nullable();
                }

                // autorizacion
                if (!Schema::hasColumn('perdidos', 'autorizacion')) {
                    $table->boolean('autorizacion')->default(false);
                }

                // origen
                if (!Schema::hasColumn('perdidos', 'origen')) {
                    $table->enum('origen', ['ciudadano', 'policia', 'hospivet', 'clinica', 'fundacion'])
                        ->default('ciudadano');
                }

                // motivo_rechazo
                if (!Schema::hasColumn('perdidos', 'motivo_rechazo')) {
                    $table->text('motivo_rechazo')->nullable();
                }

                // aprobado_por
                if (!Schema::hasColumn('perdidos', 'aprobado_por')) {
                    $table->foreignId('aprobado_por')
                        ->nullable()
                        ->constrained('users')
                        ->nullOnDelete();
                }
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // No revertimos automáticamente para evitar pérdida de datos
        // Si se requiere revertir, hacerlo manualmente
    }
};
