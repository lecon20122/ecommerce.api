<?php

use App\Http\Product\Controllers\ApiProductController;
use Illuminate\Support\Facades\Route;

Route::get('category', [ApiProductController::class, 'getFilteredProducts'])->name('shop.by.category.post'); //TODO:: change route name to 'products'
Route::get('filters/{category}', [ApiProductController::class, 'getProductSearchFilterByCategory'])->name('search.filters.by.category');
Route::get('product', [ApiProductController::class, 'getProduct'])->name('get.product.by.slug');


Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('store/products', [ApiProductController::class, 'getStoreProducts'])->name('get.store.products');
    Route::get('store/product/details', [ApiProductController::class, 'getStoreProductBySlug'])->name('get.store.product.by.slug');
    Route::post('store/product', [ApiProductController::class, 'storeStoreProduct'])->name('add.store.products');
    Route::post('store/product/update/{slug}', [ApiProductController::class, 'updateStoreProduct'])->name('update.store.product');
    Route::post('store/product/delete', [ApiProductController::class, 'softDeleteStoreProduct'])->name('delete.store.product');
    Route::post('store/product/restore', [ApiProductController::class, 'restoreStoreProduct'])->name('restore.store.product');
});
