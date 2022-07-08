<?php

use App\Http\Admin\Controllers\AdminLoginController;
use App\Http\User\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/**
 * all these routes prefixed with 'admin'
 */

Route::post('login', AdminLoginController::class)->name('admin.login');

Route::middleware(['auth:admin'])->group(function () {
    Route::get('users', [UserController::class, 'index'])->name('admin.users');
});

Route::get('protected', function () {
    return auth('admin')->user();
})->middleware(['auth:admin'])->name('protected');
