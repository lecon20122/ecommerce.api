<?php

namespace App\Http\Product\Controllers;

use App\Domain\Product\Models\Product;
use App\Domain\Product\Services\ProductService;
use App\Http\Product\Requests\StoreProductRequest;
use App\Http\Product\Requests\UpdateProductRequest;
use App\Http\Product\Resources\ProductResource;
use App\Support\Services\Media\ImageService;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProductController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return RedirectResponse|\Inertia\Response
     */
    public function index()
    {
        try {
            return Inertia::render('Dashboard/products/index');
        } catch (Exception $exception) {
            return $this->webMessage($exception->getMessage());
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreProductRequest $request
     * @param ProductService $service
     * @return ProductResource
     */
    public function store(StoreProductRequest $request, ProductService $service, ImageService $imageService)
    {
        try {
            $product = $service->store($request, $imageService);
            return new ProductResource($product);
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->sendError($exception->getMessage(), 400);
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
        $product = Product::find($id)->with('media')->get();
        return $product;
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
     * @param UpdateProductRequest $request
     * @param ProductService $service
     * @param Product $product
     * @return JsonResponse|ProductResource
     */
    public function update(UpdateProductRequest $request, ProductService $service, Product $product)
    {
        try {
            DB::beginTransaction();
            $service->update($request->validated(), $product);
            DB::commit();
            return new ProductResource($product->refresh());
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->sendError($exception->getMessage(), 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param ProductService $service
     * @param Product $product
     * @return JsonResponse|Product
     */
    public function destroy(ProductService $service, Product $product)
    {
        try {
            DB::beginTransaction();
            $service->destroy($product);
            DB::commit();
            return $product;
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->sendError($exception->getMessage(), 400);
        }
    }
}
