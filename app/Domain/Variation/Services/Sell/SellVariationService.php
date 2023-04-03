<?php

namespace App\Domain\Variation\Services\Sell;

use App\Domain\Product\Models\Product;
use App\Domain\Variation\Models\Variation;
use App\Domain\Variation\Models\VariationTypeValue;
use App\Http\Variation\Resources\Sell\SellVariationResource;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Enums\TypeEnum;
use App\Support\Services\Media\ImageService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SellVariationService
{

    public function getColorVariationWithItsSizes(int $id)
    {
        $user = auth()->user();
        $store = $user->store()->approved()->first();
        if (!$store) abort(403, 'you are not allowed to view products yet!');

        $variation = Variation::query()->with(['media', 'children' => function (HasMany $query) {
            $query->with('media', 'variationTypeValue:id,value');
        }])->findOrFail($id);

        if ($variation->store_id !== $store->id) abort(403, 'your store does not own this variation!');

        return new SellVariationResource($variation);
    }

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

    public function createSize(Model $parent, array $sizeAndStock, $price): Model
    {
        $sizeValue = VariationTypeValue::query()->with('variationType:type,id')->find($sizeAndStock['id']);

        if ($sizeValue && $sizeValue->variationType->type === TypeEnum::SIZE) {
            return Variation::create([
                'is_stockable' => true,
                'variation_type_value_id' => $sizeValue->id,
                'variation_type_id' => $sizeValue->variationType->id,
                'store_id' => $parent->store_id,
                'price' => $price,
                'title' => $sizeValue->value,
                'parent_id' => $parent->id,
                'product_id' => $parent->product_id
            ]);
        } else {
            abort(404, 'Size not found!');
        }
    }

    public function createColorVariation($product_id, $color_id, $sizes)
    {
        $user = auth()->user();

        $store = $user->store()->approved()->first();

        if (!$store) abort(403, 'you are not allowed to view products yet!');

        $product = $store->products()->findOrFail($product_id);

        $this->createColorAndSizes($product, $color_id, $sizes, $product->price);
    }

    public function createColorAndSizes(Product $product, $colorId, array $sizesAndStock, $price): void
    {
        $color = $this->createColor($product, $colorId, $price);

        (new ImageService())->addMultipleMediaFromRequest($color, 'images', MediaCollectionEnums::VARIATION, $color->id);

        foreach ($sizesAndStock as $sizeAndStock) {
            $this->createSize($color, $sizeAndStock, $price);
        }
    }

    public function safeDelete(Variation $variation): void
    {
        $user = auth()->user();

        $store = $user->store()->approved()->first();

        if (!$store) abort(403, 'you are not allowed to view products yet!');

        if ($variation->store_id !== $store->id) abort(403, 'your store does not own this variation!');

        $variation->delete();
    }

    public function updatePrice(int $id, $price)
    {
        $variation = Variation::query()->with('children')->findOrFail($id);

        $variation->update([
            'price' => $price,
        ]);

        if ($variation->children) {
            $this->updateChildrenPrice($variation, $price);
        }
    }

    public function updateChildrenPrice(Variation $variation, $price)
    {
        foreach ($variation->children as $child) {
            $child->update([
                'price' => $price,
            ]);
        }
    }

    public function createSizeVariation(array $data)
    {
        $user = auth()->user();

        $store = $user->store()->approved()->first();

        if (!$store) abort(403, 'you are not allowed to view products yet!');

        $parentVariation = Variation::query()->where('store_id', $store->id)->findOrFail($data['parent_id']);

        foreach ($data['sizes'] as $sizeAndStock) {
            $this->createSize($parentVariation, $sizeAndStock, $sizeAndStock['price'] ?? $parentVariation->price);
        }
    }
}
