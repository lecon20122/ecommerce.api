<?php

namespace App\Domain\Store\Services;

use App\Domain\Store\Models\Store;
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
        return Cache::remember(CacheKeyEnums::STORE, '3600',
            fn() => Store::query()
                ->select('id', 'name', 'description', 'is_active', 'created_at', 'user_id')
                ->with('user:id,name')
                ->latest()
                ->get()
        );
    }

    public function store(StoreCreateRequest $request)
    {
        $user = User::query()
            ->find($request->validated('user_id', ['id']));

        $user?->stores()->create($request->validated());
    }

    public function getStoreById(int $id): StoreResource
    {
        return new StoreResource(
            Store::query()
                ->with('products.media')
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
}
