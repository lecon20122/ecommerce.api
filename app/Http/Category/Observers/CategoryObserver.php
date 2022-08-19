<?php

namespace App\Http\Category\Observers;

use App\Domain\Category\Models\Category;
use App\Support\Enums\CacheKeyEnums;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class CategoryObserver
{
//    protected string $key = CacheKeyEnums::CATEGORY;

    protected string $key = CacheKeyEnums::CATEGORY;

    public function created(Category $category)
    {
        Cache::forget($this->key);
    }

    public function creating(Category $category)
    {
        $category->slug = Str::slug($category->title);
    }

    /**
     * Handle the Category "updated" event.
     *
     * @param Category $category
     * @return void
     */
    public function updated(Category $category)
    {
        Cache::forget($this->key);
    }

    /**
     * Handle the Category "deleted" event.
     *
     * @param Category $category
     * @return void
     */
    public function deleted(Category $category)
    {
        Cache::forget($this->key);
    }

    /**
     * Handle the Category "restored" event.
     *
     * @param Category $category
     * @return void
     */
    public function restored(Category $category)
    {
        Cache::forget($this->key);
    }

    /**
     * Handle the Category "force deleted" event.
     *
     * @param Category $category
     * @return void
     */
    public function forceDeleted(Category $category)
    {
        Cache::forget($this->key);
    }

    public function updating(Category $category)
    {
        $category->slug = Str::slug($category->title);
    }
}
