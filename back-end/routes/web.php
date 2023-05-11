<?php

use App\Http\Controllers\VoitureController;

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('index');
});

Route::get('/rentedcars',[VoitureController::class,"rentedCars"]);

