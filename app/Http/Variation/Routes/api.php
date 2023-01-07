<?php

use App\Http\Product\Controllers\ProductController;
use App\Http\Variation\Controllers\ApiVariationController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('variation/{variation}', [ApiVariationController::class, 'show'])->name('get.owner.variation');
    Route::get('variation-types', [ApiVariationController::class, 'getVariationTypes'])->name('get.variation.types');
});

