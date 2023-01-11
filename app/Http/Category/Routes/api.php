<?php

use App\Http\Category\Controllers\ApiCategoryController;
use Illuminate\Support\Facades\Route;


Route::get('categories', [ApiCategoryController::class, 'index'])->name('category.index');

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('categories-list', [ApiCategoryController::class, 'getChildren'])->name('store.category.index');
});

