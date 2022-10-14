<?php

namespace App\Http\Store\Observers;

use App\Domain\Category\Models\Category;
use App\Domain\Store\Models\Store;
use App\Support\Enums\CacheKeyEnums;
use Illuminate\Support\Facades\Cache;

class StoreObserver
{
    protected string $key = CacheKeyEnums::STORE;

    public function created(Store $category)
    {
        Cache::forget($this->key);
    }

    /**
     * Handle the Category "updated" event.
     *
     * @param Category $category
     * @return void
     */
    public function updated(Store $category)
    {
        Cache::forget($this->key);
    }

    /**
     * Handle the Category "deleted" event.
     *
     * @param Category $category
     * @return void
     */
    public function deleted(Store $category)
    {
        Cache::forget($this->key);
    }

    /**
     * Handle the Category "restored" event.
     *
     * @param Category $category
     * @return void
     */
    public function restored(Store $category)
    {
        Cache::forget($this->key);
    }

    /**
     * Handle the Category "force deleted" event.
     *
     * @param Category $category
     * @return void
     */
    public function forceDeleted(Store $category)
    {
        Cache::forget($this->key);
    }
}
