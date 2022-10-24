<?php

use App\Http\Cart\Controllers\CartController;
use Illuminate\Support\Facades\Route;


Route::post('cart', [CartController::class, 'store'])->name('client.add.to.cart');
Route::get('cart', [CartController::class, 'index'])->name('client.cart');
Route::post('remove-cart-item/{variation}', [CartController::class, 'removeItem'])->name('client.remove.item.from.cart');
Route::post('update-cart-item-quantity/{variation}', [CartController::class, 'updateItemQuantity'])->name('client.update.cart.item.quantity');
