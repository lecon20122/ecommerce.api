<?php

use App\Http\Category\Controllers\CategoryController;
use \Illuminate\Support\Facades\Route;

Route::get('categories' , [CategoryController::class , 'index'])->name('admin.categories.index');
Route::post('categories' , [CategoryController::class , 'store'])->name('admin.categories.store');
Route::get('categories/{id}' , [CategoryController::class , 'edit'])->name('admin.categories.edit');
Route::post('categories/{category}' , [CategoryController::class , 'update'])->name('admin.categories.update');
