<?php

use App\Http\Variation\Controllers\VariationController;
use Illuminate\Support\Facades\Route;

Route::get('variations', [VariationController::class, 'index'])->name('admin.variations.index');
Route::post('variations', [VariationController::class, 'store'])->name('admin.variations.store');
Route::get('variations/{id}', [VariationController::class, 'edit'])->name('admin.variations.edit');
Route::post('variations/{variation}', [VariationController::class, 'update'])->name('admin.variations.update');
Route::post('variations/{id}/delete', [VariationController::class, 'destroy'])->name('admin.variations.destroy');
Route::post('variations/{id}/restore', [VariationController::class, 'restore'])->name('admin.variations.restore');
Route::post('variations/{id}/permanent-delete', [VariationController::class, 'permanentDelete'])->name('admin.variations.permanent.delete');

Route::post('variations/{product}/media', [VariationController::class, 'addMediaToProduct'])->name('admin.add.media.to.variation');
Route::post('variations/{product}/media/delete', [VariationController::class, 'deleteProductImage'])->name('admin.delete.media.of.variations');
