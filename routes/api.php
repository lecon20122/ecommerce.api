<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('v1')->group(function () {
    //user Routes
    Route::group([], base_path() . '/app/Http/User/Routes/userRoutes.php');

    //Product Routes
    Route::group([], base_path() . '/app/Http/Product/Routes/productRoutes.php');
});
