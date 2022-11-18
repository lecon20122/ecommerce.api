<?php

use App\Http\Product\Controllers\ProductController;
use Illuminate\Support\Facades\Route;


//Route::get('c/{category}', [ProductController::class, 'getProductsByCategory'])->name('shop.by.category');
//Route::post('c/{category}', [ProductController::class, 'getProductsByCategory'])->name('shop.by.category.post');

Route::get('shop/{product:slug}', [ProductController::class, 'show'])->name('shop.product.detail');
