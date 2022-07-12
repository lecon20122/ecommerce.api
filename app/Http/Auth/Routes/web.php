<?php

use App\Http\Admin\Controllers\AdminLoginController;
use App\Http\Auth\Controllers\SocialiteController;
use Illuminate\Support\Facades\Route;

Route::get('/auth/{provider}/redirect', [SocialiteController::class, 'oauthProviderRedirect'])->name('auth.provider-redirect');
Route::get('/auth/{provider}/callback', [SocialiteController::class, 'oauthProviderCallBack'])->name('auth.provider-callback');


