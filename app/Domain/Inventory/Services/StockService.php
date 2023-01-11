<?php

namespace App\Domain\Inventory\Services;

use App\Domain\Variation\Models\Variation;
use Illuminate\Support\Facades\Auth;
use JetBrains\PhpStorm\NoReturn;

class StockService
{

    #[NoReturn] public function store(array $data)
    {
        $variation = Variation::query()->find($data['variation_id']);

        $isAdmin = Auth::guard('admin')->check();
        $isOwner = $isAdmin ? false : auth()->user()->isOwner($variation->store_id);

        if (!$isAdmin && !$isOwner) abort(403);

        if ($variation) {
            if ($this->isStockable($variation)) {
                $variation?->stocks()->create($data);
            }
        } else {
            abort(404);
        }
    }

    public function isStockable(Variation $variation): bool
    {
        if ($variation->is_stockable) {
            return true;
        } else {
            return false;
        }
    }

    public function subtractStock(array $data)
    {
        $variation = Variation::query()->find($data['variation_id']);

        $isAdmin = Auth::guard('admin')->check();
        $isOwner = $isAdmin ? false : auth()->user()->isOwner($variation->store_id);

        if (!$isAdmin && !$isOwner) abort(403);

        if ($variation) {
            if ($this->isStockable($variation)) {
                $data['amount'] = 0 - $data['amount'];
                $variation?->stocks()->create($data);

            }
        } else {
            abort(404);
        }
    }
}
