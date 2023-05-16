<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Utilisateur;
use App\Models\Voiture;
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

    public function allClients(){
        $allClients = DB::table('utilisateurs')
        ->select('utilisateurs.*', DB::raw('SUM(voitures.prix_jour) as total_payant'), DB::raw('COUNT(clients.id) as nombre_de_commandes'))
        ->join('clients', 'utilisateurs.id', '=', 'clients.id_utilisateur')
        ->join('reservations', 'clients.id', '=', 'reservations.id_client')
        ->join('voitures', 'voitures.id', '=', 'reservations.id_voiture')
        ->groupBy('utilisateurs.id','utilisateurs.nom','utilisateurs.prenom','utilisateurs.email','utilisateurs.password','utilisateurs.created_at','utilisateurs.updated_at')
        ->get();

        return view('clients',compact('allClients'));
    }

    public function clientsNumber(){
        $clientsNumber = DB::table('clients')->count();
        return $clientsNumber;
    }

    public function clientsRent(){
        $clientsRent = DB::table('reservations')
        ->join('clients', 'reservations.id_client', '=', 'clients.id')
        ->join('utilisateurs', 'clients.id_utilisateur', '=', 'utilisateurs.id')
        ->join('voitures', 'reservations.id_voiture', '=', 'voitures.id')
        ->select('reservations.id_client', 'utilisateurs.nom', 'utilisateurs.prenom')
        ->where('voitures.statut', '=', 'Rented')
        ->get();
        return $clientsRent;
    }

    public function deleteClient($id)
    {
        $client = Client::find($id);

        // if (!$client) {
        //     // Handle client not found error
        //     return redirect()->back()->with('error', 'client not found.');
        // }

        // Delete the client from the database
        $client->delete();

        // Redirect back to the previous page with a success message
        // return redirect()->back()->with('success', 'client deleted successfully.');
        return redirect('clients');
    }
}
