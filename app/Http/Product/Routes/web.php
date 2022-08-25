<?php

use App\Http\Product\Controllers\ProductController;
use Illuminate\Support\Facades\Route;


Route::get('c/{category}', [ProductController::class, 'getProductsByCategory'])->name('shop.by.category');
