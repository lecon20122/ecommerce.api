<?php

namespace App\Http\Category\Observers;

use App\Domain\Category\Models\Category;
use App\Support\Enums\CacheKeyEnums;
use App\Support\Observers\BaseObserver;
use Illuminate\Support\Facades\Cache;

class CategoryObserver extends BaseObserver
{
    protected string $key = CacheKeyEnums::CATEGORY;
    /**
     * Handle the Category "updated" event.
     *
     * @param  Category  $category
     * @return void
     */
    public function updated(Category $category)
    {
        //
    }

    /**
     * Handle the Category "deleted" event.
     *
     * @param  Category  $category
     * @return void
     */
    public function deleted(Category $category)
    {
        //
    }

    /**
     * Handle the Category "restored" event.
     *
     * @param  Category  $category
     * @return void
     */
    public function restored(Category $category)
    {
        //
    }

    /**
     * Handle the Category "force deleted" event.
     *
     * @param  Category  $category
     * @return void
     */
    public function forceDeleted(Category $category)
    {
        //
    }
}
