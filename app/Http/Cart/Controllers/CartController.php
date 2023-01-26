<?php

namespace App\Http\Cart\Controllers;

use App\Domain\Cart\Models\Cart;
use App\Domain\Cart\Services\CartService;
use App\Http\Cart\Requests\StoreCartRequest;
use App\Http\Cart\Requests\UpdateCartItemQuantityRequest;
use App\Http\Cart\Requests\UpdateCartRequest;
use App\Support\Requests\ModelIDsRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

/**
 *
 */
class CartController extends BaseController
{
    /**
     * @param CartService $cartActions
     */
    public function __construct(protected CartService $cartActions)
    {
    }


    public function getItems(): JsonResponse|AnonymousResourceCollection
    {
        try {
            return $this->cartActions->getItems();
        } catch (Exception $exception) {
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
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
     * @param UpdateCartRequest $request
     * @param Cart $cart
     * @param CartService $service
     * @return void
     */
    public function update(UpdateCartRequest $request, Cart $cart, CartService $service)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Cart $cart
     * @param CartService $service
     * @return void
     */
    public function destroy(Cart $cart, CartService $service)
    {
        //
    }

    /**
     * @param ModelIDsRequest $request
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function removeItem(ModelIDsRequest $request): JsonResponse|AnonymousResourceCollection
    {
        try {
            DB::beginTransaction();
            $this->cartActions->remove($request->validated());
            DB::commit();
            return $this->cartActions->getItems();
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }

    public function updateCartItemQuantity(UpdateCartItemQuantityRequest $request): JsonResponse|AnonymousResourceCollection
    {
        try {
            DB::beginTransaction();
            $this->cartActions->updateCartItemQuantity($request->validated());
            DB::commit();
            return $this->cartActions->getItems();
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }

    public function add(StoreCartRequest $request): JsonResponse|AnonymousResourceCollection
    {
        try {
            DB::beginTransaction();
            $cart = $this->cartActions->add($request->validated());
            DB::commit();
            return $cart;
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
    }
}
