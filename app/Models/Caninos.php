<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Caninos extends Model
{
    use HasFactory;

    protected $table = 'caninos';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'nombre',
        'sexo',
        'fecha_nacimiento',
        'edad_canino',
        'raza',
        'caracteristicas',
        'es_peligroso',
        'tiene_agresiones',
        'entrenado_ataque',
        'entrenado_proteccion',
        'esterilizado',
        'observaciones',
        'foto_url',
        'vacunas',
        'poliza',
        'certificado_sanidad',
        'vencimiento',
        'estado',
        'motivo',
        'created_at',
        'updated_at',

    ];

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function certificado()
    {
        return $this->belongsTo(Certificados::class, 'id', 'canino_id');
    }

    public function novedades()
    {
        return $this->hasMany(HashNovedades::class, 'canino_id', 'id');
    }


}
