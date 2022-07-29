<?php

use App\Http\Client\Auth\Controllers\ClientLoginController;
use Illuminate\Support\Facades\Route;


Route::get('login', ClientLoginController::class)->name('client.login');
Route::post('login', [ClientLoginController::class , 'login'])->name('client.postLogin');
