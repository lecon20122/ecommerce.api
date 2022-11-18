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
use App\Http\Product\Resources\ProductFilterResource;
use App\Http\Product\Resources\ProductResource;
use App\Http\Variation\Resources\VariationTypeValueResource;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Requests\ModelIDsRequest;
use App\Support\Services\Media\ImageService;
use App\Support\Services\SearchService;
use Exception;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use JetBrains\PhpStorm\ArrayShape;
use JetBrains\PhpStorm\NoReturn;


class ProductService
{

    /**
     * @throws Exception
     */
    public function getProductFiltersByCategory(Category $category): array
    {
        $searchService = new SearchService();
        $productModel = new Product();

        $params = [
            'filter' => $searchService->generateCategoryQueryString($category->slug, null, false),
            'facets' => [...(new VariationService)->getFacetsArray(), 'stores'],
        ];

        $facets = $searchService->searchIndexedModel($params, $productModel)->raw()['facetDistribution'];

        foreach ($facets as $facet => $value) {

            if ($facet === 'color') {
                foreach ($value as $color => $colorValue) {
                    $splitColorString = explode(',', $color);
                    $slugs[$facet][$splitColorString[0]] = $splitColorString[1];
                }
            }

            if ($facet !== 'stores' && $facet !== 'color') {
                $slugs[$facet] = array_keys($value);
            }
        }


        return [
            ...$slugs,
            'stores' => array_keys($facets['stores']),
            'sub_categories' => CategoryResource::collection($category->load('children')->children),
        ];
    }


    /**
     * @throws Exception
     */
    public function getFilteredProducts(array $filters): LengthAwarePaginator
    {
        $searchService = new SearchService();
        $productModel = new Product();

        $params = [
            'filter' => $searchService->filterQueryGenerator($filters),
            'facets' => [...(new VariationService)->getFacetsArray(), 'stores', 'category', 'price'],
        ];

        return $searchService->searchIndexedModel($params, $productModel)->query(function (Builder $builder) {
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
                ->with(['categories', 'variations' => function ($query) {
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
     * @param StoreProductRequest $request
     * @param ImageService $imageService
     *
     */

    public function store(StoreProductRequest $request, ImageService $imageService)
    {
        $data = $request->validated();

        $store = Store::query()->find($data['store_id']);
        if ($store) {
            if ($request->has('en') || $request->has('ar')) {
                $data['title'] = [
                    'en' => $request->validated('en'),
                    'ar' => $request->validated('ar'),
                ];
            }
            $store->products()->create($data);
        }
    }

    public function update(UpdateProductRequest $request, Product $product, ImageService $imageService)
    {
        $data = $request->validated();

        if ($request->has('en') || $request->has('ar')) {
            $data['title'] = [
                'en' => $request->validated('en'),
                'ar' => $request->validated('ar'),
            ];
        }
        $product->update($data);
    }

    public function destroy(int $id)
    {
        $product = Product::query()->find($id);
        $product?->delete();
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
