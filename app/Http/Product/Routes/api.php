<?php

use App\Http\Product\Controllers\CategoryController;
use App\Http\Product\Controllers\ProductController;
use \Illuminate\Support\Facades\Route;

Route::apiResource('products' , ProductController::class)->middleware('auth:sanctum');
