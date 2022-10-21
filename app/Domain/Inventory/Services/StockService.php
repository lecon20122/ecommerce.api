<?php

namespace App\Domain\Inventory\Services;

use App\Domain\Variation\Models\Variation;

class StockService
{

    public function store(array $data)
    {
        $variation = $this->isStockable($data['variation_id']);
        $variation?->stocks()->create($data);
    }

    public function isStockable($variation_id): Variation|null
    {
        if ($variation = Variation::query()->find($variation_id)->where('is_stockable', true)->first()) {
            return $variation;
        } else {
            return null;
        }
    }

    public function subtractStock(array $data)
    {
        $variation = $this->isStockable($data['variation_id']);
        $data['amount'] = 0 - $data['amount'];
        $variation?->stocks()->create($data);
    }
}
