<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return Client::all();
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
        // La validation
        $request->validate([
            'id_utilisateur' => 'required',
            'nationalite' => 'required',
            'ville' => 'required',
            'numero_telephone' => 'required',
            'numero_permis' => 'required',
        ]);

        // L'insertion des données
        $clientData = [
            'id_utilisateur' => $request->id_utilisateur,
            'nationalite' => $request->nationalite,
            'ville' => $request->ville,
            'numero_telephone' => $request->numero_telephone,
            'numero_permis' => $request->numero_permis,
        ];

        // if the 'numero_passport' has a value
        if ($request->has('numero_passport')) {
            $clientData['numero_passport'] = $request->numero_passport;
        }

        $client = Client::create($clientData);
        
        return response()->json([
            'message' => 'client added successfully',
            'client' => $client
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($idUser)
    {
        $results = DB::table('voitures as v')
                ->join('reservations as r', 'v.id', '=', 'r.id_voiture')
                ->join('clients as c', 'r.id_client', '=', 'c.id')
                ->select('v.id as VoitureId', 'r.id as ReservationId')
                ->where('c.id_utilisateur', '=', $idUser)
                ->get();
        return response()->json([
            'results' => $results
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Client $client)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        //
    }
}
