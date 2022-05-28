<?php

use App\Http\Auth\Controllers\LoginController;
use App\Http\Auth\Controllers\LogoutController;
use App\Http\Auth\Controllers\RegisterController;
use App\Http\User\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::post('/auth/login' , LoginController::class);
Route::post('/auth/register' , RegisterController::class);
Route::post('/auth/logout' , LogoutController::class )->middleware('auth:sanctum');
