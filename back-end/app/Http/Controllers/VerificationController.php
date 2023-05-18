<?php

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use Illuminate\Http\Request;

class VerificationController extends Controller
{

    // verify the email
    public function verify($id) {
        $user = Utilisateur::find($id);

        if (!$user) {
            // Invalid user ID
            return response()->json([
                'message' => 'Invalid user ID',
            ], 404);
        }

        $user->email_verifie_le = now();
        $user->save();

        return redirect()->away('http://localhost:3000/Sign_In');
    }
}
