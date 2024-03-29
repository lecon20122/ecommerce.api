<?php

use App\Http\Admin\Controllers\AdminLoginController;
use App\Http\Middleware\AdminByPassMiddleware;
use Illuminate\Support\Facades\Route;

Route::get('/login', [AdminLoginController::class, 'view'])
    ->name('admin.getLogin')
    ->middleware(AdminByPassMiddleware::class);

Route::get('/login/google', [AdminLoginController::class, 'redirectGoogleAuth'])->name('admin.googleLogin');

Route::get('/login/google/callback', [AdminLoginController::class, 'callbackGoogleAuth'])->name('admin.googleCallback');

Route::post('/login', [AdminLoginController::class, 'login'])->name('admin.postLogin');
