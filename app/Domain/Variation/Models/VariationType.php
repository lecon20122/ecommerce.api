<?php

namespace App\Domain\Variation\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

class VariationType extends Model
{
    use HasFactory, HasTranslations, SoftDeletes;

    public $translatable = ['type'];
    protected $fillable = ['type', 'is_mediable'];
    protected $casts = ['is_mediable' => 'boolean'];

    public function variations(): HasMany
    {
        return $this->hasMany(Variation::class);
    }

    public function hasVariationTypeValue($variationTypeId): bool
    {
        return $this->variationTypeValues()
            ->where('variation_type_id', $variationTypeId)
            ->exists();
    }

    public function variationTypeValues(): HasMany
    {
        return $this->hasMany(VariationTypeValue::class);
    }

}
