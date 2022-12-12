<?php

namespace App\Http\Product\Controllers;

use App\Domain\Category\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Product\Services\ProductService;
use App\Http\Product\Requests\ProductBySlugRequest;
use App\Http\Product\Requests\ProductFilterRequest;
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
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage() , __CLASS__ , __FUNCTION__);
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
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage() , __CLASS__ , __FUNCTION__);
        }
    }

    /**
     * @param ProductBySlugRequest $request
     * @return ProductResource|JsonResponse
     */
    public function getProduct(ProductBySlugRequest $request): ProductResource | JsonResponse
    {
        try {
            return $this->service->getProductBySlug($request->validated('slug'));
        } catch (Exception $exception) {
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage() , __CLASS__ , __FUNCTION__);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
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
