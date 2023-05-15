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
        // $startDate = DB::table('reservations')
        //     ->select('created_at')
        //     ->get();
        //     $endDate = DB::table('reservations')
        //     ->select('retour')
        //     ->get();


        $price = DB::table('voitures')
            ->join('reservations', 'voitures.id', '=', 'reservations.id_voiture')
            ->select('voitures.prix_jour')
            ->get();
        $startDate=$startDate.
            $seconds=1;
            if($startDate>1){
                $seconds=100000;
            }

        // $seconds=($endDate - $startDate);
        $days=$seconds/86400;
        $income=$days*$price;
        return $income;
    }
}
