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
use Illuminate\Support\Str;
use Spatie\Image\Exceptions\InvalidManipulation;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Product extends Model implements HasMedia
{
    use HasFactory, CustomHasMedia;

    protected $fillable = ['title', 'description', 'price', 'store_id'];

    /**
     * @throws InvalidManipulation
     */
    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb370x370')
            ->fit(Manipulations::FIT_CROP, 370, 370)
            ->quality(80)
            ->withResponsiveImages()
            ->performOnCollections(MediaCollectionEnums::THUMBNAIL);
        $this->addMediaConversion('small50x50')
            ->fit(Manipulations::FIT_CROP, 50, 50);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection(MediaCollectionEnums::THUMBNAIL)
            ->singleFile();
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

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

}
