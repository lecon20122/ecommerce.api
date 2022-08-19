<?php

use App\Http\Auth\Controller\SocialiteController;
use App\Http\Auth\Controllers\ForgetPasswordController;
use App\Http\Auth\Controllers\LoginController;
use App\Http\Auth\Controllers\LogoutController;
use App\Http\Auth\Controllers\RegisterController;
use App\Http\Auth\Controllers\ResetPasswordController;
use Illuminate\Support\Facades\Route;


Route::post('/auth/login', LoginController::class)->name('auth.login');
Route::post('/auth/register', RegisterController::class)->name('auth.register');
Route::get('/auth/refresh', [LoginController::class, 'user'])->name('auth.refresh')->middleware('auth:sanctum');
Route::post('/auth/logout', LogoutController::class)->middleware('auth:sanctum')->name('auth.logout');
Route::post('/auth/forget-password', ForgetPasswordController::class)->name('auth.forget-password');
Route::post('/auth/reset-password', ResetPasswordController::class)->name('auth.reset-password');
