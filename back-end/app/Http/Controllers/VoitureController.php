<?php

namespace App\Http\Controllers;

use App\Models\Voiture;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Reservation;

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
        $voitures = DB::table('reservations')
        ->join('clients', 'clients.id', '=', 'reservations.id_client')
        ->join('utilisateurs', 'utilisateurs.id', '=', 'clients.id_utilisateur')
        ->join('voitures', 'voitures.id', '=', 'reservations.id_voiture')
        ->select('voitures.id as car_id', 'voitures.*', 'reservations.id_client as client_id', 'utilisateurs.*', 'clients.*')
        ->where('voitures.statut', '=', 'Rented')
        ->get();



        return $voitures;
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
    public function carsNumber(){
        $carsNumber = DB::table('voitures')->count();
        return $carsNumber;
    }
    public function dashboard()
    {
        $e=new EmployeeController();
        $c=new ClientController();
        $r=new ReservationController();
        $rentedCars = $this->rentedCars();
        $carsNumber = $this->carsNumber();
        $clientsNumber=$c->clientsNumber();
        $reservationsNumber=$r->reservationsNumber();
        $employersNumber=$e->employersNumber();
        $income=$r->income();
        return view('index', compact('rentedCars', 'carsNumber','clientsNumber','reservationsNumber','employersNumber','income'));
    }

    public function deleteCar($id) {
        $car = Voiture::find($id);

        if (!$car) {
            // Handle client not found error
            return redirect()->back()->with('error', 'client not found.');
        }

        // Delete the client from the database
        $car->delete();

        // Redirect back to the previous page with a success message
        return redirect()->back()->with('success', 'client deleted successfully.');
    }
}
