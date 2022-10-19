<?php

use App\Http\Cart\Controllers\CartController;
use Illuminate\Support\Facades\Route;


Route::post('cart', [CartController::class, 'store'])->name('client.add.to.cart');
Route::get('cart', [CartController::class, 'index'])->name('client.cart');
