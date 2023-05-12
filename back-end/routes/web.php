<?php

use App\Http\Controllers\VoitureController;
use Illuminate\Support\Facades\Route;



Route::get('/', [VoitureController::class, 'rentedCars'])->name('index');
Route::get('/voitures', [VoitureController::class, 'allCars'])->name('voitures');
