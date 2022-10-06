<?php

use App\Http\User\Controllers\UserFavoriteController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('favorite', [UserFavoriteController::class, 'store'])->name('add.product.to.user.favorites');
});

