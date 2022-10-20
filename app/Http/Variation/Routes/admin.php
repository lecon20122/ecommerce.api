<?php

use App\Http\Variation\Controllers\SizeDescriptionController;
use App\Http\Variation\Controllers\SizeDescriptionValueController;
use App\Http\Variation\Controllers\VariationController;
use App\Http\Variation\Controllers\VariationTypeController;
use App\Http\Variation\Controllers\VariationTypeValueController;
use Illuminate\Support\Facades\Route;

Route::get('variations', [VariationController::class, 'index'])->name('admin.variations.index');
Route::post('variations', [VariationController::class, 'store'])->name('admin.variations.store');
Route::get('variations/{id}', [VariationController::class, 'edit'])->name('admin.variations.edit');
Route::post('variations/{variation}', [VariationController::class, 'update'])->name('admin.variations.update');
Route::post('variations/{id}/delete', [VariationController::class, 'destroy'])->name('admin.variations.destroy');
Route::post('variations/{id}/restore', [VariationController::class, 'restore'])->name('admin.variations.restore');
Route::post('variations/{id}/permanent-delete', [VariationController::class, 'permanentDelete'])->name('admin.variations.permanent.delete');

Route::post('variations/{variation}/media', [VariationController::class, 'addMediaToVariation'])->name('admin.add.media.to.variation');
Route::post('variations/{variation}/media-set-primary', [VariationController::class, 'setVariationImageToPrimary'])->name('admin.set.variation.image.to.primary');
Route::post('variations/{variation}/color-image', [VariationController::class, 'uploadVariationColorImage'])->name('admin.add.color.image.to.variation');
Route::post('variations/{variation}/media/delete', [VariationController::class, 'deleteVariationImage'])->name('admin.delete.media.of.variations');


Route::get('variation/type', [VariationTypeController::class, 'index'])->name('admin.variations.type.index');
Route::post('variation/type', [VariationTypeController::class, 'store'])->name('admin.variations.type.store');
Route::get('variation/type/{id}', [VariationTypeController::class, 'edit'])->name('admin.variations.type.edit');
Route::post('variation/type/{id}', [VariationTypeController::class, 'update'])->name('admin.variations.type.update');
Route::post('variation/type/{id}/delete', [VariationTypeController::class, 'destroy'])->name('admin.variations.type.destroy');
Route::post('variation/type/{id}/restore', [VariationTypeController::class, 'restore'])->name('admin.variations.type.restore');


Route::get('variation/type/value', [VariationTypeValueController::class, 'index'])->name('admin.variations.type.value.index');
Route::post('variation/type/value/update', [VariationTypeValueController::class, 'store'])->name('admin.variations.type.value.store');
Route::get('variation/type/value/{id}', [VariationTypeValueController::class, 'edit'])->name('admin.variations.type.value.edit');
Route::post('variation/type/value/{id}', [VariationTypeValueController::class, 'update'])->name('admin.variations.type.value.update');
Route::post('variation/type/value/{id}/delete', [VariationTypeValueController::class, 'destroy'])->name('admin.variations.type.value.destroy');
Route::post('variation/type/value/{id}/restore', [VariationTypeValueController::class, 'restore'])->name('admin.variations.type.value.restore');

Route::post('variation/size-description', [SizeDescriptionController::class, 'store'])->name('admin.store.variations.size.description');
Route::post('variation/size-description/{id}', [SizeDescriptionController::class, 'update'])->name('admin.update.variations.size.description');

Route::post('variation/size-description-value', [SizeDescriptionValueController::class, 'store'])->name('admin.store.variations.size.description.value');
Route::post('variation/size-description-value/{id}', [SizeDescriptionValueController::class, 'update'])->name('admin.update.variations.size.description.value');
