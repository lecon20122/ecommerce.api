<?php

namespace App\Domain\Product\Services;

use App\Domain\Category\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Store\Models\Store;
use App\Domain\Variation\Models\VariationTypeValue;
use App\Domain\Variation\Services\VariationService;
use App\Http\Category\Resources\CategoryResource;
use App\Http\Media\Request\StoreMediaRequest;
use App\Http\Product\Requests\StoreProductRequest;
use App\Http\Product\Requests\UpdateProductRequest;
use App\Http\Product\Resources\ProductResource;
use App\Http\Variation\Resources\VariationTypeValueResource;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Requests\ModelIDsRequest;
use App\Support\Services\Media\ImageService;
use App\Support\Services\SearchService;
use Domain\User\Models\User;
use Exception;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use JetBrains\PhpStorm\ArrayShape;
use JetBrains\PhpStorm\NoReturn;


class ProductService
{
    protected ?Authenticatable $user;

    public function __construct()
    {
        $this->user = auth()->user() ?? null;
    }

    public static function __callStatic($name, $arguments)
    {
        return (new static)->$name(...$arguments);
    }

    public function getStoreProducts()
    {
        /** @var Store $store */
        $store = \auth()->user()->store()->first();

        if ($store) {
            $products = $store->products()->get();
            return ProductResource::collection($products);
        } else {
            response()->json(['no products']);
        }
    }

    public function getProductBySlug(string $slug): ProductResource
    {
        $product = Product::query()
            ->with(['description.productAttribute', 'variations' => function ($query) {
                $query->with(['VariationImages', 'VariationColor', 'variationTypeValue', 'variationType', 'children' => function ($query) {
                    $query->with(['variationTypeValue', 'variationType', 'media']);
                }])
                    ->has('VariationImages')
                    ->parent();
            }
            ])
            ->where('slug', '=', $slug)
            ->first();
        return new ProductResource($product);
    }

    /**
     * @throws Exception
     */
    public function getProductFiltersByCategory(Category $category): array
    {
        $searchService = new SearchService();
        $productModel = new Product();

        $params = [
            'filter' => $searchService->generateCategoryQueryString($category->slug, null, false),
            'facets' => [...(new VariationService)->getFacetsArray(), 'stores', 'color_ids', 'size_ids'],
        ];

        $facets = $searchService->searchIndexedModel($params, $productModel)->raw()['facetDistribution'];

        $variations =
            VariationTypeValue::query()
                ->with(['VariationType:id,type', 'colorImage'])
                ->select('id', 'value', 'slug', 'hex_value', 'variation_type_id')
                ->find(
                    [...array_keys($facets['color_ids']), ...array_keys($facets['size_ids'])]
                );

        return [
            'filters' => VariationTypeValueResource::collection($variations),
            'stores' => array_keys($facets['stores']),
            'sub_categories' => CategoryResource::collection($category->load('children')->children),
        ];
    }

    /**
     * @throws Exception
     */
    public function getFilteredProducts(array $filters, int|null $limit): LengthAwarePaginator
    {
        $searchService = new SearchService();
        $productModel = new Product();

        $params = [
            'filter' => $searchService->filterQueryGenerator($filters),
            'facets' => [...(new VariationService)->getFacetsArray(), 'stores', 'category', 'price'],
        ];

        return $searchService->searchIndexedModel($params, $productModel, $limit)->query(function (Builder $builder) {
            $builder->with(['variations' => function ($query) {
                $query->with('VariationImages', 'VariationColor', 'variationTypeValue', 'variationType')
                    ->has('VariationImages')
                    ->parent();
            }
            ])->has('variations');
        })->paginate();
    }

    /**
     * @param int $id
     * @return ProductResource
     */
    public function getProductsById(mixed $id): ProductResource
    {
        return new ProductResource(
            Product::query()
                ->with(['categories', 'description.productAttribute', 'variations' => function ($query) {
                    $query->withTrashed()
                        ->parent()
                        ->with(['variationType', 'media', 'variationTypeValue', 'children' => function ($query) {
                            $query->with(['variationTypeValue', 'variationType', 'media']);
                        }]);
                }])
                ->whereIn('id', [$id])
                ->select('id', 'title', 'price', 'slug', 'store_id')
                ->latest()
                ->first()
        );
    }

    /**
     * @param array $data
     * @return void
     */

