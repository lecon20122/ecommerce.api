<?php

use App\Http\User\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->group(function () {
    Route::group([], base_path() . '/app/Http/Auth/Routes/admin.php');

    Route::middleware(['auth:admin'])->group(function () {
        Route::group([], base_path() . '/app/Http/Dashboard/Routes/admin.php');
        Route::group([], base_path() . '/app/Http/User/Routes/admin.php');
        Route::group([], base_path() . '/app/Http/Category/Routes/admin.php');
        Route::group([], base_path() . '/app/Http/Store/Routes/admin.php');
        Route::group([], base_path() . '/app/Http/Product/Routes/admin.php');
        Route::group([], base_path() . '/app/Http/Variation/Routes/admin.php');
    });
});
