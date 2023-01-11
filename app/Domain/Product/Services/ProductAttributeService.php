<?php

namespace App\Domain\Product\Services;

use App\Domain\Product\Models\ProductAttribute;
use App\Http\Product\Resources\ProductAttributeResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProductAttributeService
{
    public function indexProductAttribute(): AnonymousResourceCollection
    {
        return ProductAttributeResource::collection(ProductAttribute::query()->select(['id', 'attribute', 'is_filterable'])->get());
    }

    public function storeProductAttribute(array $data)
    {
        if ($data['en'] || $data['ar']) {
            $data['attribute'] = [
                'en' => $data['en'],
                'ar' => $data['ar'],
            ];
        }
        ProductAttribute::query()->create($data);
    }

    public function updateProductAttribute(array $data, $id)
    {
        if ($data['en'] || $data['ar']) {
            $data['attribute'] = [
                'en' => $data['en'],
                'ar' => $data['ar'],
            ];
        }
        ProductAttribute::query()->find($id)->update($data);
    }

    public function delete(ProductAttribute $productAttribute)
    {
        $productAttribute->delete();
    }
}
