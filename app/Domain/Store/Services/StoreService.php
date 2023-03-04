<?php

namespace App\Domain\Store\Services;

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
}
