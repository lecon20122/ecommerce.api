<?php

use App\Http\Setting\Controllers\SettingController;
use Illuminate\Support\Facades\Route;

Route::get('settings', [SettingController::class, 'index'])->name('admin.settings.index');
Route::post('settings', [SettingController::class, 'store'])->name('admin.store.settings');
Route::post('settings/{setting}', [SettingController::class, 'update'])->name('admin.update.settings');
Route::post('settings/{setting}/delete', [SettingController::class, 'destroy'])->name('admin.delete.settings');
Route::post('settings/{setting}/upload-logo', [SettingController::class, 'uploadLogo'])->name('admin.upload.logo.settings');
