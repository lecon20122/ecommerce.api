<?php

use App\Http\Inventory\Controllers\StockController;
use Illuminate\Support\Facades\Route;

Route::post('stock', [StockController::class, 'store'])->name('admin.add.stock');
Route::post('subtract-stock', [StockController::class, 'subtractStock'])->name('admin.subtract.stock');
