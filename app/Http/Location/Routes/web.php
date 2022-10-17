<?php

use App\Http\Location\Controllers\AddressController;
use Illuminate\Support\Facades\Route;

Route::post('address', [AddressController::class, 'store'])->name('client.add.address');
Route::post('address/{address}', [AddressController::class, 'update'])->name('client.update.address');


