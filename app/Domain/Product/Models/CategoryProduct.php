<?php

namespace App\Domain\Product\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;

class CategoryProduct extends Pivot
{
    protected $table = 'category_product';
    protected $touches = ['product'];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
