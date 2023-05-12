<?php

use App\Http\Controllers\VoitureController;

use Illuminate\Support\Facades\Route;




Route::get('/',[VoitureController::class,"rentedCars"]);

