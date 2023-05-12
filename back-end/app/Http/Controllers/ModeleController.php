<?php

namespace App\Http\Controllers;

use App\Models\Modele;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ModeleController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($ModeleId)
    {
        $result = DB::table('modeles')
                ->join('marques', 'modeles.id_marque', '=', 'marques.id')
                ->select('marques.libelle as libelleMarque', 'modeles.libelle as libelleModele')
                ->where('modeles.id', '=', $ModeleId)
                ->first();
        return response()->json([
            'result' => $result
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Modele $modele)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Modele $modele)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Modele $modele)
    {
        //
    }
}
