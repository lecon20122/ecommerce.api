<?php

use App\Http\Product\Controllers\ApiProductController;
use App\Http\Product\Controllers\ProductAttributeController;
use App\Http\Product\Controllers\ProductDescriptionController;
use App\Http\Product\Controllers\ProductDiscountController;
use App\Http\Product\Controllers\Sell\SellProductController;
use Illuminate\Support\Facades\Route;

Route::get('category', [ApiProductController::class, 'getFilteredProducts'])->name('shop.by.category.post'); //TODO:: change route name to 'products'
Route::get('filters/{category}', [ApiProductController::class, 'getProductSearchFilterByCategory'])->name('search.filters.by.category');
Route::get('product', [ApiProductController::class, 'getProduct'])->name('get.product.by.slug');

//Route::post('create-products', [SellProductController::class, 'store'])->name('post.products');


Route::name('sell.')->prefix('sell/v1')->middleware(['auth:sanctum'])->group(function () {
    Route::get('products', [SellProductController::class, 'index'])->name('get.products');
    Route::post('products', [SellProductController::class, 'store'])->name('post.products');
    Route::get('products/{id}', [SellProductController::class, 'show'])->name('get.product');
    Route::put('products/{id}', [SellProductController::class, 'update'])->name('update.product');
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('store/product/mega-form', [ApiProductController::class, 'createProductMegaForm'])->name('add.store.product.mega.form');
    Route::get('store/products', [ApiProductController::class, 'getStoreProducts'])->name('get.store.products');
    Route::get('store/product/details/{product}', [ApiProductController::class, 'getStoreProduct'])->name('get.store.product.details');
    Route::get('store/product/attributes', [ProductAttributeController::class, 'getProductAttributes'])->name('get.store.product.attributes');

    Route::post('store/product', [ApiProductController::class, 'storeStoreProduct'])->name('add.store.products');
    Route::post('store/product/update', [ApiProductController::class, 'updateStoreProduct'])->name('update.store.product');
    Route::post('store/product/delete', [ApiProductController::class, 'softDeleteStoreProduct'])->name('delete.store.product');
    Route::post('store/product/restore', [ApiProductController::class, 'restoreStoreProduct'])->name('restore.store.product');

    Route::post('store/product/category/attach/{id}', [ApiProductController::class, 'attachCategoriesToProduct'])->name('attach.category.to.product');
    Route::post('store/product/category/detach/{id}', [ApiProductController::class, 'detachCategoryFromProduct'])->name('detach.category.from.product');

    Route::post('store/product/description', [ProductDescriptionController::class, 'apiStore'])->name('add.product.description');
    Route::post('store/product/description/update/{id}', [ProductDescriptionController::class, 'apiUpdate'])->name('update.product.description');
    Route::post('store/product/description/delete/{id}', [ProductDescriptionController::class, 'apiDestroy'])->name('delete.product.description');

    Route::post('store/product/discount', [ProductDiscountController::class, 'updateOrCreate'])->name('update.or.create.product.discount');
});
