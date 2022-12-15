<?php

namespace App\Http\Cart\Controllers;

use App\Domain\Cart\Contracts\CartInterface;
use App\Domain\Cart\Models\Cart;
use App\Domain\Cart\Services\CartActions;
use App\Domain\Cart\Services\CartService;
use App\Domain\Variation\Models\Variation;
use App\Http\Cart\Requests\StoreCartRequest;
use App\Http\Cart\Requests\UpdateCartItemQuantityRequest;
use App\Http\Cart\Requests\UpdateCartRequest;
use App\Http\Cart\Resources\CartResource;
use App\Support\Requests\ModelIDsRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
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
     * @param CartActions $cartActions
     */
    public function __construct(protected CartInterface $cartService, protected CartActions $cartActions)
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

    public function addToCart(StoreCartRequest $request): JsonResponse
    {
        try {
            DB::beginTransaction();
            $result = $this->cartService->addItem($request->validated('variation_id'), $request->validated('price'), quantity: 1);
            DB::commit();
            return $result;
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->logErrorsAndReturnJsonMessage($exception->getMessage(), __CLASS__, __FUNCTION__);
        }
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
