<?php

namespace App\Domain\Product\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Translatable\HasTranslations;

class ProductAttributeValue extends Model
{
    use HasFactory, HasTranslations;

    public $translatable = ['value'];
    protected $table = 'product_attribute_values';
    protected $fillable = ['value', 'product_attribute_id'];

    public function productDescription(): HasMany
    {
        return $this->hasMany(ProductDescription::class);
    }
}
