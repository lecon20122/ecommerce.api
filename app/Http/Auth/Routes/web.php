<?php

use App\Http\Auth\Controllers\SocialiteController;
use App\Http\Client\Auth\Controllers\ClientLoginController;
use Illuminate\Support\Facades\Route;


Route::get('login', [ClientLoginController::class, 'getLoginPage'])->name('client.login');
Route::post('login', [ClientLoginController::class, 'login'])->name('client.postLogin');
Route::get('logout', [ClientLoginController::class, 'logout'])->name('client.logout');

Route::get('auth/redirect/google', [SocialiteController::class, 'oauthProviderRedirect'])->name('client.social.login');
Route::get('auth/callback/google', [SocialiteController::class, 'oauthProviderCallBack'])->name('client.social.callback');
