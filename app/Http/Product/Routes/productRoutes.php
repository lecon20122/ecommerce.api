<?php

use App\Http\Product\Controllers\CategoryController;
use \Illuminate\Support\Facades\Route;

Route::apiResource('category' , CategoryController::class)->except('show');
