<?php

use App\Http\Category\Controllers\CategoryController;
use \Illuminate\Support\Facades\Route;

Route::apiResource('categories', CategoryController::class);
