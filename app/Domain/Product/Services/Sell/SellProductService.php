<?php

namespace App\Domain\Product\Services\Sell;

use App\Domain\Product\Models\Product;
use App\Domain\Variation\Services\Sell\SellVariationService;
use App\Http\Product\Resource\Sell\SellProductResource;
use App\Http\Product\Resources\ProductResource;
use App\Jobs\NewProductCreatedJob;
use App\Notifications\NewProductCreatedNotification;
use App\Support\Enums\TypeEnum;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Arr;
use Illuminate\Support\Benchmark;
use Illuminate\Support\Facades\Notification;
use Telegram\Bot\Laravel\Facades\Telegram;

use function auth;

class SellProductService
{
    protected Authenticatable|null $user;

    public function __construct()
    {
        $this->user = auth()->user();
    }

    /**
     * @param int $id
     * @return SellProductResource
     */
    public function getProductDetails(int $id): SellProductResource
    {
        $store = auth()->user()->store()->approved()->first();
        if (!$store) abort(403, 'you are not allowed to view products yet!');
        $product = $store->products()->find($id);
        if (!$product) abort(404, 'product not found!');

        $this->loadProductRelations($product);

        return new SellProductResource($product);
    }

    public function index()
    {
        $store = auth()->user()->store()->approved()->first();
        if ($store) {
            $store->load(['products' => function (HasMany $query) {
                $query->with([
                    'discount',
                    'variation' => function (HasOne $query) {
                        $query->with('mainImage')->color();
                    },
                ])->orderByDesc('created_at');
            }]);
            return SellProductResource::collection($store->products);
        } else {
            abort(404, 'you are not allowed to view products yet!');
        }
    }

    public function create(array $data)
    {
        $store = auth()->user()->store()->approved()->first();

        if (!$store) abort(403, 'you are not allowed to create a product yet!');

        $product = $store->products()->create($data);

        $this->assignCategories($product, $data['category_id'], $data['unisex']);

        (new SellVariationService())->createColorAndSizes($product, $data['color_id'], $data['sizes'], $data['price']);

        if ($product) NewProductCreatedJob::dispatch($product);

        return new SellProductResource($product->load('variations'));
    }

    public function update(array $data, int $id)
    {
        $store = auth()->user()->store()->approved()->first();
        if (!$store) abort(403, 'you are not allowed to view products yet!');

        $product = $store->products()->find($id);

        //TODO: Variation Price Accessor not working, also when i update the Variation Model says its a Lazy Loading Error
        $priceToCents = $data['price'] * 100;

        if ($data['price']) {
            $this->massProductDetailsAndPriceUpdate($product, $priceToCents);
        }
        $product->update($data);

        $this->loadProductRelations($product);

        return new SellProductResource($product);
    }

    public function assignCategories(Product $product, $categoryId, bool $unisex = false): void
    {
        $product->categories()->attach($categoryId);
        if ($unisex) {
            $category = $product->categories()->find($categoryId);
            $product->categories()->attach($category->opposite_category_id);
        }
    }

    public function massProductDetailsAndPriceUpdate(Product $product, int $price): void
    {
        $product->variations()->update(['price' => $price,]);
    }

    public function loadProductRelations(Product $product): void
    {
        $product->load([
            'discount',
            'variations' => function (HasMany $query) {
                $query->with([
                    'mainImage',
                    'variationTypeValue',
                ])->parent();
            },
        ]);
    }

    public function changeProductStatus(int $id , string $status)
    {
        $user = auth()->user();
        $approvedStore = $user->store()->approved()->first();
        if (!$approvedStore) abort(403, 'you are not allowed to perform this action yet!');

        $product = $approvedStore->products()->findOrFail($id);

        $isUpdated = $product->update(['status' => $status]);

        
    }


    public function safeDelete(int $id)
    {
        $user = auth()->user();
        $approvedStore = $user->store()->approved()->first();
        if (!$approvedStore) abort(403, 'you are not allowed to perform this action yet!');

        $product = $approvedStore->products()->with(['variations' => function (HasMany $query) {
            $query->whereHas('orders');
        }])->findOrFail($id);

        if ($product->variations) {
            $product->delete(); //softDelete
        } else {
            $product->forceDelete();
        }
    }
}
