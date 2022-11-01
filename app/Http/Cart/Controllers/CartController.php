<?php

namespace App\Http\Cart\Controllers;

use App\Domain\Cart\Contracts\CartInterface;
use App\Domain\Cart\Models\Cart;
use App\Domain\Cart\Services\CartService;
use App\Domain\Variation\Models\Variation;
use App\Http\Cart\Requests\StoreCartRequest;
use App\Http\Cart\Requests\UpdateCartItemQuantityRequest;
use App\Http\Cart\Requests\UpdateCartRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

/**
 *
 */
class CartController extends BaseController
{
    /**
     * @param CartInterface $cartService
     */
    public function __construct(protected CartInterface $cartService)
    {
    }

    /**
     * Display a listing of the resource.
     *
     * @return RedirectResponse|\Inertia\Response
     */
    public function index(): \Inertia\Response|RedirectResponse
    {
        try {
            return Inertia::render('Client/Cart', [
                'items' => $this->cartService->showCartItems(),
                'cartSubTotal' => $this->cartService->cartSubTotal(),
            ]);
        } catch (Exception $exception) {
            return $this->redirectBackWithMessage($exception->getMessage());
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
     * @param StoreCartRequest $request
     * @param CartInterface $cartService
     * @return RedirectResponse
     */
    public function store(StoreCartRequest $request): RedirectResponse
    {
        try {
            DB::beginTransaction();
            $this->cartService->addItem($request->validated('variation_id'), $request->validated('price'));
            DB::commit();
            return $this->redirectBackWithMessage('item added to cart successfully');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithMessage($exception->getMessage());
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
     * @param Variation $variation
     * @return RedirectResponse
     */
    public function removeItem(Variation $variation): RedirectResponse
    {
        try {
            DB::beginTransaction();
            $this->cartService->removeItemFromCart($variation);
            DB::commit();
            return $this->redirectBackWithMessage('item removed from cart');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }

    /**
     * @param Variation $variation
     * @param UpdateCartItemQuantityRequest $request
     * @return RedirectResponse
     */
    public function updateItemQuantity(Variation $variation, UpdateCartItemQuantityRequest $request): RedirectResponse
    {
        try {
            DB::beginTransaction();
            $this->cartService->updateItemQuantity($variation, $request->validated('quantity'));
            DB::commit();
            return $this->redirectBackWithMessage('item quantity updated');
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }
}
