<?php

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class ResetPasswordController extends Controller
{
    //Send the reset Password link to the chosen user
    public function sendResetPasswordLink(Request $request) {

        $email = $request->email;
        $user = Utilisateur::where('email', $email)->first();

        // crypt the user id
        $token = Crypt::encryptString($user->id);

        $resetPasswordLink = url('http://localhost:3000/ResetPassword/' . $token);

        Mail::raw("Click the following link to reset your password :: <a href='$resetPasswordLink'>Car Rental</a>",
        function ($message) use ($email) {
            $message->to($email)
                    ->subject('Reset Password')
                    ->from('car.rental@company.net')
                    ->replyTo('car.rental@company.net');
        });

        return response()->json([
            'message' => 'Link sent successfuly'
        ]);
    }

    //Decipher the id User
    public function decryptIdUser(Request $request){
        $token = $request->token;
        try {
            $decipheredIdUser = Crypt::decryptString($token);
            return response()->json(['message' => $decipheredIdUser]);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Invalid token']);
        }
    }
}
