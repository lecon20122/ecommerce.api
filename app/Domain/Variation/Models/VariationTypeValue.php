<?php

namespace App\Domain\Variation\Models;

use App\Domain\Product\Models\Variation;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Translatable\HasTranslations;

class VariationTypeValue extends Model
{
    use HasFactory, HasTranslations;

    public $translatable = ['value'];

    public function variationType (): BelongsTo
    {
        return $this->belongsTo(VariationType::class);
    }

    public function variations(): HasMany
    {
        return $this->hasMany(Variation::class);
    }
}
