<?php

use App\Http\Product\Controllers\ProductController;
use App\Http\Product\Controllers\VariationController;
use \Illuminate\Support\Facades\Route;

Route::get('products',[ProductController::class , 'index'])->name('admin.products.index');
