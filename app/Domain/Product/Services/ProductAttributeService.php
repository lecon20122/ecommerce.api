<?php

namespace App\Domain\Product\Services;

use App\Domain\Product\Models\ProductAttribute;
use App\Domain\Product\Models\ProductAttributeValue;
use Illuminate\Database\Eloquent\Collection;

class ProductAttributeService
{
    public function indexProductAttribute(): Collection|array
    {
        return ProductAttribute::query()->select(['id', 'attribute', 'is_filterable'])->get();
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

    public function storeProductAttributeValue(array $data)
    {
        ProductAttributeValue::query()->create($data);
    }

    public function updateProductAttributeValue(array $data, $id)
    {
        ProductAttributeValue::query()->find($id)->update($data);
    }

    public function attachAttributeToProduct(ProductAttribute $attribute, array $data)
    {
        $attribute->products()->syncWithoutDetaching([
            $data['product_id'] => ['product_attribute_value_id' => $data['product_attribute_value_id']]
        ]);
    }

    public function detachAttributeFromProduct(ProductAttribute $attribute, array $data)
    {
        $attribute->products()->detach($data['product_id']);
    }
}
