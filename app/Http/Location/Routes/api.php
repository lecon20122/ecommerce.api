<?php


use App\Http\Location\Controllers\AddressController;
use App\Http\Location\Controllers\CityController;
use Illuminate\Support\Facades\Route;


Route::get('address', [AddressController::class, 'index'])
    ->middleware('auth:sanctum')
    ->name('client.get.user.addresses');

Route::post('address', [AddressController::class, 'store'])
    ->middleware('auth:sanctum')
    ->name('client.add.addresses');

Route::get('cities', [CityController::class, 'index'])
    ->middleware('auth:sanctum')
    ->name('client.get.cities');
