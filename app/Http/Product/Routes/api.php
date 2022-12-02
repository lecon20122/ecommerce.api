<?php

use App\Http\Product\Controllers\ApiProductController;
use Illuminate\Support\Facades\Route;

Route::get('category', [ApiProductController::class, 'getFilteredProducts'])->name('shop.by.category.post'); //TODO:: change route name to 'products'
Route::get('filters/{category}', [ApiProductController::class, 'getProductSearchFilterByCategory'])->name('search.filters.by.category');
Route::get('product', [ApiProductController::class, 'getProduct'])->name('get.product.by.slug');
