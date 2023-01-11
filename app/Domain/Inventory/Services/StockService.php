<?php

namespace App\Domain\Inventory\Services;

use App\Domain\Variation\Models\Variation;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use JetBrains\PhpStorm\NoReturn;

class StockService
{

    #[NoReturn] public function store(array $data)
    {
        $variation = $this->isStockable($data['variation_id']);

        $isAdmin = Auth::guard('admin')->check();
        $isOwner = $isAdmin ? false : auth()->user()->isOwner($variation->store_id);

        if (!$isAdmin && !$isOwner) abort(403);

        if ($variation){
            $variation?->stocks()->create($data);
        }
    }

    public function isStockable($variation_id): Builder|array|Collection|Model|null
    {
        $variation = Variation::query()->find($variation_id);
        if ($variation->is_stockable) {
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
