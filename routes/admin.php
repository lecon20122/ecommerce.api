<?php

use App\Http\User\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->group(function () {
    //Auth Routes
    Route::group([], base_path() . '/app/Http/Auth/Routes/admin.php');
    Route::group([], base_path() . '/app/Http/Dashboard/Routes/admin.php');
});
