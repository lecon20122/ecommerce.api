<?php

use App\Http\Order\Controllers\OrderController;
use Illuminate\Support\Facades\Route;

Route::post('checkout', [OrderController::class, 'checkout'])->name('client.checkout');
