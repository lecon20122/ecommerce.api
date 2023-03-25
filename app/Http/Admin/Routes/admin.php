<?php

use App\Http\Admin\Controller\ByPassController;
use Illuminate\Support\Facades\Route;

Route::name('admin.')->middleware(['role:super-admin'])->group(function () {

    Route::get('/bypasses', [ByPassController::class, 'index'])->name('bypasses.index');
    Route::post('/bypasses', [ByPassController::class, 'store'])->name('bypasses.store');
    Route::delete('/bypasses/{id}', [ByPassController::class, 'destroy'])->name('bypasses.destroy');
    Route::put('/bypasses/{bypass}', [ByPassController::class, 'update'])->name('bypasses.update');
});
