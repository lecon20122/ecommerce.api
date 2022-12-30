<?php

namespace App\Domain\Product\Services;

use App\Domain\Product\Models\ProductDescription;
use App\Http\Product\Resources\ProductDescriptionResource;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProductDescriptionService
{
    public function index(): AnonymousResourceCollection
    {
        return ProductDescriptionResource::collection(
            ProductDescription::query()
                ->with('productAttribute')
                ->select(['id', 'value', 'product_attribute_id', 'product_id'])->get()
        );
    }

    public function store(array $data)
    {
        if ($data['en'] || $data['ar']) {
            $data['value'] = [
                'en' => $data['en'],
                'ar' => $data['ar'],
            ];
        }
        ProductDescription::query()->create($data);
    }

    public function update(array $data, $id)
    {
        if (isset($data['en'])) {
            $data['value'] = [
                'en' => $data['en'],
            ];
        }

        if (isset($data['ar'])) {
            $data['value'] = [
                'ar' => $data['ar'],
            ];
        }

        ProductDescription::query()->find($id)->update($data);
    }

    public function delete($id)
    {
        ProductDescription::query()->find($id)->delete();
    }
}
