<?php

namespace App\Domain\Variation\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

class VariationTypeValue extends Model
{
    use HasFactory, HasTranslations, SoftDeletes;

    public $translatable = ['value'];
    protected $fillable = ['value', 'variation_type_id'];

    public function variationType(): BelongsTo
    {
        return $this->belongsTo(VariationType::class);
    }

    public function variations(): HasMany
    {
        return $this->hasMany(Variation::class);
    }
}
