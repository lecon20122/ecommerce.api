<?php

use App\Http\Admin\Controllers\AdminLoginController;
use Illuminate\Support\Facades\Route;

Route::post('login' , AdminLoginController::class)->name('admin.login');

Route::get('protected', function () {
    return response('success');
})->middleware(['auth:admin'])->name('protected');
