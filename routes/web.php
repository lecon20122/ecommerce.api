<?php

use App\Http\Home\Controllers\HomeController;
use App\Http\User\Controllers\UserController;
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
    //Auth Routes
    Route::group([], base_path() . '/app/Http/Auth/Routes/web.php');
    Route::group([], base_path() . '/app/Http/Client/Home/Routes/web.php');
    Route::group([], base_path() . '/app/Http/Category/Routes/web.php');
});
