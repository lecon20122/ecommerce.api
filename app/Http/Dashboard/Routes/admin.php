<?php

use App\Http\Admin\Controllers\AdminLoginController;
use App\Http\Dashboard\Controllers\DashboardController;
use App\Http\User\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/**
 * all these routes prefixed with 'admin'
 */


Route::middleware(['auth:admin'])->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard.index');
    Route::get('logout', [AdminLoginController::class, 'logout'])->name('admin.logout');

    //user
    Route::get('users' , [UserController::class , 'index'])->name('admin.users');
});
