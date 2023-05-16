<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


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
        if(!isset($startDate)){
            for($i=0;$i<2;$i++){
                $seconds+=$endDate[$i]->seconds-$startDate[$i]->seconds;
                $days=$seconds/86400;
                $income+=$days*($price[$i]->prix_jour);

            }
            return round($income,3);
        }
        return $income;

    }

    public function allOrders(){
        $orders = DB::table('clients')
        ->select('clients.id as client_id', 'reservations.id as order_id', 'clients.*', 'utilisateurs.*', 'voitures.*', 'reservations.*')
        ->join('utilisateurs', 'clients.id_utilisateur', '=', 'utilisateurs.id')
        ->join('reservations', 'reservations.id_client', '=', 'clients.id')
        ->join('voitures', 'voitures.id', '=', 'reservations.id_voiture')
        ->get();

        return view('orders',compact('orders'));
    }

    public function deleteOrder(){
        return view('orders');
    }
}
