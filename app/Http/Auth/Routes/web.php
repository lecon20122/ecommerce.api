<?php

use App\Http\Auth\Controllers\ForgetPasswordController;
use App\Http\Auth\Controllers\LoginController;
use App\Http\Auth\Controllers\LogoutController;
use App\Http\Auth\Controllers\RegisterController;
use App\Http\Auth\Controllers\ResetPasswordController;
use App\Http\Auth\Controllers\SocialiteController;
use Illuminate\Support\Facades\Route;


Route::get('login', [LoginController::class, 'view'])->name('client.login');
Route::post('login', LoginController::class)->name('client.postLogin');
Route::get('signup', [RegisterController::class, 'view'])->name('client.signup');
Route::post('signup', RegisterController::class)->name('client.postSignup');

Route::get('logout', LogoutController::class)->name('client.logout');

Route::get('forget', [ForgetPasswordController::class, 'view'])->name('client.forget.password');

Route::get('new-password', [ResetPasswordController::class, 'view'])->name('client.new.password');
Route::post('forget', ForgetPasswordController::class)->name('client.forget.password.sent.link');

Route::get('new-password', [ResetPasswordController::class, 'view'])->name('client.new.password');
Route::post('new-password', ResetPasswordController::class)->name('client.post.new.password');


Route::get('auth/redirect/google', [SocialiteController::class, 'oauthProviderRedirect'])->name('client.social.login');
Route::get('auth/callback/google', [SocialiteController::class, 'oauthProviderCallBack'])->name('client.social.callback');
