<?php

use App\Http\Store\Controllers\StoreController;
use Illuminate\Support\Facades\Route;



Route::apiResource('stores', StoreController::class)->middleware('auth:sanctum');
