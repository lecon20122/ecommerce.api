<?php

use App\Http\Product\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('products', [ProductController::class, 'index'])->name('admin.products.index');
Route::post('products', [ProductController::class, 'store'])->name('admin.products.store');
Route::get('products/{id}', [ProductController::class, 'edit'])->name('admin.products.edit');
Route::post('products/{product}', [ProductController::class, 'update'])->name('admin.products.update');
Route::post('products/{id}/delete', [ProductController::class, 'destroy'])->name('admin.products.destroy');
Route::post('products/{id}/restore', [ProductController::class, 'restore'])->name('admin.products.restore');

Route::post('products/{product}/media', [ProductController::class, 'addMediaToProduct'])->name('admin.add.media.to.product');
Route::post('products/{product}/attach', [ProductController::class, 'attachCategoriesToProduct'])->name('admin.attach.category.to.product');
Route::post('products/{product}/media/delete', [ProductController::class, 'deleteProductImage'])->name('admin.delete.media.of.product');
