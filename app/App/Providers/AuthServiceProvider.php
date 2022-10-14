<?php

namespace App\App\Providers;

use App\Domain\Cart\Models\Policies\ProductPolicy;
use App\Domain\Cart\Models\Policies\StorePolicy;
use App\Domain\Product\Models\Product;
use App\Domain\Store\Models\Store;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Store::class => StorePolicy::class,
        Product::class => ProductPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
    }
}
