<?php

namespace App\Domain\Product\Models;

use App\Domain\Cart\Models\Cart;
use App\Domain\Inventory\Models\Stock;
use App\Domain\Variation\Models\VariationType;
use App\Domain\Variation\Models\VariationTypeValue;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Traits\CustomHasMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Image\Exceptions\InvalidManipulation;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Translatable\HasTranslations;

class Variation extends Model implements HasMedia
{
    use HasFactory, CustomHasMedia, SoftDeletes, HasTranslations;

    public $translatable = ['title', 'type'];
    protected $fillable = ['title', 'price', 'type', 'order', 'product_id', 'parent_id', 'variation_type_value_id', 'variation_type_id'];

    /**
     * @throws InvalidManipulation
     */
    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion(MediaCollectionEnums::THUMB_CONVENTION)
            ->width(405)
            ->height(539)
            ->shouldBePerformedOn(MediaCollectionEnums::VARIATION);
        $this->addMediaConversion(MediaCollectionEnums::SMALL_CONVENTION)
            ->width(219)
            ->height(293)
            ->shouldBePerformedOn(MediaCollectionEnums::VARIATION);
        $this->addMediaConversion(MediaCollectionEnums::BIG_CONVENTION)
            ->width(600)
            ->height(799)
            ->shouldBePerformedOn(MediaCollectionEnums::VARIATION);
        $this->addMediaConversion(MediaCollectionEnums::ZOOM_CONVENTION)
            ->width(1340)
            ->height(1785)
            ->shouldBePerformedOn(MediaCollectionEnums::VARIATION);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection(MediaCollectionEnums::VARIATION)
            ->onlyKeepLatest(6);
    }


    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function stocks(): HasMany
    {
        return $this->hasMany(Stock::class);
    }

    public function carts(): HasMany
    {
        return $this->hasMany(Cart::class);
    }

    public function childrenRecursive(): HasMany
    {
        return $this->children()->with('childrenRecursive');
    }

    public function children(): HasMany
    {
        return $this->hasMany(Variation::class, 'parent_id');
    }

    public function scopeParent($query)
    {
        return $query->whereNull('parent_id');
    }

    public function variationType(): BelongsTo
    {
        return $this->belongsTo(VariationType::class);
    }

    public function variationTypeValue(): BelongsTo
    {
        return $this->belongsTo(VariationTypeValue::class);
    }


}
