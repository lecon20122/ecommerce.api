<?php

namespace App\Domain\Product\Models;

use App\Support\Traits\HasVirtualFields;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Spatie\Translatable\HasTranslations;

class ProductDescription extends Model
{
    use HasFactory, HasTranslations;

    public $translatable = ['value'];
    protected $guarded = ['id'];
    protected $table = 'product_description';
    protected $primaryKey = "id";


    public function productAttribute(): BelongsTo
    {
        return $this->belongsTo(ProductAttribute::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
