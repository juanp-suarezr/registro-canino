<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InformacionUsuario extends Model
{
    use HasFactory;

    protected $table = 'informacion_usuario';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'nombre_completo',
        'tipo_documento',
        'numero_documento',
        'direccion',
        'zona',
        'comuna',
        'edad',
        'celular',
        'telefono',
        'created_at',
        'updated_at',

    ];


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }


}
