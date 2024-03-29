<?php


use App\Http\Inventory\Controllers\StockController;
use App\Http\Location\Controllers\AddressController;
use App\Http\Location\Controllers\CityController;
use Illuminate\Support\Facades\Route;

Route::name('sell.')->prefix('sell/v1')->middleware(['auth:sanctum'])->group(function () {
    Route::get('gov/cairo', [AddressController::class, 'getCairoLocations'])->name('get.cairo.locations');
});


Route::get('address', [AddressController::class, 'index'])
    ->middleware('auth:sanctum')
    ->name('client.get.user.addresses');

Route::post('address', [AddressController::class, 'store'])
    ->middleware('auth:sanctum')
    ->name('client.add.addresses');

Route::get('cities', [CityController::class, 'index'])
    ->middleware('auth:sanctum')
    ->name('client.get.cities');


Route::post('stock', [StockController::class, 'apiStore'])
    ->middleware('auth:sanctum')
    ->name('add.variation.stock');
