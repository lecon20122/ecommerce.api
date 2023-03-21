<?php

namespace App\Domain\Store\Services;

use App\Domain\Location\Enums\AddressTypeEnums;
use App\Domain\Store\Models\Store;
use App\Domain\Variation\Models\Variation;
use App\Http\Store\Requests\StoreCreateRequest;
use App\Http\Store\Requests\StoreUpdateRequest;
use App\Http\Store\Resources\StoreResource;
use App\Support\Enums\CacheKeyEnums;
use Domain\User\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class StoreService
{
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
        $user->is_owner = true;
        $user->save();
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

    public function getStore()
    {
        return auth('web')->user()->store()->first();
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

        if ($store) abort(403, 'You already have a store');

        if ($user->sellerRequest()->first()) abort(403, 'You already have a seller request');

        $addressData = [
            'name' => $user->name,
            'phone' => $data['phone'] ?? $user->phone,
            'district_id' => $data['district_id'],
            'street' => $data['street'],
            'building'  => $data['building'],
            'type' => AddressTypeEnums::PICKUP->value,
        ];

        $pickupLocation =  $user->addresses()->create($addressData);

        $user->sellerRequest()->create([
            'name' => $data['name'],
            'phone' => $data['phone'],
            'pickup_location' => $pickupLocation->id,
            'company_register' => $data['company_register'],
            'what_store_sells' => $data['what_store_sells'],
            'instagram' => $data['instagram'] ?? null,
            'facebook' => $data['facebook'] ?? null,
        ]);
    }
}
