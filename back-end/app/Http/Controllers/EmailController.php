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
            'FirstName' => 'required',
            'LastName' => 'required',
            'Email' => 'required',
            'PhoneNumber' => 'required',
            'Message' => 'required',
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

        // Mail::to('alahyane900@gmail.com')->send(new SendEmail($request->all()));

        Mail::raw('Mr. '.$data['last_name'].' '.$data['first_name']."\n".'Phone Number : '.$data['phone_number']."\n"."Body : \n".$data['message'],
        function ($message) use ($data) {
            $message->to('alahyane900@gmail.com')
                    ->subject('Mail from Car Rental Website')
                    ->from($data['email'] ?? 'default@example.com')
                    ->replyTo($data['email'] ?? 'default@example.com');
        });

        return response()->json([
            'message' => 'Email sent successfully'
        ]);
    }
}
