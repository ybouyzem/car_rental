<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendEmail;

class EmailController extends Controller
{
    public function sendEmail(Request $request){

        // Validation les données
        $request->validate([
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required',
            'phoneNumber' => 'required',
            'message' => 'required',
        ]);

        $data = [
            'first_name' => $request->input('FirstName'),
            'last_name' => $request->input('LastName'),
            'email' => $request->input('Email'),
            'phone_number' => $request->input('PhoneNumber'),
            'message' => $request->input('Message'),
        ];

        // Mail::send([], $data, function ($message) use ($request) {
        //     $message->to('alahyane900@gmail.com')
        //         ->subject('Mail from Car Rental Website')
        //         ->setBody(view('emails.send_email', $request->all())->render());
        // });

        Mail::to('alahyane.yo@gmail.com')->send(new SendEmail($request->all()));

        return response()->json([
            'message' => 'Email sent successfully'
        ]);
    }
}
