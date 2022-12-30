<?php

namespace App\Domain\Product\Services;

use App\Domain\Product\Models\ProductAttribute;
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

    public function delete(ProductAttribute $productAttribute)
    {
        $productAttribute->delete();
    }
}
