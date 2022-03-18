<?php

use App\Http\Product\Controllers\CategoryController;
use App\Http\Product\Controllers\ProductController;
use \Illuminate\Support\Facades\Route;

Route::apiResource('category' , CategoryController::class)->except('show');
Route::apiResource('product' , ProductController::class)->except('show');
