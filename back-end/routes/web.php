<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\UtilisateurController;
use App\Http\Controllers\VoitureController;
use Illuminate\Support\Facades\Route;



Route::get('/', [VoitureController::class, 'dashboard'])->name('index');
Route::get('/voitures', [VoitureController::class, 'allCars'])->name('voitures');
Route::get('/clients',[ClientController::class, 'allClients'])->name('clients');
Route::get('/deleteUserClient/{id}', [UtilisateurController::class, 'deleteUserClient']);
Route::get('/deleteCar/{id}', [VoitureController::class, 'deleteCar']);
Route::get('/ordres',[ReservationController::class,'allOrders'])->name('ordres');
