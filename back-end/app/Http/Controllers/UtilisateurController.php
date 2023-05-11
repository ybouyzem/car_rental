<?php

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;

class UtilisateurController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return Utilisateur::select('nom', 'prenom', 'email')->get();
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
            'nom' => 'required',
            'prenom' => 'required',
            'email' => 'required',
            'password' => 'required',
        ]);

        // L'insertion des données
        Utilisateur::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'email' =>  $request->email,
            'password' => Hash::make($request->password)
        ]);
        
        return response()->json([
            'message' => 'user added successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, $param)
    {
        // Find the user by email or ID
        $utilisateur = Utilisateur::where('email', $param)->orWhere('id', $param)->first();

        // Return the status of table
        if($utilisateur === NULL){
            return response()->json([
                'message' => 'Not Found'
            ]);
        } else {
            // If password is provided, check if it matches the hashed password stored in the database
            if ($request->has('password')) {
                $password = $request->input('password');
                if (Hash::check($password, $utilisateur->password)) {
                    return response()->json([
                        'message' => $utilisateur
                    ]);
                } else {
                    return response()->json([
                        'message' => 'Invalid password'
                    ]);
                }
            } else {
                return response()->json([
                    'message' => $utilisateur
                ]);
            }
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Utilisateur $utilisateur)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //finding the user
        $utilisateur = Utilisateur::findOrFail($id);

        // Update user's last name if provided in the request
        if ($request->has('nom')) {
            $utilisateur->nom = $request->nom;
        }

        // Update user's first name if provided in the request
        if ($request->has('prenom')) {
            $utilisateur->prenom = $request->prenom;
        }

        // Update user's password if provided in the request
        if ($request->has('password')) {
            $utilisateur->password = Hash::make($request->password);
        }

        // Save changes to the user's record
        $utilisateur->save();

        return response()->json([
            'message' => 'User modified successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Utilisateur $utilisateur)
    {
        //
    }
}