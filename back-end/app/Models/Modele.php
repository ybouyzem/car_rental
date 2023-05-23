<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Modele extends Model
{
    public $timestamps = false;

    use HasFactory;
    protected $fillable = [
        'id_marque',
        'libelle',
    ];
}
