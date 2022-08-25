<?php

use App\Http\Category\Controllers\CategoryController;
use \Illuminate\Support\Facades\Route;

 Route::get('c/{category}', [CategoryController::class , 'shopByCategory'])->name('shop.by.category');
