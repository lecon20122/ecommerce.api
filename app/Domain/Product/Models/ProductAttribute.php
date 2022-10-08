<?php

namespace App\Domain\Product\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Spatie\Translatable\HasTranslations;

class ProductAttribute extends Model
{
    use HasFactory, HasTranslations;

    protected $table = 'product_attributes';
    public $translatable = ['attribute'];
    protected $fillable = ['attribute', 'is_filterable'];

    protected $casts = [
        'is_filterable' => 'boolean',
    ];

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class , 'product_description')
            ->withPivot('product_attribute_value_id')
            ->using(ProductDescription::class);
    }
}
