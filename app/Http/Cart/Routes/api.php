<?php

use App\Http\Cart\Controllers\CartController;
use Illuminate\Support\Facades\Route;

Route::post('cart', [CartController::class, 'addToCart'])->name('client.add.to.cart');


