<?php

use App\Http\Admin\Controllers\AdminLoginController;
use Illuminate\Support\Facades\Route;

Route::get('login', [AdminLoginController::class, 'view'])->name('admin.getLogin');
Route::post('login',[ AdminLoginController::class , 'login'])->name('admin.postLogin');

