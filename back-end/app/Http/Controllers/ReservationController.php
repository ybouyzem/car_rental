<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;

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
    public function show(Reservation $reservation)
    {
        //
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
}
