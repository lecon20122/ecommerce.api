<?php

namespace App\Domain\Variation\Services\Sell;

use App\Domain\Product\Models\Product;
use App\Domain\Variation\Models\Variation;
use App\Domain\Variation\Models\VariationTypeValue;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Enums\TypeEnum;
use App\Support\Services\Media\ImageService;
use Illuminate\Database\Eloquent\Model;

class SellVariationService
{
    public function createColor(Product $product, $colorId, $price): Model
    {
        $colorValue = VariationTypeValue::query()->with('variationType:type,id')->find($colorId);

        if ($colorValue && $colorValue->variationType->type === TypeEnum::COLOR) {
            return $product->variations()->create([
                'is_stockable' => false,
                'variation_type_value_id' => $colorValue->id,
                'variation_type_id' => $colorValue->variationType->id,
                'store_id' => $product->store_id,
                'price' => $price,
                'title' => $colorValue->value,
            ]);
        } else {
            abort(404, 'Color not found!');
        }
    }

    public function createSize(Product $product, Model $parent, array $sizeAndStock, $price): Model
    {
        $sizeValue = VariationTypeValue::query()->with('variationType:type,id')->find($sizeAndStock['id']);

        if ($sizeValue && $sizeValue->variationType->type === TypeEnum::SIZE) {
            return $product->variations()->create([
                'is_stockable' => true,
                'variation_type_value_id' => $sizeValue->id,
                'variation_type_id' => $sizeValue->variationType->id,
                'store_id' => $product->store_id,
                'price' => $price,
                'title' => $sizeValue->value,
                'parent_id' => $parent->id,
            ]);
        } else {
            abort(404, 'Size not found!');
        }
    }

    public function createColorAndSizes(Product $product, $colorId, array $sizesAndStock, $price): void
    {
        $color = $this->createColor($product, $colorId, $price);
        (new ImageService())->addMultipleMediaFromRequest($color, 'images', MediaCollectionEnums::VARIATION, $color->id);
        foreach ($sizesAndStock as $sizeAndStock) {
            $this->createSize($product, $color, $sizeAndStock, $price);
        }
    }

    public function safeDelete(Variation $variation): void
    {
        $user = auth()->user();
        $store = $user->store()->approved()->first();
        if (!$store) abort(403, 'you are not allowed to view products yet!');
        if ($variation->store_id !== $store->id) abort(403, 'your store does not own this variation!');

        $variation->load('orders');

        if ($variation->orders) {
            $variation->delete();
        } else {
            $variation->forceDelete();
        }
    }
}
