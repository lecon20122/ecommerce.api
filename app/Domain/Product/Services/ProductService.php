<?php

namespace App\Domain\Product\Services;

use App\Domain\Category\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Statistics\Services\StatisticsService;
use App\Domain\Store\Models\Store;
use App\Domain\Variation\Models\VariationTypeValue;
use App\Domain\Variation\Services\VariationService;
use App\Http\Category\Resources\CategoryResource;
use App\Http\Category\Services\CategoryService;
use App\Http\Product\Resources\Admin\AdminProductResource;
use App\Http\Product\Resources\ProductResource;
use App\Http\Variation\Resources\VariationTypeValueResource;
use App\Support\Enums\ApplicationEnums;
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


    public function getAdminProducts()
    {
        $products = Product::query()
            ->with('store')
            ->orderBy('is_approved', 'asc')
            ->get();

        return AdminProductResource::collection($products);
    }

    public function adminApproveProduct(int $id)
    {
        $product = Product::query()->findOrFail($id);

        if ($product->is_approved) throw new Exception('product already approved');

        $product->is_approved = true;
        $product->admin_id = auth('admin')->id();
        $product->save();


        (new VariationService())->approveVariationImages($product);
    }

    public function createProduct(Store $store, $data): Model
    {
        $data['title'] = [
            'en' => $data['en'],
            'ar' => $data['ar'],
        ];
        return $store->products()->create($data);
    }

    public function getProductById(int $id): JsonResponse | ProductResource
    {
        $product = Product::query()
            ->with([
                'discount', 'store', 'description.productAttribute', 'variations' => function ($query) {
                    $query->with(['VariationImages', 'VariationColor', 'variationTypeValue', 'variationType', 'children' => function ($query) {
                        $query->with(['variationTypeValue', 'variationType', 'media']);
                    }])
                        ->has('VariationImages')
                        ->parent();
                }
            ])
            ->find($id);

        $visitCookie = (new StatisticsService())->recordVisit($product);


        if ($visitCookie) {
            return (new ProductResource($product))
                ->response()
                ->cookie(cookie()->forever(ApplicationEnums::VISIT_ID_COOKIE, $visitCookie));
        }

        return (new ProductResource($product));
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
    public function getProductsById(mixed $id): AdminProductResource
    {
        return new AdminProductResource(
            Product::query()
                ->withTrashed()
                ->with(['categories', 'store', 'description.productAttribute', 'variations' => function ($query) {
                    $query->withTrashed()
                        ->parent()
                        ->with(['media', 'variationTypeValue', 'children' => function ($query) {
                            $query->with(['variationTypeValue']);
                        }]);
                }])
                ->find($id)
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
        $product->load([
            'discounts', 'description.productAttribute', 'categories', 'variations' => function (HasMany $query) {
                $query->with(['variationSmallImage', 'variationTypeValue', 'variationType'])->parent();
            }
        ]);

        return new ProductResource($product);
    }
}
