<?php

use App\Http\Category\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;

Route::get('categories', [CategoryController::class, 'index'])->name('admin.categories.index');
Route::post('categories', [CategoryController::class, 'store'])->name('admin.categories.store');
Route::get('categories/{id}', [CategoryController::class, 'edit'])->name('admin.categories.edit');
Route::post('categories/{category}', [CategoryController::class, 'update'])->name('admin.categories.update');
Route::post('categories/{id}/delete', [CategoryController::class, 'destroy'])->name('admin.categories.destroy');

Route::post('categories/{category}/media', [CategoryController::class, 'addMediaToCategory'])->name('admin.add.media.to.category');
Route::post('categories/{category}/banner', [CategoryController::class, 'addBannerToCategory'])->name('admin.add.banner.to.category');
Route::post('categories/{category}/media/delete', [CategoryController::class, 'deleteCategoryImage'])->name('admin.delete.media.of.category');
