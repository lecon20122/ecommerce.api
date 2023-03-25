<?php

use App\Http\Location\Controllers\CityController;
use App\Http\Location\Controllers\DistrictController;
use App\Http\Location\Controllers\GovernorateController;
use Illuminate\Support\Facades\Route;

Route::post('/governorate', [GovernorateController::class, 'store'])->name('admin.add.governorate');
Route::post('/city', [CityController::class, 'store'])->name('admin.add.city');
Route::post('/district', [DistrictController::class, 'store'])->name('admin.add.district');


Route::post('/governorate/{governorate}', [GovernorateController::class, 'update'])->name('admin.update.governorate');
Route::post('/city/{city}', [CityController::class, 'update'])->name('admin.update.city');
Route::post('/district/{district}', [DistrictController::class, 'update'])->name('admin.update.district');
