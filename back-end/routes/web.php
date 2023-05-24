<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\UtilisateurController;
use App\Http\Controllers\VoitureController;
use Illuminate\Support\Facades\Route;


Route::get('/', [EmailController::class, 'authentification'])->name('authentification');

Route::match(['get', 'post'],'/index',[VoitureController::class, 'dashboard'])->name('index');

Route::get('/cars', [VoitureController::class, 'allCars'])->name('cars');
Route::get('/clients',[ClientController::class, 'allClients'])->name('clients');
Route::get('/deleteUserClient/{id}', [UtilisateurController::class, 'deleteUserClient']);
Route::get('/deleteCar/{id}', [VoitureController::class, 'deleteCar']);
Route::get('/orders',[ReservationController::class,'allOrders'])->name('orders');
Route::get('/orders/{id}',[ReservationController::class,'deleteOrder']);
Route::post('/orders/add', [ReservationController::class, 'addOrder'])->name('addOrder');
Route::post('/orders/modify/{id_order}',[ReservationController::class,'modifyOrder']);
Route::get('/orders/accept/{id_order}',[ReservationController::class,'acceptOrder']);
Route::post('/cars/add',[VoitureController::class,'addCar'])->name('addCar');
Route::post('/cars/modify/{id_car}',[VoitureController::class,'modifyCar']);
Route::get('/employers', [EmployeeController::class, 'allEmployers'])->name('employers');
Route::get('/admins', [EmployeeController::class, 'allAdmins'])->name('admins');
Route::post('/employers/add', [EmployeeController::class, 'addEmployer'])->name('addEmployer');
Route::get('/deleteEmployer/{id}', [EmployeeController::class, 'deleteEmployer']);
Route::post('/employers/modify/{id_employer}',[EmployeeController::class,'modifyEmployer']);
Route::post('/admins/add', [EmployeeController::class, 'addAdmin'])->name('addAdmin');
Route::get('/deleteAdmin/{id}', [EmployeeController::class, 'deleteAdmin']);
Route::post('/admins/modify/{id_admin}',[EmployeeController::class,'modifyAdmin']);

// Route::match(['get', 'post'],'/login', [EmailController::class, 'login'])->name('login');

Route::post('/authentifications/failed',[EmailController::class,'loginError']);



Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified'
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
