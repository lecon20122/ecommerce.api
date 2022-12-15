<?php

namespace App\Domain\Cart\Services;

use App\Domain\Cart\Models\Cart;
use App\Http\Cart\Resources\CartResource;
use Domain\User\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CartActions
{
    // cart db columns
    // variation_id , variation_parent_id ,  quantity , price , store_id

    /**
     * @param array $data
     * @return AnonymousResourceCollection|JsonResponse
     */
    public function add(array $data): JsonResponse|AnonymousResourceCollection
    {
        $user = auth()->user();
        $isItemAlreadyExists = $user->carts()->where('variation_id', '=', $data['variation_id'])->first();

        if ($isItemAlreadyExists) {
            // is there any custom quantity benign sent ?
            if ($isItemAlreadyExists->stockCount($data['variation_id']) > $isItemAlreadyExists->quantity) {
                $isItemAlreadyExists->quantity += 1;
                $isItemAlreadyExists->save();
            } else {
                return response()->json(['message' => 'sorry , just sold out'], 400);
            }
        } else {
            $user->carts()->create($data);
        }
        return $this->getItems();
    }

    /**
     * @return AnonymousResourceCollection
     */
    public function getItems(): AnonymousResourceCollection
    {
        /** @var User $user */
        $user = auth()->user();
        $carts = $user->carts()->with(
            [
                'variation' => function (BelongsTo $query) {
                    $query->with(['variationType', 'variationTypeValue'])
                        ->select(['id', 'title', 'variation_type_id', 'variation_type_value_id', 'price', 'stock_count']);
                },
                'parentVariation' => function (BelongsTo $query) {
                    $query->with(['variationSmallImage', 'variationType', 'variationTypeValue'])
                        ->select(['id', 'variation_type_id', 'variation_type_value_id', 'price', 'stock_count']);
                },
                'store' => function (BelongsTo $query) {
                    $query->select(['id', 'name']);
                },
            ]
        )->get();
        return CartResource::collection($carts);
    }

    public function remove(array $data)
    {
        auth()->user()->carts()->find($data['id'])->delete();
    }

    public function updateCartItemQuantity(array $data)
    {
        /** @var Cart $cartItem */
        $cartItem = auth()->user()->carts()->find($data['id']);

        $cartItemStockCount = $cartItem->StockCount($cartItem->variation_id);

        if ($cartItemStockCount > $data['quantity']) {
            $cartItem->quantity = $data['quantity'];
            $cartItem->save();
        } else {
            $cartItem->quantity = $cartItemStockCount;
            $cartItem->save();
        }
    }
}
