<?php

namespace App\Domain\Category\Models;

use App\Domain\Product\Models\Product;
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
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Translatable\HasTranslations;

class Category extends Model implements HasMedia
{
    use HasFactory, HasTranslations, SoftDeletes, CustomHasMedia;

    public $translatable = ['title'];
    protected $fillable = ['title', 'slug', 'parent_id'];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection(MediaCollectionEnums::THUMBNAIL);
    }

    /**
     * @throws InvalidManipulation
     */
    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb310x303')
            ->fit(Manipulations::FIT_CROP, 310, 303)
            ->performOnCollections(MediaCollectionEnums::THUMBNAIL);
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

    /**
     * @return MorphOne
     */
    public function thumbnail(): MorphOne
    {
        return $this->morphOneMedia()->where('collection_name', MediaCollectionEnums::THUMBNAIL);
    }

    public function scopeIsParent($query)
    {
        return $query->whereNull('parent_id');
    }
}
