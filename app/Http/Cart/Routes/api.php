<?php

use App\Http\Cart\Controllers\CartController;
use Illuminate\Support\Facades\Route;


Route::post('cart', [CartController::class, 'add'])
    ->middleware('auth:sanctum')
    ->name('client.add.to.cart');

Route::get('cart', [CartController::class, 'getItems'])
    ->middleware('auth:sanctum')
    ->name('client.get.user.cart');

Route::delete('cart', [CartController::class, 'removeItem'])
    ->middleware('auth:sanctum')
    ->name('client.remove.user.item.from.cart');

Route::put('cart', [CartController::class, 'updateCartItemQuantity'])
    ->middleware('auth:sanctum')
    ->name('client.update.cart.item.quantity');