    public function store(array $data)
    {
        if (Auth::guard('admin')->check() && isset($data['store_id'])) {
            $store = Store::query()->find($data['store_id']);
        } else {
            $store = \auth()->user()->store()->first();
        }

        if ($store) {
            if (isset($data['en']) || isset($data['ar'])) {
                $data['title'] = [
                    'en' => $data['en'],
                    'ar' => $data['ar'],
                ];
            }
            $store->products()->create($data);
        }
    }

    public function update(array $data, Product $product): JsonResponse|ProductResource
    {
        if (isset($data['en'])) {
            $data['title'] = [
                'en' => $data['en'],
            ];
        }
        if (isset($data['ar'])) {
            $data['title'] = [
                'ar' => $data['ar'],
            ];
        }
        $product->update($data);
        return $this->getStoreProductBySlug($product->slug);
    }

    public function getStoreProductBySlug(string $slug): JsonResponse|ProductResource
    {
        /** @var Store $store */
        $store = \auth()->user()->store()->first();

        if ($store) {
            $products = $store->products()->where('slug', $slug)->with(['description.productAttribute', 'variations' => function ($query) {
                $query->with(['VariationImages', 'VariationColor', 'variationTypeValue', 'variationType', 'children' => function ($query) {
                    $query->with(['variationTypeValue', 'variationType', 'media']);
                }]);
            }
            ])->first();
            return new ProductResource($products);
        } else {
            return response()->json(['Store Not Found']);
        }
    }

    public function destroy(int $id)
    {
        $product = Product::query()->find($id);
        $product?->forceDelete();
    }

    public function restore(int $id)
    {
        $product = Product::withTrashed()->find($id);
        $product?->restore();
    }

    public function attachCategoryToProduct(Product $product, ModelIDsRequest $request)
    {
        $category = Category::query()
            ->find($request->validated('id'));
        $product->categories()->syncWithoutDetaching($category);
    }

    public function detachCategoryFromProduct(Product $product, ModelIDsRequest $request)
    {
        $category = Category::query()
            ->find($request->validated('id'));
        $product->categories()->detach($category);
    }

    public function getNewProducts(): AnonymousResourceCollection
    {
        return ProductResource::collection(
            Product::query()
                ->where('created_at', '<', (Carbon::now())->subDay())
                ->get()
        );
    }

    /**
     * @throws Exception
     */
    #[ArrayShape([
        'products' => "\Illuminate\Http\Resources\Json\AnonymousResourceCollection",
        'filters' => "mixed",
        'category' => "\App\Http\Category\Resources\CategoryResource",
        'maxPrice' => "mixed"
    ])]
    public function getProductsByCategory(Category $category, $filters = null): array
    {
        $searchService = new SearchService();
        $productModel = new Product();

        $params['filter'] = $searchService->filterQueryGenerator($category->id, Arr::except($filters, 'price'), $filters['price'] ?? null);
        $params['sort'] = $searchService->sortFactory($filters['sort'] ?? null);
        $params['facets'] = [...(new VariationService)->getFacetsArray(), 'stores'];

        $meilisearch = $searchService->searchIndexedModel($params, $productModel)->query(function (Builder $builder) {
            $builder->with(['variations' => function ($query) {
                $query->with('VariationImages', 'VariationColor', 'variationTypeValue', 'variationType')
                    ->has('VariationImages')
                    ->parent();
            }
            ])->has('variations');
        })->paginate();

        $paramForPriceRange['filter'] = 'category_ids = ' . $category->id;
        $maxPrice = $searchService->searchIndexedModel($paramForPriceRange, $productModel)->get()->max('price');

        return [
            'products' => ProductResource::collection($meilisearch),
            'filters' => $searchService->getFacetDistribution($params['facets'], $category->id, $productModel),
            'category' => new CategoryResource($category),
            'maxPrice' => $maxPrice
        ];
    }

    public function showProductDetails(Product $product): ProductResource
    {
        return new ProductResource(
            $product->load(['variations' => function ($query) {
                $query->with(['children' => function (HasMany $query) {
                    $query->with(['variationType', 'variationTypeValue',]);
                }, 'VariationImages', 'VariationColor', 'variationType', 'variationTypeValue'])
                    ->has('VariationImages')
                    ->parent();
            }
            ])
        );
    }
}
