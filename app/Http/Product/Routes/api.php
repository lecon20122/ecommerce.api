<?php

use App\Http\Product\Controllers\ProductController;
use App\Http\Product\Controllers\VariationController;
use \Illuminate\Support\Facades\Route;

Route::apiResource('products', ProductController::class)->middleware('auth:sanctum')->except('index');
Route::get('products', [ProductController::class, 'index'])->name('products.index');
