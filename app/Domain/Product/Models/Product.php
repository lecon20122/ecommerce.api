<?php

namespace App\Domain\Product\Models;

use App\Domain\Category\Models\Category;
use App\Domain\Store\Models\Store;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Traits\CustomHasMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Image\Exceptions\InvalidManipulation;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Translatable\HasTranslations;

class Product extends Model implements HasMedia
{
    use HasFactory, CustomHasMedia, HasTranslations , SoftDeletes;

    public $translatable = ['title'];
    protected $fillable = ['title', 'description', 'price', 'store_id'];

    /**
     * @throws InvalidManipulation
     */
    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion(MediaCollectionEnums::THUMB_CONVENTION)
            ->width(405)
            ->height(539)
            ->shouldBePerformedOn(MediaCollectionEnums::PRODUCT);
        $this->addMediaConversion(MediaCollectionEnums::SMALL_CONVENTION)
            ->width(219)
            ->height(293)
            ->shouldBePerformedOn(MediaCollectionEnums::PRODUCT);
        $this->addMediaConversion(MediaCollectionEnums::BIG_CONVENTION)
            ->width(600)
            ->height(799)
            ->shouldBePerformedOn(MediaCollectionEnums::PRODUCT);
        $this->addMediaConversion(MediaCollectionEnums::ZOOM_CONVENTION)
            ->width(1340)
            ->height(1785)
            ->shouldBePerformedOn(MediaCollectionEnums::PRODUCT);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection(MediaCollectionEnums::PRODUCT)
            ->onlyKeepLatest(6);
    }

    /**
     * @return MorphOne
     */
    public function thumbnail(): MorphOne
    {
        return $this->morphOneMedia()->where('collection_name', MediaCollectionEnums::THUMBNAIL);
    }

    public function variations(): HasMany
    {
        return $this->hasMany(Variation::class)->orderBy('order', 'asc')->groupBy('type');
    }

    public function store(): BelongsTo
    {
        return $this->belongsTo(Store::class);
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }

}
