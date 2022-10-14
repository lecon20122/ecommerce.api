<?php

use App\Http\Admin\Controllers\AdminLoginController;
use App\Http\Dashboard\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

/**
 * all these routes prefixed with 'admin'
 */
Route::get('/', [DashboardController::class, 'index'])->name('dashboard.index');
Route::get('logout', [AdminLoginController::class, 'logout'])->name('admin.logout');
