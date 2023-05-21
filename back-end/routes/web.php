<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\UtilisateurController;
use App\Http\Controllers\VoitureController;
use Illuminate\Support\Facades\Route;



Route::get('/', [VoitureController::class, 'dashboard'])->name('index');
Route::get('/cars', [VoitureController::class, 'allCars'])->name('cars');
Route::get('/clients',[ClientController::class, 'allClients'])->name('clients');
Route::get('/deleteUserClient/{id}', [UtilisateurController::class, 'deleteUserClient']);
Route::get('/deleteCar/{id}', [VoitureController::class, 'deleteCar']);
Route::get('/orders',[ReservationController::class,'allOrders'])->name('orders');
Route::get('/orders/{id}',[ReservationController::class,'deleteOrder']);
// Route::get('/clients/modify',[ClientController::class,'modifyUserClient'])->name('modifyUserClient');
Route::post('/orders/add', [ReservationController::class, 'addOrder'])->name('addOrder');
Route::post('/orders/modify/{id_order}',[ReservationController::class,'modifyOrder']);
Route::get('/orders/accept/{id_order}',[ReservationController::class,'acceptOrder']);
