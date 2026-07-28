<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Perdidos extends Model
{
    use HasFactory;

    protected $table = 'perdidos';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        // Relación con usuario
        'user_id',

        // Datos del reportante
        'nombre_reportante',
        'contacto',
        'email',

        // Datos del animal
        'nombre',
        'raza',
        'color',
        'tamano',
        'particularidades',

        // Descripción y estado
        'descripcion',
        'estado_encuentra',

        // Lugar y fecha
        'lugar',
        'fecha_hora',

        // Tipo de reporte
        'tipo',

        // Fotos (array JSON)
        'fotos',

        // Autorización y origen
        'autorizacion',
        'origen',

        // Estado del reporte y aprobación
        'estado',
        'motivo_rechazo',
        'aprobado_por',

        // Timestamps
        'created_at',
        'updated_at',
    ];

    /**
     * Atributos adicionales incluidos en la serialización JSON.
     * Permite que Vue acceda directamente a fotos_urls, primera_foto_url, etc.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'fotos_urls',
        'primera_foto_url',
        'cantidad_fotos',
        'tipo_label',
        'estado_encuentra_label',
        'origen_label',
        'tamano_label',
        'estado_label',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'fotos'         => 'array',        // JSON automaticamente → array PHP
        'fecha_hora'    => 'datetime',
        'autorizacion'  => 'boolean',
        'created_at'    => 'datetime',
        'updated_at'    => 'datetime',
    ];

    // ============================================================
    // RELACIONES
    // ============================================================

    /**
     * Usuario que realizó el reporte (si está autenticado).
     * Aplica para policía, hospivet, clínica, fundación.
     */
    public function usuario(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Usuario que aprobó o rechazó el reporte.
     */
    public function aprobador(): BelongsTo
    {
        return $this->belongsTo(User::class, 'aprobado_por');
    }

    // ============================================================
    // SCOPES
    // ============================================================

    /**
     * Scope para reportes activos (visibles al público).
     */
    public function scopeActivos($query)
    {
        return $query->where('estado', 'activo');
    }

    /**
     * Scope para reportes pendientes.
     */
    public function scopePendientes($query)
    {
        return $query->where('estado', 'pendiente');
    }

    /**
     * Scope para reportes aprobados.
     */
    public function scopeAprobados($query)
    {
        return $query->where('estado', 'aprobado');
    }

    /**
     * Scope para reportes resueltos (animal recuperado/reunido).
     */
    public function scopeResueltos($query)
    {
        return $query->where('estado', 'resuelto');
    }

    /**
     * Scope para reportes no encontrados.
     */
    public function scopeNoEncontrados($query)
    {
        return $query->where('estado', 'no_encontrado');
    }

    /**
     * Scope para filtrar por tipo de reporte.
     */
    public function scopeDeTipo($query, string $tipo)
    {
        return $query->where('tipo', $tipo);
    }

    /**
     * Scope para filtrar por origen (entidad que reporta).
     */
    public function scopeDeOrigen($query, string $origen)
    {
        return $query->where('origen', $origen);
    }

    // ============================================================
    // ACCESORES / MUTATORS
    // ============================================================

    /**
     * Obtener las URLs completas de todas las fotos como array.
     *
     * Ejemplo de uso en Blade/Vue:
     *   @foreach ($perdido->fotos_urls as $url)
     *     <img src="{{ $url }}" />
     *   @endforeach
     *
     * @return array<int, string>
     */
    public function getFotosUrlsAttribute(): array
    {
        if (empty($this->fotos) || !is_array($this->fotos)) {
            return [];
        }

        return array_map(function (string $foto) {
            // Si es 'NA' lo omitimos
            if ($foto === 'NA') {
                return null;
            }
            return asset('storage/uploads/perdidos/' . $foto);
        }, array_filter($this->fotos, fn($f) => $f !== 'NA' && $f !== null));
    }

    /**
     * Obtener SOLO la primera foto (para cards/vistas previas).
     */
    public function getPrimeraFotoUrlAttribute(): ?string
    {
        $urls = $this->fotos_urls;
        return $urls[0] ?? null;
    }

    /**
     * Cantidad de fotos disponibles.
     */
    public function getCantidadFotosAttribute(): int
    {
        if (empty($this->fotos) || !is_array($this->fotos)) {
            return 0;
        }
        return count(array_filter($this->fotos, fn($f) => $f !== 'NA' && $f !== null));
    }

    /**
     * Etiqueta legible del tipo de reporte.
     */
    public function getTipoLabelAttribute(): string
    {
        return match ($this->tipo) {
            'Propietario'    => 'Búsqueda de canino perdido',
            'Canino perdido' => 'Búsqueda de propietario',
            default          => $this->tipo,
        };
    }

    /**
     * Etiqueta legible del estado físico del animal.
     */
    public function getEstadoEncuentraLabelAttribute(): string
    {
        return match ($this->estado_encuentra) {
            'muy_bien'        => 'Muy bien',
            'bien'            => 'Bien',
            'regular'         => 'Regular',
            'delicado'        => 'Delicado',
            'herido_enfermo'  => 'Herido / Enfermo',
            default           => 'No especificado',
        };
    }

    /**
     * Etiqueta legible del origen del reporte.
     */
    public function getOrigenLabelAttribute(): string
    {
        return match ($this->origen) {
            'ciudadano' => 'Ciudadano',
            'policia'   => 'Policía',
            'hospivet'  => 'Hospivet',
            'clinica'   => 'Clínica veterinaria',
            'fundacion' => 'Fundación',
            default     => $this->origen,
        };
    }

    /**
     * Etiqueta legible del tamaño.
     */
    public function getTamanoLabelAttribute(): string
    {
        return match ($this->tamano) {
            'pequeno' => 'Pequeño',
            'mediano' => 'Mediano',
            'grande'  => 'Grande',
            default   => 'No especificado',
        };
    }

    /**
     * Etiqueta legible del estado del reporte.
     */
    public function getEstadoLabelAttribute(): string
    {
        return match ($this->estado) {
            'activo'        => 'Activo',
            'pendiente'     => 'Pendiente',
            'aprobado'      => 'Aprobado',
            'rechazado'     => 'Rechazado',
            'resuelto'      => 'Resuelto',
            'no_encontrado' => 'No encontrado',
            default         => $this->estado ?? 'Sin estado',
        };
    }
}
