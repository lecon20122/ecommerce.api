<?php

use App\Http\Store\Controllers\StoreController;
use Illuminate\Support\Facades\Route;



Route::name('sell.')->prefix('sell/v1')->middleware(['auth:sanctum'])->group(function () {
    Route::post('seller-request', [StoreController::class, 'createSellerRequest'])->name('create.seller.request');
});
