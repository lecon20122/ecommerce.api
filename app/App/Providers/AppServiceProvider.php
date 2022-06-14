<?php

namespace App\App\Providers;

use App\Domain\Category\Models\Category;
use App\Domain\Order\Models\Order;
use App\Http\Category\Observers\CategoryObserver;
use App\Http\Order\Observers\OrderObserver;
use App\Providers\TelescopeServiceProvider;
use Illuminate\Http\Resources\Json\JsonResource;
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
    }
}
