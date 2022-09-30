<?php

namespace App\Domain\Product\Services;

use App\Domain\Category\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Store\Models\Store;
use App\Domain\Variation\Services\VariationService;
use App\Http\Media\Request\StoreMediaRequest;
use App\Http\Product\Requests\StoreProductRequest;
use App\Http\Product\Requests\UpdateProductRequest;
use App\Http\Product\Resources\ProductPaginateResource;
use App\Http\Product\Resources\ProductResource;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Requests\ModelIDsRequest;
use App\Support\Services\Media\ImageService;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Carbon;


class ProductService
{

    /**
     * @param int $id
     * @return ProductResource
     */
    public function getProductsById(mixed $id)
    {
        return new ProductResource(
            Product::query()
                ->with(['media', 'categories', 'variations' => function ($query) {
                    $query->withTrashed()
                        ->parent()
                        ->with(['variationType', 'media', 'variationTypeValue', 'children' => function ($query) {
                            $query->with(['variationTypeValue', 'variationType', 'media']);
                        }]);
                }])
                ->whereIn('id', [$id])
                ->select('id', 'title', 'price', 'slug', 'description')
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
            $product = $store->products()->create($data);
            if ($product && $request->hasFile('images')) {
                $imageService->imageUpload($product, 'images', MediaCollectionEnums::PRODUCT, $data['store_id']);
            }
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

        if ($request->hasFile('images')) {
            $imageService->imageUpload($product, 'images', MediaCollectionEnums::THUMBNAIL, $product->id);
        }
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

    public function addImagesToProduct(Product $product, StoreMediaRequest $request, ImageService $imageService)
    {
        if ($request->hasFile('images')) {
            $imageService->imageUpload($product, 'images', MediaCollectionEnums::PRODUCT, $product->id);
        }
    }

    public function attachCategoryToProduct(Product $product, ModelIDsRequest $request)
    {
        $category = Category::query()
            ->find($request->validated('id'));
        $product->categories()->syncWithoutDetaching($category);
    }

    public function deleteProductImage(Product $product, ModelIDsRequest $request)
    {
        $image = $product->media()->find($request->validated('id'));
        $image?->delete();
    }

    public function getNewProducts(): AnonymousResourceCollection
    {
        return ProductResource::collection(
            Product::query()
                ->where('created_at', '<', (Carbon::now())->subDay())
                ->get()
        );
    }

    public function getProductsByCategory(Category $category, $filters = null): array
    {
        $facets = (new VariationService)->getFacetsArray();

        $finalFilterQuery = $this->filterFactory($filters, $category->id);

        $meilisearch = Product::search('', function ($meilisearch, string $query, array $options) use ($category, $finalFilterQuery, $facets) {
            $options['filter'] = $finalFilterQuery;
            $options['facets'] = $facets;
            return $meilisearch->search($query, $options);
        }
        )->query(function (Builder $builder) {
            $builder->with(['media', 'variations' => function ($query) {
                $query->with('getVariationImages', 'getVariationColor')
                    ->has('getVariationImages')
                    ->parent();
            }
            ]);
        })->paginate();

        return [
            'products' => ProductResource::collection($meilisearch),
            'filters' => $this->getFacetDistribution($facets, $category->id),
            'category' => $category
        ];
    }

    public function filterFactory($filters, $categoryId): string
    {
        $variationsFilters = $this->recursiveFilterIteration($filters);

        return empty($variationsFilters) ? 'category_ids = ' . $categoryId : 'category_ids = ' . $categoryId . ' AND ' . $variationsFilters;
    }

    public function recursiveFilterIteration($filters)
    {
        if (!$filters) return null;
        return collect($filters)->filter(fn($filter) => !empty($filter))
            ->recursive()
            ->map(function ($value, $key) {
                return $value->map(fn($value) => $key . ' = "' . $value . '"');
            })
            ->flatten()
            ->join(' OR ');

    }

    public function getFacetDistribution($facets, $categoryId)
    {
        $facetDistribution = Product::search('', function ($meilisearch, string $query, array $options) use ($facets, $categoryId) {
            $options['facets'] = $facets;
            $options['filter'] = 'category_ids = ' . $categoryId;
            return $meilisearch->search($query, $options);
        }
        )->raw();
        return $facetDistribution['facetDistribution'];
    }

    public function showProductDetails(Product $product): ProductResource
    {
        return new ProductResource(
            $product->load(['media', 'variations' => function ($query) {
                $query->with('children', 'getVariationImages', 'getVariationColor')
                    ->has('getVariationImages')
                    ->parent();
            }
            ])
        );
    }
}
