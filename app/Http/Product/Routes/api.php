<?php

use App\Http\Product\Controllers\ProductController;
use App\Http\Product\Controllers\VariationController;
use \Illuminate\Support\Facades\Route;

Route::apiResource('products', ProductController::class)->middleware('auth:sanctum');
Route::apiResource('variations', VariationController::class)->middleware('auth:sanctum');
