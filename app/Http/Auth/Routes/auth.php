<?php

use App\Http\Auth\Controllers\ForgetPasswordController;
use App\Http\Auth\Controllers\LoginController;
use App\Http\Auth\Controllers\LogoutController;
use App\Http\Auth\Controllers\RegisterController;
use App\Http\Auth\Controllers\ResetPasswordController;
use Illuminate\Support\Facades\Route;


Route::post('/auth/login', LoginController::class);
Route::post('/auth/register', RegisterController::class);
Route::post('/auth/logout', LogoutController::class)->middleware('auth:sanctum');
Route::post('/auth/forget-password', ForgetPasswordController::class);
Route::post('/auth/reset-password', ResetPasswordController::class);
