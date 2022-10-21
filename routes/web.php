<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::group([], function () {
    Route::group([], base_path() . '/app/Http/Auth/Routes/web.php');
    Route::group([], base_path() . '/app/Http/Client/Home/Routes/web.php');
    Route::group([], base_path() . '/app/Http/Category/Routes/web.php');
    Route::group([], base_path() . '/app/Http/Product/Routes/web.php');
    Route::group([], base_path() . '/app/Http/User/Routes/web.php');
    Route::group([], base_path() . '/app/Http/Cart/Routes/web.php');
    Route::group([], base_path() . '/app/Http/Location/Routes/web.php');
    Route::group([], base_path() . '/app/Http/Order/Routes/web.php');
    Route::group([], base_path() . '/app/Http/Inventory/Routes/web.php');
});
