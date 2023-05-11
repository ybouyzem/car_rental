<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voiture extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_modele',
        'matricule',
        'image',
        'statut',
        'carburant',
        'boîte_vitesse',
        'nombre_places',
        'date_debut_assurance',
        'date_fin_assurance',
        'cout_assurance',
        'description',
        'prix_jour',
    ];
}
