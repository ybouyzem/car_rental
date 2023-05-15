<?php

use App\Http\Controllers\VoitureController;
use Illuminate\Support\Facades\Route;



Route::get('/', [VoitureController::class, 'dashboard'])->name('index');
Route::get('/voitures', [VoitureController::class, 'allCars'])->name('voitures');
// Route::get('/', [VoitureController::class, 'carsNumber']);
