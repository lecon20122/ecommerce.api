<?php

use App\Http\Product\Controllers\ApiProductController;
use Illuminate\Support\Facades\Route;

Route::post('category', [ApiProductController::class, 'getFilteredProducts'])->name('shop.by.category.post');
Route::get('filters/{category}', [ApiProductController::class, 'getProductSearchFilterByCategory'])->name('search.filters.by.category');
