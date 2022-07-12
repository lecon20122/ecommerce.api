<?php

use App\Http\Admin\Controllers\AdminLoginController;
use App\Http\Auth\Controllers\SocialiteController;
use Illuminate\Support\Facades\Route;

Route::get('login', [AdminLoginController::class, 'view'])->name('admin.getLogin');
Route::post('login',[ AdminLoginController::class , 'login'])->name('admin.postLogin');

