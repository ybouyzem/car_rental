<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendEmail;
use App\Models\Admin;
use App\Models\Voiture;

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

        Mail::raw('From: Mr. '.$data['last_name'].' '.$data['first_name']."\n".'Phone Number : '.$data['phone_number']."\n"."Message : \n".$data['message'],
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

    public function authentification(){
        return view('authentification');
    }

    public function login(Request $request){
        $e=new EmployeeController();
        $c=new ClientController();
        $r=new ReservationController();
        $v=new VoitureController();
        $rentedCars = $v->rentedCars();
        $carsNumber = $v->carsNumber();
        $clientsNumber=$c->clientsNumber();
        $reservationsNumber=$r->reservationsNumber();
        $employersNumber=$e->employersNumber();
        $income=$r->income();

        $email = $request->input('email');
        $password = $request->input('password');

        // Query the database for the email and password combination
        $admin = Admin::where('email', $email)->first();

        if ($admin && Hash::check($request->password, $admin->password)) {
            $adminId = $admin->id_employee;
            $employee = DB::table('employees')
            ->where('id', $adminId)
            ->first();




            return redirect()->route('index')->with(compact('rentedCars', 'carsNumber','clientsNumber','reservationsNumber','employersNumber','income','employee'));
        }
         else {
            return view('loginError');
        }
    }
}
