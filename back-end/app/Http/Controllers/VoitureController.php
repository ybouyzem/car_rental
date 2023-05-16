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
        $search = $request->input('search'); // Search query

        $query = Voiture::select('voitures.id', 'voitures.image', 'voitures.carburant', 'voitures.boîte_vitesse', 'voitures.nombre_places', 'voitures.description', 'voitures.prix_jour', 'marques.libelle as marque_libelle', 'modeles.libelle as modele_libelle')
            ->join('modeles', 'voitures.id_modele', '=', 'modeles.id')
            ->join('marques', 'modeles.id_marque', '=', 'marques.id')
            ->where('voitures.statut', 'Available');

        if ($search) {
            // Apply search condition to the query
            $query->where(function ($q) use ($search) {
                $q->where('marques.libelle', 'LIKE', "%$search%")
                    ->orWhere('modeles.libelle', 'LIKE', "%$search%");
            });
        }

        $voitures = $query->paginate($perPage);

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
    public function update(Request $request, $carId)
    {
        //finding the car
        $voiture = Voiture::findOrFail($carId);

        // Update car's status
        $voiture->statut = $request->statut;

        // Save changes to the car's record
        $voiture->save();

        return response()->json([
            'message' => 'car modified successfully'
        ]);
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
        return view('index',compact('voitures'));
    }

    public function allCars(){
         //  $voitures=Voiture::select('id', 'id_modele', 'image', 'carburant', 'boîte_vitesse', 'nombre_places', 'description', 'prix_jour')
        //     ->where('statut', 'Rented')->get();
        $voitures = Voiture::select('modeles.libelle as modele', 'marques.libelle as marque', 'voitures.*')
        ->join('modeles', 'voitures.id_modele', '=', 'modeles.id')
        ->join('marques', 'modeles.id_marque', '=', 'marques.id')
        ->get();
        return view('voitures',compact('voitures'));

    }
}
