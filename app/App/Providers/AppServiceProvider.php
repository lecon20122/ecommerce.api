<?php

namespace App\App\Providers;

use App\Domain\Category\Models\Category;
use App\Domain\Order\Models\Order;
use App\Domain\Product\Models\CategoryProduct;
use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\Variation;
use App\Domain\Store\Models\Store;
use App\Http\Category\Observers\CategoryObserver;
use App\Http\Order\Observers\OrderObserver;
use App\Http\Product\Observers\CategoryProductObserver;
use App\Http\Product\Observers\ProductObserver;
use App\Http\Store\Observers\StoreObserver;
use App\Http\Variation\Observers\VariationObserver;
use App\Providers\TelescopeServiceProvider;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->environment('local')) {
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(TelescopeServiceProvider::class);
        }
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        JsonResource::withoutWrapping();
        Category::observe(CategoryObserver::class);
        Order::observe(OrderObserver::class);
        Store::observe(StoreObserver::class);
        Product::observe(ProductObserver::class);
        Variation::observe(VariationObserver::class);
        CategoryProduct::observe(CategoryProductObserver::class);


        Collection::macro('recursive', function () {
            return $this->map(function ($value) {
                if (is_array($value) || is_object($value)) {
                    return collect($value)->recursive();
                }
                return $value;
            });
        });
    }
}
