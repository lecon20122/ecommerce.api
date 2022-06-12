<?php

namespace App\Http\Cart\Controllers;

use App\Domain\Cart\Models\Cart;
use App\Domain\Cart\Services\CartService;
use App\Http\Cart\Requests\StoreCartRequest;
use App\Http\Cart\Requests\UpdateCartRequest;
use App\Http\Cart\Resources\CartResource;
use App\Http\Controllers\Controller;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class CartController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
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
     * @param StoreCartRequest $request
     * @param CartService $service
     * @return JsonResponse | CartResource
     */
    public function store(StoreCartRequest $request, CartService $service)
    {
        try {
            DB::beginTransaction();
            $cart = $service->store($request);
            DB::commit();
            return new CartResource($cart);
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
    public function update(UpdateCartRequest $request, Cart $cart, CartService $service)
    {
        try {
            DB::beginTransaction();
            $service->update($request->validated(), $cart);
            DB::commit();
            return new CartResource($cart->refresh());
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
    public function destroy(Cart $cart, CartService $service)
    {
        try {
            DB::beginTransaction();
            $service->delete($cart);
            DB::commit();
            return $cart;
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->sendError($exception->getMessage(), 400);
        }
    }
}
