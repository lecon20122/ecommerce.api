<?php

use App\Http\Cart\Controllers\CartController;
use Illuminate\Support\Facades\Route;


Route::apiResource('cart', CartController::class)->middleware('auth:sanctum');
