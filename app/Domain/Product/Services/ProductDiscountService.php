<?php

namespace App\Domain\Product\Services;

use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\ProductDiscount;
use App\Support\Enums\TypeEnum;
use Exception;
use Illuminate\Support\Arr;

class ProductDiscountService
{

    public function getDiscountedPrice(Product $product, int $price): int
    {
        $discount = $this->getActiveDiscountAmount($product);
        return $price - $discount;
    }

    public function getActiveDiscountAmount(Product $product): int
    {
        $discount = $this->getActiveDiscount($product);
        if ($discount) {
            return $discount->value;
        }
        return 0;
    }

    public function getActiveDiscount(Product $product): ?ProductDiscount
    {
        return $product->discounts()->active()->latest('id')->first();
    }

    public function getDiscountedPercentagePrice(Product $product, int $price): int
    {
        $discount = $this->getActiveDiscountAmount($product);
        return $price - ($price * $discount / 100);
    }

    /**
     * @throws Exception
     */
    public function updateOrCreate(array $data)
    {
        $product = Product::query()->find($data['product_id']);

        if (!$product) throw new Exception('Product not found');

        $user = auth()->user();

        if (!$user->isOwner($product->store_id)) {
            abort(403, 'You are not authorized to perform this action');
        }

        $discount = $this->getActiveDiscount($product);

        if ($discount) {
            $this->update(Arr::except($data, 'product_id'), $discount);
        } else {
            $product->discounts()->create($data);
        }
    }

    public function update(array $data, ProductDiscount $discount)
    {
        $discount->update($data);
    }

    public function validateIntegerIsPercentage(int $value)
    {
        if ($value > 100) {
            throw new Exception('Percentage value must be less than 100');
        }
    }

    public function calculateDiscountPrice(Product $product , int $price): int
    {
        $discount = $this->getActiveDiscount($product);
        if ($discount) {
            if ($discount->type === TypeEnum::PERCENTAGE) {
                return $this->getDiscountedPercentagePrice($product, $price);
            }
            return $this->getDiscountedPrice($product, $price);
        }
        return $price;
    }
}
