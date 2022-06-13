<?php

use App\Http\Order\Controllers\OrderController;
use Illuminate\Support\Facades\Route;


Route::apiResource('order', OrderController::class)->middleware('auth:sanctum');
