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

Route::name('api.')->group(function () {
    //    //user Routes
//    Route::group([], base_path() . '/app/Http/User/Routes/api.php');
//
//    //Product Routes
    Route::group([], base_path() . '/app/Http/Product/Routes/api.php');

    //Product Routes
    Route::group([], base_path() . '/app/Http/Variation/Routes/api.php');
//
//    //Store Routes
   Route::group([], base_path() . '/app/Http/Store/Routes/api.php');
//
//    //Auth Routes
    Route::group([], base_path() . '/app/Http/Auth/Routes/api.php');
//
//    //Category Routes
    Route::group([], base_path() . '/app/Http/Category/Routes/api.php');
//
//    //Cart Routes
    Route::group([], base_path() . '/app/Http/Cart/Routes/api.php');

    //Location Routes
    Route::group([], base_path() . '/app/Http/Location/Routes/api.php');
//
//    //Order Routes
//    Route::group([], base_path() . '/app/Http/Order/Routes/api.php');
});
