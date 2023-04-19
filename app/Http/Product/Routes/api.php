<?php

use App\Http\Product\Controllers\ApiProductController;
use App\Http\Product\Controllers\ProductDescriptionController;
use App\Http\Product\Controllers\ProductDiscountController;
use App\Http\Product\Controllers\Sell\SellProductController;
use Illuminate\Support\Facades\Route;

Route::get('category', [ApiProductController::class, 'getFilteredProducts'])->name('shop.by.category.post'); //TODO:: change route name to 'products'
Route::get('filters/{category}', [ApiProductController::class, 'getProductSearchFilterByCategory'])->name('search.filters.by.category');
Route::get('product', [ApiProductController::class, 'getProduct'])->name('get.product.by.id');




Route::name('sell.')->prefix('sell/v1')->middleware(['auth:sanctum'])->group(function () {
    Route::get('products', [SellProductController::class, 'index'])->name('get.products');
    Route::post('products', [SellProductController::class, 'store'])->name('post.products');
    Route::get('products/{id}', [SellProductController::class, 'show'])->name('get.product');
    Route::put('products/{id}', [SellProductController::class, 'update'])->name('update.product');

    Route::post('product/discount', [ProductDiscountController::class, 'updateOrCreate'])->name('update.or.create.product.discount');

    Route::post('products/description', [ProductDescriptionController::class, 'apiStore'])->name('add.product.description');
    Route::post('products/description/update/{id}', [ProductDescriptionController::class, 'apiUpdate'])->name('update.product.description');
    Route::post('products/description/delete/{id}', [ProductDescriptionController::class, 'apiDestroy'])->name('delete.product.description');
});
