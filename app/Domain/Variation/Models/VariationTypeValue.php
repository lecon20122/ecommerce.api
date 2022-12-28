<?php

namespace App\Domain\Variation\Models;

use App\Support\Enums\MediaCollectionEnums;
use App\Support\Traits\CustomHasMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use Spatie\Image\Exceptions\InvalidManipulation;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Translatable\HasTranslations;

class VariationTypeValue extends Model implements HasMedia
{
    use HasFactory, HasTranslations, SoftDeletes, CustomHasMedia;

    public $translatable = ['value'];
    protected $fillable = ['value', 'variation_type_id', 'slug', 'hex_value'];

    /**
     * @throws InvalidManipulation
     */
    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion(MediaCollectionEnums::VARIATION_COLOR_CONVENTION)
            ->format(Manipulations::FORMAT_WEBP)
            ->width(100)
            ->height(100)
            ->performOnCollections(MediaCollectionEnums::VARIATION_COLOR);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection(MediaCollectionEnums::VARIATION_COLOR)
            ->singleFile();
    }

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            $model->slug = Str::slug($model->value);
        });
        static::updating(function ($model) {
            $model->slug = Str::slug($model->value);
        });
    }

    public function variationType(): BelongsTo
    {
        return $this->belongsTo(VariationType::class);
    }

    public function variations(): HasMany
    {
        return $this->hasMany(Variation::class);
    }

    public function colorImage(): MorphOne
    {
        return $this->getMediaByCollectionAndConvention(MediaCollectionEnums::VARIATION_COLOR);
    }
}
