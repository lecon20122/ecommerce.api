<?php

namespace App\Providers;

use App\Domain\Cart\Contracts\CartInterface;
use App\Domain\Cart\Services\CartService;
use Illuminate\Support\ServiceProvider;

class CartServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(CartInterface::class, fn() => new CartService(session()));
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
