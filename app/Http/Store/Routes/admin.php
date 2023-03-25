<?php

use App\Http\Store\Controllers\StoreController;
use App\Support\Enums\RolesEnum;
use Illuminate\Support\Facades\Route;

$marketing = RolesEnum::MARKETING->value;
$superAdmin = RolesEnum::SUPER_ADMIN->value;

Route::name('admin.')->middleware(["role:$superAdmin|$marketing"])->group(function () {
    Route::get('stores/requests', [StoreController::class, 'indexStoreRequests'])->name('stores.requests.index');
    Route::post('stores/requests/approve', [StoreController::class, 'approveStoreSellerRequest'])->name('seller.requests.approve');
});


Route::get('stores', [StoreController::class, 'index'])->name('admin.stores.index');

Route::post('stores', [StoreController::class, 'store'])->name('admin.stores.store');
Route::get('stores/{id}', [StoreController::class, 'edit'])->name('admin.stores.edit');
Route::post('stores/{store}', [StoreController::class, 'update'])->name('admin.stores.update');
Route::post('stores/{id}/delete', [StoreController::class, 'destroy'])->name('admin.stores.destroy');

Route::post('stores/{store}/approve', [StoreController::class, 'directStoreApprove'])->name('admin.stores.approve');
