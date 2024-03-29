<?php

use App\Http\Product\Controllers\ProductAttributeController;
use App\Http\Product\Controllers\ProductAttributeValueController;
use App\Http\Product\Controllers\ProductController;
use App\Http\Product\Controllers\ProductDescriptionController;
use Illuminate\Support\Facades\Route;

Route::get('/products', [ProductController::class, 'adminIndex'])->name('admin.products.index');
Route::post('/products', [ProductController::class, 'store'])->name('admin.products.store');
Route::get('/products/{id}', [ProductController::class, 'edit'])->name('admin.products.edit');
Route::post('/products/{slug}', [ProductController::class, 'update'])->name('admin.products.update');

Route::post('/products/{product}/media', [ProductController::class, 'addMediaToProduct'])->name('admin.add.media.to.product');
Route::post('/products/{product}/media/delete', [ProductController::class, 'deleteProductImage'])->name('admin.delete.media.of.product');

Route::get('/product/attribute', [ProductAttributeController::class, 'index'])->name('admin.index.attribute');
Route::post('/product/attribute/add', [ProductAttributeController::class, 'store'])->name('admin.add.attribute');
Route::post('/product/attribute/{attribute}/update', [ProductAttributeController::class, 'update'])->name('admin.update.attribute');
Route::post('/product/attribute/{attribute}/delete', [ProductAttributeController::class, 'destroy'])->name('admin.delete.attribute');

Route::post('/product/attribute-value/add', [ProductAttributeValueController::class, 'store'])->name('admin.add.attribute.value');
Route::post('/product/attribute-value/{attributeValue}/update', [ProductAttributeValueController::class, 'update'])->name('admin.update.attribute.value');

Route::post('/product/attribute/{attribute}/attach', [ProductAttributeController::class, 'attachAttributeToProduct'])->name('admin.attach.attribute.to.product');
Route::post('/product/attribute/{attribute}/detach', [ProductAttributeController::class, 'detachAttributeFromProduct'])->name('admin.detach.attribute.from.product');

Route::post('/product/description', [ProductDescriptionController::class, 'store'])->name('admin.add.product.description');
Route::post('/product/description/{id}/update', [ProductDescriptionController::class, 'update'])->name('admin.update.product.description');
Route::post('/product/description/{id}/delete', [ProductDescriptionController::class, 'destroy'])->name('admin.delete.product.description');


Route::post('/products/{id}/approve', [ProductController::class, 'adminApproveProduct'])->name('admin.products.approve');
