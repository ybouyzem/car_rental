<?php

namespace App\Http\Controllers;

use App\Models\Marque;
use Illuminate\Http\Request;

class MarqueController extends Controller
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
    public function show($id)
    {
        $marque = Marque::findOrFail($id);
        return response()->json([
            'marque' => $marque
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Marque $marque)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Marque $marque)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Marque $marque)
    {
        //
    }
}
