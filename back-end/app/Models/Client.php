<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_utilisateur',
        'nationalite',
        'ville',
        'numero_telephone',
        'numero_permis',
        'numero_passport',
    ];

    // protected $hidden =[
    //     'numero_permis',
    //     'numero_passport',
    // ];
}
