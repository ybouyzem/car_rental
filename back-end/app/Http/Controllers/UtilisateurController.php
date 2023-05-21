<?php

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use App\Models\Client;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

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
        $user = Utilisateur::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'email' =>  $request->email,
            'password' => Hash::make($request->password),
            'email_verifie_le' => null,
        ]);

        $verificationLink = url('/api/verify-email/' . $user->id);

        $email = $request->email;

        Mail::raw("Click the following link to verify your email :: <a href='$verificationLink'>Car Rental",
        function ($message) use ($email) {
            $message->to($email)
                    ->subject('Email verification')
                    ->from('car.rental@company.net')
                    ->replyTo('car.rental@company.net');
        });

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
        if(empty($utilisateur)){
            return response()->json([
                'message' => 'Not Found'
            ]);
        } else {
            // If password is provided, check if it matches the hashed password stored in the database
            if ($request->has('password')) {
                $password = $request->input('password');
                if (Hash::check($password, $utilisateur->password)) {
                    if(!is_null($utilisateur->email_verifie_le)){
                        return response()->json([
                            'message' => $utilisateur
                        ]);
                    }else{
                        return response()->json([
                            'message' => 'Not verified'
                        ]);
                    }
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


    public function deleteUserClient($id){
        $userClient = Utilisateur::find($id);
        if (!$userClient) {
            // Handle client not found error
            return redirect()->back()->with('error', 'client not found.');
        }
        $clientIds = Client::where('id_utilisateur', $id)->pluck('id');
        for($i=0;$i<count($clientIds);$i++) {
            Reservation::where('id_client',  $clientIds[$i])->delete();
        }
        Client::where('id_utilisateur',$id)->delete();
        // Delete the client from the database
        $userClient->delete();
        // Redirect back to the previous page with a success message
        return redirect()->back()->with('success', 'client deleted successfully.');
    }


  
}
