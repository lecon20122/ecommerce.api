<?php

namespace App\Domain\Variation\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use Spatie\Translatable\HasTranslations;

class VariationType extends Model
{
    use HasFactory, HasTranslations, SoftDeletes;

    public $translatable = ['type'];
    protected $fillable = ['type', 'is_mediable', 'is_stockable'];
    protected $casts = [
        'is_mediable' => 'boolean',
        'is_stockable' => 'boolean'
    ];

    public function variations(): HasMany
    {
        return $this->hasMany(Variation::class);
    }

    public function variationTypeValues(): HasMany
    {
        return $this->hasMany(VariationTypeValue::class);
    }
}
