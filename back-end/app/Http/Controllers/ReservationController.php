<?php

namespace App\Http\Controllers;
use Illuminate\Support\Carbon;

use App\Models\Reservation;
use App\Models\Utilisateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Voiture;
use App\Models\Client;

use function PHPUnit\Framework\isEmpty;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
            'id_voiture' => 'required',
            'id_client' => 'required',
            'location' => 'required',
            'retour' => 'required',
        ]);

        // L'insertion des données
        $orderData = [
            'id_voiture' => $request->id_voiture,
            'id_client' => $request->id_client,
            'location' =>  $request->location,
            'retour' => $request->retour,
        ];

        // if the 'prolongation' has a value
        if ($request->has('prolongation')) {
            $orderData['prolongation'] = $request->prolongation;
        }

        Reservation::create($orderData);

        return response()->json([
            'message' => 'order added successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $order = Reservation::findOrFail($id);
        return response()->json([
            'order' => $order
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reservation $reservation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Reservation $reservation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reservation $reservation)
    {
        //
    }

    public function reservationsNumber(){
        $reservationsNumber = DB::table('reservations')->count();
        return $reservationsNumber;
    }

    public function income(){
        $reservationsNumber = DB::table('reservations')->count();

        $startDate = DB::table('reservations')
            ->select(DB::raw('UNIX_TIMESTAMP(created_at) AS seconds'))
            ->get();
        $endDate = DB::table('reservations')
        ->select(DB::raw('UNIX_TIMESTAMP(retour) AS seconds'))
        ->get();

        $price = DB::table('voitures')
            ->join('reservations', 'voitures.id', '=', 'reservations.id_voiture')
            ->select('voitures.prix_jour')
            ->get();

            $seconds=0;
            $income=0;

            $row = DB::table('reservations')
            ->whereNotNull('id')
            ->get();

if ($row->isEmpty()) {
    return $income;
} else {

    for($i=0;$i<$reservationsNumber;$i++){
        $seconds+=$endDate[$i]->seconds-$startDate[$i]->seconds;
        $days=$seconds/86400;
        $income+=$days*($price[$i]->prix_jour);

    }
    return round($income,3);
}
}
    public function allOrders(){
        $orders = DB::table('clients')
        ->select('clients.id as client_id', 'reservations.id as order_id', 'clients.*', 'utilisateurs.*', 'voitures.*', 'reservations.*')
        ->join('utilisateurs', 'clients.id_utilisateur', '=', 'utilisateurs.id')
        ->join('reservations', 'reservations.id_client', '=', 'clients.id')
        ->join('voitures', 'voitures.id', '=', 'reservations.id_voiture')
        ->get();

        $cars = Voiture::select('modeles.libelle as modele', 'marques.libelle as marque', 'voitures.*')
        ->join('modeles', 'voitures.id_modele', '=', 'modeles.id')
        ->join('marques', 'modeles.id_marque', '=', 'marques.id')
        ->where('voitures.statut', '=', 'Available')
        ->get();
        return view('orders',compact('orders','cars'));
    }

    public function addOrder(Request $request) {


        $validatedData = $request->validate([
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required',
            'phoneNumber' => 'required',
            'driveLicense' => 'required',
            'city' => 'required',
        ]);


        $order=new Reservation();
        $client=new Client();
        $user=new Utilisateur();

        $user->nom=$request->input('firstName');
        $user->prenom=$request->input('lastName');
        $user->email=$request->input('email');
        $user->password='gsfhdfghgfh';
        $user->save();

        $id = DB::select("SELECT id FROM utilisateurs WHERE id = LAST_INSERT_ID()");
        $user_id = $id[0]->id;

        $client->id_utilisateur=$user_id;
        $client->numero_telephone=$request->input('phoneNumber');
        $client->numero_permis=$request->input('driveLicense');
        $client->ville=$request->input('city');
        $client->nationalite=$request->input('nationality');
        $client->numero_passport=$request->input('passportNumber');
        $client->save();

        $id=DB::select("SELECT id FROM clients WHERE id = LAST_INSERT_ID()");
        $client_id = $id[0]->id;

        $order->id_client=$client_id;
        $order->id_voiture=$request->input('car_id');
        $order->location=$request->input('rentalDate');
        $order->retour=$request->input('returnDate');
        $car_id=$request->input('car_id');
        $order->save();

        DB::table('voitures')
        ->where('id', $car_id)
        ->update(['statut' => 'Rented']);

        return redirect()->back()->with('success', 'order added successfully.');;

    }

    public function deleteOrder($id){
        $car_id = DB::table('reservations')
    ->select('id_voiture')
    ->where('id', $id)
    ->value('id_voiture');
        $client_id=DB::table('reservations')
    ->select('id_client')
    ->where('id',$id)
    ->value('id_client');

    DB::table('voitures')
    ->where('id', $car_id)
    ->update(['statut' => 'Available']);


    // $idUser = DB::table('utilisateurs')
    // ->join('clients', 'utilisateurs.id', '=', 'clients.id_utilisateur')
    // ->join('reservations', 'clients.id', '=', 'reservations.id_client')
    // ->where('reservations.id', '=', $id)
    // ->select('utilisateurs.id as id_user')
    // ->value('id_user');


    DB::table('reservations')
    ->where('id', $id)
    ->delete();

    DB::table('clients')
    ->where('id',$client_id)
    ->delete();


        return redirect()->back()->with('success', 'order deleted successfully.');;
    }


    public function modifyOrder(Request $request,$id_order) {
        $validatedData = $request->validate([
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required',
            'phoneNumber' => 'required',
            'driveLicense' => 'required',
            'city' => 'required',
        ]);




        $idies = DB::table('reservations')
            ->select('id_client', 'id_voiture')
            ->where('id', '=', $id_order)
            ->get();

            $id_client = $idies->pluck('id_client')->first();
            $id_voiture = $idies->pluck('id_voiture')->first();


        $id = DB::table('clients')
            ->select('id_utilisateur')
            ->where('id', '=', $id_client)
            ->get();

        $id_user = $id->pluck('id_utilisateur')->first();

        $nom=$request->input('firstName');
        $prenom=$request->input('lastName');
        $email=$request->input('email');

        DB::table('utilisateurs')
        ->where('id', $id_user)
        ->update([
            'nom' => $nom,
            'prenom' => $prenom,
            'email' => $email
        ]);

        $numero_telephone=$request->input('phoneNumber');
        $numero_permis=$request->input('driveLicense');
        $ville=$request->input('city');
        $nationalite=$request->input('nationality');
        $numero_passport=$request->input('passportNumber');

        DB::table('clients')
        ->where('id', $id_client)
        ->update([
            'numero_telephone' => $numero_telephone,
            'numero_permis' => $numero_permis,
            'ville' => $ville,
            'nationalite' => $nationalite,
            'numero_passport' => $numero_passport,
        ]);



        $car_id=$request->input('car_id');
        $location=$request->input('rentalDate');
        $retour=$request->input('returnDate');

        DB::table('voitures')
        ->where('id', $id_voiture)
        ->update(['statut' => 'Available']);

        DB::table('voitures')
        ->where('id', $car_id)
        ->update(['statut' => 'Rented']);

        DB::table('reservations')
        ->where('id', $id_order)
        ->update([
            'id_voiture' => $car_id,
            'location' => $location,
            'retour'=> $retour,
        ]);

        return redirect()->back()->with('success', 'order updated successfully.');

    }

    function acceptOrder($id_order){

        $currentDateTime = Carbon::now();
        DB::table('reservations')
        ->where('id', $id_order)
        ->update(['reservation_verifie_le' => '2023-05-24 00:00:00']);

        return redirect()->back()->with('success', 'order updated successfully.');
    }
}
