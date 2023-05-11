<?php

namespace App\Http\Controllers;

use App\Models\Voiture;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VoitureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = $request->input('perPage', 10); // Number of cars per page
        $voitures = Voiture::select('id', 'id_modele', 'image', 'carburant', 'boîte_vitesse', 'nombre_places', 'description', 'prix_jour')
            ->where('statut', 'Available')
            ->paginate($perPage);

        return response()->json([
            'voitures' => $voitures,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $voiture = Voiture::findOrFail($id);
        return response()->json([
            'voiture' => $voiture
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Voiture $voiture)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Voiture $voiture)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Voiture $voiture)
    {
        //
    }

    public function rentedCars(){
        $voitures=DB::table('marques')
        ->leftJoin('modeles', 'marques.id', '=', 'modeles.id_marque')
        ->leftJoin('voitures', 'voitures.id', '=', 'modeles.id')
        ->select('voitures.id', 'voitures.matricule', 'modeles.libelle as modele', 'marques.libelle as marque', 'voitures.prix_jour')
        ->whereColumn('marques.id', 'modeles.id_marque')
        ->where('voitures.statut', '=', 'Rented')
        ->get();



        //  $voitures=Voiture::select('id', 'id_modele', 'image', 'carburant', 'boîte_vitesse', 'nombre_places', 'description', 'prix_jour')
        //     ->where('statut', 'Rented')->get();
        return view('index',compact('voitures'));
    }
}
