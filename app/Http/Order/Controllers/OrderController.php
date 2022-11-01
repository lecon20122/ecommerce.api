<?php

namespace App\Http\Order\Controllers;

use App\Domain\Cart\Contracts\CartInterface;
use App\Domain\Order\Services\OrderService;
use App\Domain\Shipping\Models\ShippingType;
use App\Http\Controllers\Controller;
use App\Http\Location\Resources\AddressResource;
use App\Http\Order\Requests\StoreOrderRequest;
use Application\Controllers\BaseController;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

class OrderController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @param CartInterface $cart
     * @return RedirectResponse|\Inertia\Response
     */
    public function index(CartInterface $cart): \Inertia\Response|RedirectResponse
    {
        try {
            return Inertia::render('Client/Checkout',
                [
                    'user_addresses' => AddressResource::collection(auth('web')->user()?->load('addresses')->addresses),
                    'shippingTypes' => ShippingType::query()->get(['type', 'price', 'id']),
                    'items' => $cart->showCartItems(),
                    'cartSubTotal' => $cart->cartSubTotal(),
                ]
            );
        } catch (Exception $exception) {
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return RedirectResponse|\Inertia\Response
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    public function orderCompletedStatus(): \Inertia\Response|RedirectResponse
    {
        try {
            return Inertia::render('Client/Thankyou',
                [
                    'orderNumber' => session()->get('order_number'),
                ]);
        } catch (Exception $exception) {
            return $this->redirectBackWithMessage($exception->getMessage());
        }
    }

    /**
     * proceed to checkout.
     *
     * @param OrderService $service
     * @param StoreOrderRequest $request
     * @return RedirectResponse
     */
    public function checkout(OrderService $service, StoreOrderRequest $request): RedirectResponse
    {
        try {
            DB::beginTransaction();
            $orderNumber = $service->checkout($request->validated());
            DB::commit();
            return Redirect::route('client.complete.checkout')->with('order_number', $orderNumber);
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
