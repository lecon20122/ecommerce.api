<?php

namespace App\App\Providers;

use App\Domain\Cart\Models\Cart;
use App\Domain\Category\Models\Category;
use App\Domain\Location\Models\Address;
use App\Domain\Order\Models\Order;
use App\Domain\Product\Models\CategoryProduct;
use App\Domain\Product\Models\Product;
use App\Domain\Store\Models\Store;
use App\Domain\Variation\Models\Variation;
use App\Events\OrderPlacedEvent;
use App\Events\StockChangedEvent;
use App\Http\Cart\Observers\CartObserver;
use App\Http\Cart\Observers\CartVariationObserver;
use App\Http\Category\Observers\CategoryObserver;
use App\Http\Location\Observer\AddressObserver;
use App\Http\Order\Observers\OrderObserver;
use App\Http\Product\Observers\CategoryProductObserver;
use App\Http\Product\Observers\ProductObserver;
use App\Http\Store\Observers\StoreObserver;
use App\Http\Variation\Observers\VariationObserver;
use App\Listeners\AssignUserToCart;
use App\Listeners\DestroyCart;
use App\Listeners\UpdateVariationStock;
use Illuminate\Auth\Events\Login;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        OrderPlacedEvent::class => [
//            SyncVariationStockAfterOrderPlaced::class,
            DestroyCart::class,
        ],
        StockChangedEvent::class => [
            UpdateVariationStock::class,
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        Category::observe(CategoryObserver::class);
        Order::observe(OrderObserver::class);
        Store::observe(StoreObserver::class);
        Product::observe(ProductObserver::class);
        Variation::observe(VariationObserver::class);
        CategoryProduct::observe(CategoryProductObserver::class);
        Cart::observe(CartObserver::class);
        Address::observe(AddressObserver::class);
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     *
     * @return bool
     */
    public function shouldDiscoverEvents()
    {
        return false;
    }
}
