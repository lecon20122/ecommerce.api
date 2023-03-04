<?php


use App\Http\Auth\Controllers\AuthenticatedSessionController;
use App\Http\Auth\Controllers\Sell\SignInController;
use App\Http\Auth\Controllers\SocialiteController;
use Illuminate\Support\Facades\Route;


Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');

Route::get('/third-party-login', [SocialiteController::class, 'getUserFromToken'])->name('third-party-login');

Route::get('auth/sell/login', [SignInController::class, 'getUserFromToken'])->name('sell.social.login');
