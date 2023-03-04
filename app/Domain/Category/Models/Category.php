<?php

namespace App\Domain\Category\Models;

use App\Domain\Product\Models\Product;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Traits\CustomHasMedia;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Image\Exceptions\InvalidManipulation;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Translatable\HasTranslations;

class Category extends Model implements HasMedia
{
    use HasFactory, HasTranslations, SoftDeletes, CustomHasMedia;

    public $translatable = ['title'];
    protected $fillable = ['title', 'slug', 'parent_id', 'primary_color', 'secondary_color', 'is_active','order'];
    protected $casts = ['is_active' => 'boolean'];

    /**
     * @throws InvalidManipulation
     */
    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion(MediaCollectionEnums::THUMB_CONVENTION)
            ->format(Manipulations::FORMAT_WEBP)
            ->width(198)
            ->height(198)
            ->performOnCollections(MediaCollectionEnums::THUMBNAIL);

        $this->addMediaConversion(MediaCollectionEnums::CATEGORY_MOBILE_BANNER_CONVENTION)
            ->format(Manipulations::FORMAT_WEBP)
            ->width(900)
            ->height(540)
            ->performOnCollections(MediaCollectionEnums::CATEGORY_MOBILE_BANNER);

        $this->addMediaConversion(MediaCollectionEnums::CATEGORY_BIG_BANNER_CONVENTION)
            ->format(Manipulations::FORMAT_WEBP)
            ->width(1920)
            ->height(900)
            ->performOnCollections(MediaCollectionEnums::CATEGORY_BIG_BANNER);

    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection(MediaCollectionEnums::THUMBNAIL)
            ->singleFile();
        $this->addMediaCollection(MediaCollectionEnums::CATEGORY_BIG_BANNER)
            ->onlyKeepLatest(3);
        $this->addMediaCollection(MediaCollectionEnums::CATEGORY_MOBILE_BANNER)
            ->onlyKeepLatest(3);
    }


    public function parent(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    /**
     * Dump all the parent's children recursively
     *
     * @return HasMany
     */
    public function childrenRecursive(): HasMany
    {
        return $this->children()->with('childrenRecursive');
    }

    public function children(): HasMany
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class);
    }

    public function scopeChildren(Builder $query): Builder
    {
        return $query->whereNotNull('parent_id');
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active','=' , true);
    }

    /**
     * @return MorphOne
     */
    public function thumbnail(): MorphOne
    {
        return $this->morphOneMedia()
            ->where('collection_name', '=', MediaCollectionEnums::THUMBNAIL);
    }

    /**
     * @return MorphMany
     */
    public function thumbnails()
    {
        return $this->morphManyMedia()->where('collection_name', MediaCollectionEnums::THUMBNAIL);
    }

    public function banners(): MorphMany
    {
        return $this->morphManyMedia()
            ->where('collection_name', MediaCollectionEnums::CATEGORY_BIG_BANNER);
    }

    public function mobileBanners(): MorphMany
    {
        return $this->morphManyMedia()
            ->where('collection_name', MediaCollectionEnums::CATEGORY_MOBILE_BANNER);
    }

    public function scopeParent($query)
    {
        return $query->whereNull('parent_id');
    }

    public function resolveRouteBinding($value, $field = null): Model|Builder|null
    {
        return $this
            ->with('children')
            ->where('slug', $value)->firstOrFail();
    }
}
