<?php

namespace App\Domain\Product\Services;

use App\Domain\Category\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Store\Models\Store;
use App\Domain\Variation\Models\VariationTypeValue;
use App\Domain\Variation\Services\VariationService;
use App\Http\Category\Resources\CategoryResource;
use App\Http\Category\Services\CategoryService;
use App\Http\Product\Resources\ProductResource;
use App\Http\Variation\Resources\VariationTypeValueResource;
use App\Support\Requests\ModelIDsRequest;
use App\Support\Services\SearchService;
use Domain\User\Models\User;
use Exception;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;


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

    public function createProductMegaForm(array $data)
    {
        $store = \auth()->user()->getAuthenticatedStore();

        if ($store) {
            $product = $this->createProduct($store, $data);
            (new CategoryService)->attach($product, $data['category_ids']);
            (new VariationService)->createOneColorAndManySizes($product, $data);
        } else {
            return response()->json(['no store']);
        }

    }

    public function createProduct(Store $store, $data): Model
    {
        $data['title'] = [
            'en' => $data['en'],
            'ar' => $data['ar'],
        ];
        return $store->products()->create($data);
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

    public function getProductById(int $id): ProductResource
    {
        $product = Product::query()
            ->with(['discount', 'store', 'description.productAttribute', 'variations' => function ($query) {
                $query->with(['VariationImages', 'VariationColor', 'variationTypeValue', 'variationType', 'children' => function ($query) {
                    $query->with(['variationTypeValue', 'variationType', 'media']);
                }])
                    ->has('VariationImages')
                    ->parent();
            }
            ])
            ->find($id);
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
            $builder->with([
                'discount',
                'store',
                'variations' => function ($query) {
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
                ->withTrashed()
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
            return $store->products()->create($data);
        }
    }

    public function update(array $data)
    {
        $product = Product::find($data['product_id']);

        if (is_null($product)) abort(404);

        Gate::authorize('update', $product);

        if (isset($data['en'])) {
            $data['title']['en'] = $data['en'];
        }

        if (isset($data['ar'])) {
            $data['title']['ar'] = $data['ar'];
        }

        if ($product->update($data)) {
            if (Auth::guard('web')->check()) {
                return $this->loadProductRelations($product);
            }
        } else {
            return response()->json(['error' => 'something went wrong']);
        }

    }

    public function loadProductRelations(Product $product): ProductResource
    {
        $product->load(['discounts', 'description.productAttribute', 'categories', 'variations' => function (HasMany $query) {
            $query->with(['variationSmallImage', 'variationTypeValue', 'variationType'])->parent();
        }
        ]);

        return new ProductResource($product);
    }

    public function getStoreProduct(Product $product): JsonResponse|ProductResource
    {
        /** @var User $user */
        $user = \auth()->user();

        if (!$user->isOwner($product->store_id)) abort(403, 'You are not allowed to access this product');

        $product->load(['discount', 'description.productAttribute', 'categories', 'variations' => function (HasMany $query) {
            $query->with([ 'variationTypeValue', 'variationType'])->parent();
        }
        ])->first();

        return new ProductResource($product);
    }

    public function getStoreProductBySlug(string $slug): JsonResponse|ProductResource
    {
        /** @var Store $store */
        $store = \auth()->user()->store()->first();

        if ($store) {
            $products = $store->products()->withTrashed()->where('slug', $slug)->with(['description.productAttribute', 'categories', 'variations' => function (HasMany $query) {
                $query->with(['variationSmallImage', 'variationTypeValue', 'variationType'])->parent();
            }
            ])->first();

            if (is_null($products)) abort(404);
            return new ProductResource($products);
        } else {
            return response()->json(['Store Not Found']);
        }
    }

    public function softDelete(int $id)
    {
        $product = Product::query()->find($id);
        Gate::authorize('delete', $product);
        $product?->delete();
    }

    public function restore(int $id)
    {
        $product = Product::withTrashed()->find($id);
        $product?->restore();
    }

    public function attachCategoryToProduct(Product $product, ModelIDsRequest $request)
    {
        Gate::authorize('attachCategoryToProduct', $product);
        $category = Category::query()
            ->find($request->validated('id'));
        $product->categories()->syncWithoutDetaching($category);
    }

    public function detachCategoryFromProduct(Product $product, ModelIDsRequest $request)
    {
        Gate::authorize('detachCategoryToProduct', $product);
        $category = Category::query()
            ->find($request->validated('id'));
        $product->categories()->detach($category);
    }
}
