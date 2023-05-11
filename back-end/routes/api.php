<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UtilisateurController;
use App\Http\Controllers\VoitureController;
use App\Http\Controllers\ModeleController;
use App\Http\Controllers\MarqueController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ReservationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route for 'Utilisateur' Model
Route::resource('Utilisateur', UtilisateurController::class);

// Route for 'Voiture' Model
Route::resource('Voiture', VoitureController::class);

// Route for 'Modele' Model
Route::resource('Modele', ModeleController::class);

// Route for 'Marque' Model
Route::resource('Marque', MarqueController::class);

// Route for 'Client' Model
Route::resource('Client', ClientController::class);

// Route for 'Reservation' Model
Route::resource('Reservation', ReservationController::class);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});