<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
        'nombre',
        'contacto',
        'email',
        'descripcion',
        'tipo',
        'lugar',
        'raza',
        'banner',
        'estado',
        'created_at',
        'updated_at',

    ];




}
