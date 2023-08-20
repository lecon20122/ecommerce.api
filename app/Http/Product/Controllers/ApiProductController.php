<?php

namespace App\Http\Product\Controllers;

use App\Domain\Category\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Product\Services\ProductService;
use App\Http\Product\Request\GetProductByIdRequest;
use App\Http\Product\Requests\ProductBySlugRequest;
use App\Http\Product\Requests\ProductFilterRequest;
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
    public function getProductSearchFilterByCategory(Category $category): JsonResponse|array
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
                        'limit'
                    ),
                    $request->validated('limit')
                )
            );
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
            // dd($exception->getMessage());.............
            if ($exception instanceof HttpExceptionInterface) {
                $code = $exception->getStatusCode();
            }
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__, $code ?? 400);
        }
    }
}
