<?php

namespace App\Http\Product\Controllers;

use App\Domain\Product\Services\ProductService;
use App\Domain\Product\Models\Product;
use App\Http\Product\Requests\StoreProductRequest;
use App\Http\Product\Requests\UpdateProductRequest;
use App\Http\Product\Resources\ProductResource;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class ProductController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        try {
            $products = Product::with('media')->paginate(20, ['id', 'title', 'price', 'slug', 'description']);
            return ProductResource::collection($products);
        } catch (Exception $exception) {
            return $this->sendError($exception->getMessage(), 400);
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
    public function store(StoreProductRequest $request, ProductService $service)
    {
        try {
            DB::beginTransaction();
            $product = $service->store($request);
            DB::commit();
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
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return Response
     */
    public function update(UpdateProductRequest $request,  ProductService $service,  Product $product)
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
     * @param int $id
     * @return Response
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
