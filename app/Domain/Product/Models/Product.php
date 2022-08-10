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
use Spatie\Image\Exceptions\InvalidManipulation;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Translatable\HasTranslations;

class Product extends Model implements HasMedia
{
    use HasFactory, CustomHasMedia, HasTranslations;

    public $translatable = ['title'];
    protected $fillable = ['title', 'description', 'price', 'store_id'];

    /**
     * @throws InvalidManipulation
     */
    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb405x539')
            ->crop(Manipulations::CROP_BOTTOM, 405, 539)
            ->quality(80)
            ->withResponsiveImages()
            ->performOnCollections(MediaCollectionEnums::THUMBNAIL);
        $this->addMediaConversion('small50x50')
            ->fit(Manipulations::FIT_CROP, 50, 66);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection(MediaCollectionEnums::THUMBNAIL)
            ->singleFile()
            ->useFallbackUrl('https://empowher.org/wp-content/uploads/2021/03/image-placeholder-350x350-1.png');
        $this->addMediaCollection(MediaCollectionEnums::SMALL);
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
