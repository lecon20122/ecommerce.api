<?php

namespace App\Domain\Variation\Models;

use App\Domain\Product\Models\Variation;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Translatable\HasTranslations;

class VariationType extends Model
{
    use HasFactory, HasTranslations;

    public $translatable = ['type'];
    protected $casts = ['is_mediable' => 'boolean'];

    public function variationTypeValues(): HasMany
    {
        return $this->hasMany(VariationTypeValue::class);
    }

    public function variations(): HasMany
    {
        return $this->hasMany(Variation::class);
    }

}
