<?php

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class VerificationController extends Controller
{

    // verify the email
    public function verify($encryptedToken) {

        $id = Crypt::decryptString($encryptedToken);
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
