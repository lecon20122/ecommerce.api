<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\User\Controllers\UserController;

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

//user Routes
Route::group([],base_path().'/app/Http/User/Routes/userRoutes.php');

//Product Routes
Route::group([],base_path().'/app/Http/User/Routes/productRoutes.php');
