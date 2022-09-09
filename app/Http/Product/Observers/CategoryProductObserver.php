<?php

namespace App\Http\Product\Observers;

use App\Domain\Product\Models\CategoryProduct;
use Illuminate\Support\Facades\Artisan;

class CategoryProductObserver
{
    /**
     * Handle the CategoryProduct "created" event.
     *
     * @param CategoryProduct $categoryProduct
     * @return void
     */
    public function created(CategoryProduct $categoryProduct)
    {
//        Artisan::call('scout:import', ['model' => 'App\Domain\Product\Models\Product']);
    }

    /**
     * Handle the CategoryProduct "updated" event.
     *
     * @param CategoryProduct $categoryProduct
     * @return void
     */
    public function updated(CategoryProduct $categoryProduct)
    {
        //
    }

    /**
     * Handle the CategoryProduct "deleted" event.
     *
     * @param CategoryProduct $categoryProduct
     * @return void
     */
    public function deleted(CategoryProduct $categoryProduct)
    {
        //
    }

    /**
     * Handle the CategoryProduct "restored" event.
     *
     * @param CategoryProduct $categoryProduct
     * @return void
     */
    public function restored(CategoryProduct $categoryProduct)
    {
        //
    }

    /**
     * Handle the CategoryProduct "force deleted" event.
     *
     * @param CategoryProduct $categoryProduct
     * @return void
     */
    public function forceDeleted(CategoryProduct $categoryProduct)
    {
        //
    }
}
