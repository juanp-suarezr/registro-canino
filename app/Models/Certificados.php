<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certificados extends Model
{
    use HasFactory;

    protected $table = 'certificados_caninos';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'canino_id',
        'fecha_emision',
        'fecha_vencimiento',
        'estado',
        'created_at',
        'updated_at',

    ];

    public function canino()
    {
        return $this->belongsTo(Caninos::class, 'canino_id', 'id');
    }

}
