<?php

namespace App\Http\Product\Controllers;

use App\Domain\Category\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Product\Services\ProductService;
use App\Http\Product\Requests\ProductBySlugRequest;
use App\Http\Product\Requests\ProductFilterRequest;
use App\Http\Product\Requests\StoreProductRequest;
use App\Http\Product\Requests\UpdateProductRequest;
use App\Http\Product\Resources\ProductResource;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use JetBrains\PhpStorm\NoReturn;

class ApiProductController extends BaseController
{
    public function __construct(protected ProductService $service)
    {
    }

    /**
     * Display a listing of the resource.
     *
     * @param Category $category
     * @return array|JsonResponse
     */
    #[NoReturn] public function getProductSearchFilterByCategory(Category $category): JsonResponse|array
    {
        try {
            return $this->service->getProductFiltersByCategory($category);
        } catch (Exception $exception) {
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }

    /**
     * @param ProductFilterRequest $request
     * @return AnonymousResourceCollection|JsonResponse
     */
    public function getFilteredProducts(ProductFilterRequest $request): AnonymousResourceCollection|JsonResponse
    {
        try {
            return ProductResource::collection(
                $this->service->getFilteredProducts(
                    Arr::except(
                        $request->validated(),
                        'limit'),
                    $request->validated('limit')
                ));
        } catch (Exception $exception) {
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }

    /**
     * @param ProductBySlugRequest $request
     * @return ProductResource|JsonResponse
     */
    public function getProduct(ProductBySlugRequest $request): ProductResource|JsonResponse
    {
        try {
            return $this->service->getProductBySlug($request->validated('slug'));
        } catch (Exception $exception) {
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }

    /**
     * @param StoreProductRequest $request
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function storeStoreProduct(StoreProductRequest $request): JsonResponse|AnonymousResourceCollection
    {
        try {
            $this->service->store($request->validated());
            return $this->getStoreProducts();
        } catch (Exception $exception) {
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }

    /**
     * Display the specified resource for specified store.
     *
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function getStoreProducts(): JsonResponse|AnonymousResourceCollection
    {
        try {
            return $this->service->getStoreProducts();
        } catch (Exception $exception) {
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }

    /**
     * Display the specified resource for specified store.
     *
     * @param ProductBySlugRequest $request
     * @return JsonResponse|ProductResource
     */
    public function getStoreProductBySlug(ProductBySlugRequest $request): JsonResponse|ProductResource
    {
        try {
            return $this->service->getStoreProductBySlug($request->validated('slug'));
        } catch (Exception $exception) {
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }

    /**
     *
     *
     * @param UpdateProductRequest $request
     * @param Product $product
     * @return JsonResponse|ProductResource
     */
    public function updateStoreProduct(UpdateProductRequest $request, Product $product): JsonResponse|ProductResource
    {
        try {
            return $this->service->update($request->validated(), $product);
        } catch (Exception $exception) {
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  $id
     * @return JsonResponse
     */
    public function deleteStoreProduct($id): JsonResponse
    {
        try {
            $this->service->destroy($id);
            return $this->sendSuccess();
        } catch (Exception $exception) {
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}
