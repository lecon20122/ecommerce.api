<?php

use App\Http\Store\Controllers\StoreController;
use Illuminate\Support\Facades\Route;


Route::get('stores', [StoreController::class, 'index'])->name('admin.stores.index');
Route::post('stores', [StoreController::class, 'store'])->name('admin.stores.store');
Route::get('stores/{id}', [StoreController::class, 'edit'])->name('admin.stores.edit');
Route::post('stores/{store}', [StoreController::class, 'update'])->name('admin.stores.update');
Route::post('stores/{id}/delete', [StoreController::class, 'destroy'])->name('admin.stores.destroy');

Route::post('stores/{store}/approve', [StoreController::class, 'approve'])->name('admin.stores.approve');

