<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HashNovedades extends Model
{
    use HasFactory;

    protected $table = 'hash_novedades';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'canino_id',
        'novedad_id',

        'created_at',
        'updated_at',

    ];

    public function novedad()
    {
        return $this->belongsTo(Novedades::class, 'novedad_id', 'id');
    }

    public function canino()
    {
        return $this->hasOne(Caninos::class, 'id', 'canino_id');
    }


}
