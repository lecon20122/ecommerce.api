<?php

namespace App\Http\Product\Controllers;

use App\Domain\Category\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Product\Services\ProductService;
use App\Http\Product\Request\GetProductByIdRequest;
use App\Http\Product\Requests\ProductBySlugRequest;
use App\Http\Product\Requests\ProductFilterRequest;
use App\Http\Product\Requests\StoreProductMegaFormRequest;
use App\Http\Product\Requests\StoreProductRequest;
use App\Http\Product\Requests\UpdateProductRequest;
use App\Http\Product\Resources\ProductResource;
use App\Support\Requests\ModelIDsRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use JetBrains\PhpStorm\NoReturn;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;

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
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
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
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }

    /**
     * @param GetProductByIdRequest $request
     * @return ProductResource|JsonResponse
     */
    public function getProduct(GetProductByIdRequest $request): ProductResource|JsonResponse
    {
        try {
            return $this->service->getProductById($request->validated('id'));
        } catch (Exception $exception) {
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
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
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
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
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
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
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }

    public function getStoreProduct(Product $product): JsonResponse|ProductResource
    {
        try {
            return $this->service->getStoreProduct($product);
        } catch (Exception $exception) {
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }

    /**
     *
     *
     * @param UpdateProductRequest $request
     * @return JsonResponse|ProductResource
     */
    public function updateStoreProduct(UpdateProductRequest $request): JsonResponse|ProductResource
    {
        try {
            return $this->service->update($request->validated());
        } catch (Exception $exception) {
            dd($exception->getMessage());
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ModelIDsRequest $request
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function softDeleteStoreProduct(ModelIDsRequest $request): JsonResponse|AnonymousResourceCollection
    {
        try {
            $this->service->softDelete($request->validated('id'));
            return $this->getStoreProducts();
        } catch (Exception $exception) {
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ModelIDsRequest $request
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function restoreStoreProduct(ModelIDsRequest $request): JsonResponse|AnonymousResourceCollection
    {
        try {
            $this->service->restore($request->validated('id'));
            return $this->getStoreProducts();
        } catch (Exception $exception) {
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }

    public function attachCategoriesToProduct($id, ModelIDsRequest $request): JsonResponse|ProductResource
    {
        DB::beginTransaction();
        try {
            $product = Product::withTrashed()->find($id);
            $this->service->attachCategoryToProduct($product, $request);
            DB::commit();
            return $this->service->getStoreProductBySlug($product->slug);
        } catch (Exception $exception) {
            DB::rollBack();
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }

    public function detachCategoryFromProduct($id, ModelIDsRequest $request): ProductResource|JsonResponse
    {
        DB::beginTransaction();
        try {
            $product = Product::withTrashed()->find($id);
            $this->service->detachCategoryFromProduct($product, $request);
            DB::commit();
            return $this->service->getStoreProductBySlug($product->slug);
        } catch (Exception $exception) {
            DB::rollBack();
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }

    public function createProductMegaForm(StoreProductMegaFormRequest $request)
    {
        DB::beginTransaction();
        try {
            $this->service->createProductMegaForm($request->validated());
            DB::commit();
        } catch (Exception $exception) {
            DB::rollBack();
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }
}
