<?php

namespace App\Domain\Product\Services;

use App\Domain\Category\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Store\Models\Store;
use App\Domain\Variation\Services\VariationService;
use App\Http\Category\Resources\CategoryResource;
use App\Http\Media\Request\StoreMediaRequest;
use App\Http\Product\Requests\StoreProductRequest;
use App\Http\Product\Requests\UpdateProductRequest;
use App\Http\Product\Resources\ProductResource;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Requests\ModelIDsRequest;
use App\Support\Services\Media\ImageService;
use App\Support\Services\SearchService;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use JetBrains\PhpStorm\ArrayShape;


class ProductService
{
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

        $params['filter'] = $searchService->filterFactory($category->id, Arr::except($filters, 'price'), $filters['price'] ?? null);
        $params['sort'] = $searchService->sortFactory($filters['sort'] ?? null);
        $params['facets'] = [...(new VariationService)->getFacetsArray(), 'stores'];

        $meilisearch = $searchService->searchIndexedModel($params, $productModel)->query(function (Builder $builder) {
            $builder->with(['variations' => function ($query) {
                $query->with('VariationImages', 'VariationColor','variationTypeValue','variationType')
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
