<?php

use App\Http\Product\Controllers\ProductController;
use App\Http\Variation\Controllers\ApiVariationController;
use App\Http\Variation\Controllers\Sell\SellVariationController;
use Illuminate\Support\Facades\Route;

Route::name('sell.')->prefix('sell/v1')->middleware(['auth:sanctum'])->group(function () {
    Route::delete('variation/delete/{variation}', [SellVariationController::class, 'safeDelete'])->name('safe.delete.owner.variation');
    Route::get('variation/color/{id}', [SellVariationController::class, 'getColorVariationWithItsSizes'])->name('get.color.variation.with.sizes');
    Route::post('variation/size', [SellVariationController::class, 'createSizesVariation'])->name('create.sizes.variation');
    Route::post('variation/color', [SellVariationController::class, 'createColorVariation'])->name('create.color.variation');
    Route::post('variation/color/upload-image', [SellVariationController::class, 'uploadImageToColor'])->name('upload.image.to.color.variation');
    Route::delete('variation/color/delete-image', [SellVariationController::class, 'deleteImageFromColor'])->name('delete.image.from.color.variation');
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('variation/{variation}', [ApiVariationController::class, 'show'])->name('get.owner.variation');
    Route::post('variation', [ApiVariationController::class, 'store'])->name('create.owner.variation');

    Route::post('variation/color', [ApiVariationController::class, 'createColor'])->name('create.color.variation');
    Route::get('variation/color/values', [ApiVariationController::class, 'getColorValues'])->name('get.color.values.variation');

    Route::post('variation/size', [ApiVariationController::class, 'createSize'])->name('create.size.variation');
    Route::get('variation/size/values', [ApiVariationController::class, 'getSizeValues'])->name('get.size.values.variation');

    Route::post('variation/update/{variation}', [ApiVariationController::class, 'update'])->name('update.owner.variation');
    Route::post('variation/delete/{id}', [ApiVariationController::class, 'destroy'])->name('soft.delete.owner.variation');
    Route::get('variation-types', [ApiVariationController::class, 'getVariationTypes'])->name('get.variation.types');
    Route::post('variation/add-media/{variation}', [ApiVariationController::class, 'addMediaToVariation'])->name('add.media.to.store.variation');
    Route::post('variation/delete-media/{variation}', [ApiVariationController::class, 'deleteVariationImage'])->name('delete.media.of.store.variation');
});

