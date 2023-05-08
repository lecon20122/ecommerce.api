<?php

namespace App\Domain\Product\Services\Sell;

use App\Domain\Category\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Variation\Services\Sell\SellVariationService;
use App\Http\Product\Resource\Sell\SellProductResource;
use App\Http\Product\Resources\ProductResource;
use App\Jobs\NewProductCreatedJob;
use App\Notifications\NewProductCreatedNotification;
use App\Support\Enums\StateEnums;
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
                $query
                    ->with([
                        'discount',
                        'variation' => function (HasOne $query) {
                            $query->with('mainImage')->color();
                        },
                    ])
                    ->withSum('viewSummary', 'views')
                    ->orderByDesc('created_at');
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

        foreach ($data['variations'] as $index => $value) {
            (new SellVariationService())
                ->createColorAndSizes(
                    $product,
                    $value['color_id'],
                    $value['sizes'],
                    $data['price'],
                    $index
                );
        }

        if ($product) NewProductCreatedJob::dispatch($product);

        return new SellProductResource($product->load('variations'));
    }

    public function update(array $data, int $id)
    {
        $store = auth()->user()->store()->approved()->first();

        if (!$store) abort(403, 'you are not allowed to view products yet!');

        $product = $store->products()->find($id);

        if (isset($data['price'])) {
            $priceToCents = $data['price'] * 100;
            $this->massProductDetailsAndPriceUpdate($product, $priceToCents);
        }

        if (isset($data['status'])) {
            $data['status'] = $this->toggleProductStatus($product, $data['status']);
        }

        if (isset($data['category_id'])) {
            $this->assignCategories($product, $data['category_id'], $data['unisex'] ?? false);
        }

        $product->update($data);
    }

    public function assignCategories(Product $product, $categoryId, bool $unisex = false): void
    {
        if ($unisex) {
            $category = Category::find($categoryId);

            if (!$category || !$category->opposite_category_id) throw new \Exception('category is not unisex or not found!');

            $product->categories()->sync([$categoryId, $category->opposite_category_id]);
        } else {
            $product->categories()->sync($categoryId);
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

    public function toggleProductStatus(string $status): string
    {
        return  $status === StateEnums::ACTIVE->value ? StateEnums::DRAFT->value : StateEnums::ACTIVE->value;
    }
}
