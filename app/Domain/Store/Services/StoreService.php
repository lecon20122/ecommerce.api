<?php

namespace App\Domain\Store\Services;

use App\Domain\Location\Enums\AddressTypeEnums;
use App\Domain\Location\Models\Address;
use App\Domain\Store\Models\SellerRequest;
use App\Domain\Store\Models\Store;
use App\Http\Store\Requests\StoreCreateRequest;
use App\Http\Store\Requests\StoreUpdateRequest;
use App\Http\Store\Resources\SellerRequestResource;
use App\Http\Store\Resources\StoreResource;
use App\Jobs\NewSellerRequestJob;
use App\Jobs\SellerRequestApprovedJob;
use Domain\User\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

class StoreService
{

    public function indexStoreRequests()
    {
        return SellerRequestResource::collection(
            SellerRequest::query()
                ->with(['user', 'pickupLocation' => function ($query) {
                    $query->with('district.city');
                }])
                ->latest()
                ->get()
        );
    }



    public function index(): Collection|array
    {
        return Store::query()
            ->with(['user', 'approvedBy:id,name'])
            ->latest()
            ->get();
    }

    public function store(StoreCreateRequest $request)
    {
        $user = User::query()
            ->find($request->validated('user_id', ['id']));

        $user?->store()->create($request->validated());
    }

    public function getStoreById(int $id): StoreResource
    {
        return new StoreResource(
            Store::query()
                ->with(['products' => function ($query) {
                    $query
                        ->withTrashed();
                }])
                ->whereIn('id', [$id])
                ->first()
        );
    }

    public function update(Store $store, StoreUpdateRequest $request)
    {
        DB::beginTransaction();
        if ($store->update($request->validated())) {
            DB::commit();
        }
    }

    public function delete($id)
    {
        $store = Store::query()->find($id);
        DB::beginTransaction();
        if ($store->delete()) {
            DB::commit();
        }
    }

    public function approve(Store $store): void
    {
        DB::beginTransaction();
        if ($store->update(['approved_at' => now(), 'approved_by' => auth('admin')->id()])) {
            DB::commit();
        }
    }

    public function createSellerRequest(array $data)
    {
        $user = auth('web')->user();

        $store = $user->store()->first();

        if ($store) abort(400, 'You already have a store');

        if ($user->sellerRequest()->first()) abort(400, 'You already have a seller request');

        $addressData = [
            'name' => $user->name,
            'phone' => $data['phone'] ?? $user->phone,
            'district_id' => $data['district_id'],
            'street' => $data['street'],
            'building'  => $data['building'],
            'type' => AddressTypeEnums::PICKUP->value,
        ];

        $pickupLocation =  $user->addresses()->create($addressData);

        $sellerRequest =  $user->sellerRequest()->create([
            'brand_name' => $data['brand_name'],
            'phone' => $data['phone'],
            'pickup_location_id' => $pickupLocation->id,
            'company_register' => $data['company_register'],
            'what_store_sells' => $data['what_store_sells'],
            'social_media' => $data['social_media'] ?? null,
        ]);

        NewSellerRequestJob::dispatch($sellerRequest);
    }

    public function approveStoreSellerRequest(int $id)
    {
        $sellerRequest = SellerRequest::query()
            ->with(['user', 'pickupLocation'])
            ->findOrFail($id);

        $user = $sellerRequest->user;

        $store = $user->store()->create([
            'name' => $sellerRequest->brand_name,
            'description' => $sellerRequest->what_store_sells,
            'company_register' => $sellerRequest->company_register,
            'approved_by' => auth('admin')->id(),
            'approved_at' => now(),
        ]);

        $sellerRequest->pickupLocation->update([
            'addressable_id' => $store->id,
            'addressable_type' => Store::class,
        ]);

        $sellerRequest->delete();

        SellerRequestApprovedJob::dispatch($store);
    }
}
