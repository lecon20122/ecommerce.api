<?php

use App\Http\User\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::post('/auth/login' , [UserController::class , 'login']);
Route::post('/auth/register' , [UserController::class , 'register']);
Route::post('/auth/logout' , [UserController::class , 'logout'])->middleware('auth:sanctum');
