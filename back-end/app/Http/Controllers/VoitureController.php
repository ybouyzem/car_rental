<?php

namespace App\Http\Controllers;

use App\Models\Marque;
use App\Models\Voiture;
use App\Models\Modele;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Reservation;
use Illuminate\Database\Eloquent\Model;

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
        $voitures = DB::table('reservations')
        ->join('clients', 'clients.id', '=', 'reservations.id_client')
        ->join('utilisateurs', 'utilisateurs.id', '=', 'clients.id_utilisateur')
        ->join('voitures', 'voitures.id', '=', 'reservations.id_voiture')
        ->join('modeles', 'voitures.id_modele', '=', 'modeles.id')
        ->join('marques', 'modeles.id_marque', '=', 'marques.id')
        ->select('voitures.id as car_id', 'voitures.*', 'reservations.id_client as client_id', 'utilisateurs.*', 'clients.*','modeles.libelle as modele','marques.libelle as marque')
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
        return view('cars',compact('voitures'));

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
        $v=new VoitureController();
        $rentedCars = $v->rentedCars();
        $carsNumber = $v->carsNumber();
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
        return redirect()->back()->with('success', 'car deleted successfully.');
    }

    public function addCar(Request $request) {

        $validatedData = $request->validate([
            'marque' => 'required',
            'model' => 'required',
            'matricule' => 'required',
            'carburant' => 'required',
            'gearbox' => 'required',
            'insurranceSD' => 'required',
            'insurranceED' => 'required',
            'insurranceCost' => 'required',
            'description' => 'required',
            'prix' => 'required',
            'seatsNumber' => 'required',
        ]);


        $car=new Voiture();
        $marque=new Marque();
        $model=new Modele();


        $marque->libelle=$request->input('marque');
        $marque->save();
        $id = DB::select("SELECT id FROM marques WHERE id = LAST_INSERT_ID()");
        $marque_id = $id[0]->id;

        $model->id_marque=$marque_id;
        $model->libelle=$request->input('model');
        $model->save();
        $id = DB::select("SELECT id FROM modeles WHERE id = LAST_INSERT_ID()");
        $model_id = $id[0]->id;



        $car->id_modele=$model_id;
        $car->image=$request->input('image');
        $car->matricule=$request->input('matricule');
        $car->statut='Available';
        $car->carburant=$request->input('carburant');
        $car->boîte_vitesse=$request->input('gearbox');
        $car->date_debut_assurance=$request->input('insurranceSD');
        $car->date_fin_assurance=$request->input('insurranceED');
        $car->cout_assurance=$request->input('insurranceCost');
        $car->description=$request->input('description');
        $car->prix_jour=$request->input('prix');
        $car->nombre_places=$request->input('seatsNumber');

        $car->save();
        return redirect()->back()->with('success', 'car added successfully.');

    }


    public function modifyCar(Request $request,$id_car){

        $validatedData = $request->validate([
            'marque' => 'required',
            'model' => 'required',
            'matricule' => 'required',
            'carburant' => 'required',
            'gearbox' => 'required',
            'insurranceSD' => 'required',
            'insurranceED' => 'required',
            'insurranceCost' => 'required',
            'description' => 'required',
            'prix' => 'required',
            'seatsNumber' => 'required',
        ]);


        $id = DB::table('voitures')
        ->select('id_modele')
        ->where('id', '=', $id_car)
        ->get();
        $id_modele=$id->pluck('id_modele')->first();

        $id = DB::table('modeles')
        ->select('id_marque')
        ->where('id', '=', $id_modele)
        ->get();
        $id_marque=$id->pluck('id)marque')->first();




        $marque=$request->input('marque');
        DB::table('marques')
        ->where('id', $id_marque)
        ->update([
            'libelle' => $marque,
        ]);


        $model=$request->input('model');
        DB::table('modeles')
        ->where('id', $id_modele)
        ->update([
            'libelle' => $model,
        ]);


        $image=$request->input('image');
        $matricule=$request->input('matricule');
        $carburant=$request->input('carburant');
        $boîte_vitesse=$request->input('gearbox');
        $date_debut_assurance=$request->input('insurranceSD');
        $date_fin_assurance=$request->input('insurranceED');
        $cout_assurance=$request->input('insurranceCost');
        $description=$request->input('description');
        $prix_jour=$request->input('prix');
        $nombre_places=$request->input('seatsNumber');

        DB::table('voitures')
        ->where('id', $id_car)
        ->update([
            'image' => $image,
            'matricule' => $matricule,
            'carburant' => $carburant,
            'prix_jour' => $prix_jour,
            'boîte_vitesse' => $boîte_vitesse,
            'date_debut_assurance' => $date_debut_assurance,
            'date_fin_assurance' => $date_fin_assurance,
            'cout_assurance' => $cout_assurance,
            'nombre_places' => $nombre_places,
            'description' => $description,
        ]);


        return redirect()->back()->with('success', 'car modified successfully.');
    }
}
