<?php

namespace App\Http\Product\Controllers;

use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\Variation;
use App\Http\Product\Resources\ProductResource;
use Application\Controllers\BaseController;
use Illuminate\Http\JsonResponse;
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
    public function index(): AnonymousResourceCollection
    {
        try {

            $products = DB::table('products')
                ->paginate(20);
            return ProductResource::collection($products);
        } catch (\Exception $exception) {
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
     * @param \Illuminate\Http\Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
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
     * @param \Illuminate\Http\Request $request
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

    public function productVariation(){
        try {
            $products = Product::with('variations')->paginate();
            return $this->okWithPaginate($products);
        } catch (\Exception $exception) {
            $this->sendError($exception->getMessage(), $exception->getCode());
        }
    }
}
