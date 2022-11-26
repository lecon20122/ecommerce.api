<?php

use App\Http\Category\Controllers\ApiCategoryController;
use Illuminate\Support\Facades\Route;


Route::get('categories', [ApiCategoryController::class, 'index'])->name('category.index');
