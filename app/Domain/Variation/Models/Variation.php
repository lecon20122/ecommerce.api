<?php

namespace App\Domain\Variation\Models;

use App\Domain\Cart\Models\Cart;
use App\Domain\Inventory\Models\Stock;
use App\Domain\Order\Models\Order;
use App\Domain\Product\Models\Product;
use App\Domain\Store\Models\Store;
use App\Support\Enums\MediaCollectionEnums;
use App\Support\Traits\CustomHasMedia;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Spatie\Image\Exceptions\InvalidManipulation;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Translatable\HasTranslations;

class Variation extends Model implements HasMedia
{
    use HasFactory, CustomHasMedia, SoftDeletes, HasTranslations;

    public array $translatable = ['title', 'type'];
    protected $touches = ['product'];
    protected $fillable = [
        'title',
        'price',
        'store_id',
        'order',
        'product_id',
        'parent_id',
        'variation_type_value_id',
        'variation_type_id',
        'is_stockable',
        'stock_count'
    ];

    protected $casts = ['is_stockable' => 'boolean'];

    /**
     * @throws InvalidManipulation
     */


    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion(MediaCollectionEnums::THUMB_CONVENTION)
            ->format(Manipulations::FORMAT_WEBP)
            ->optimize()
            ->fit(Manipulations::FIT_CONTAIN, 320, 320)
            ->performOnCollections(MediaCollectionEnums::VARIATION);

        $this->addMediaConversion(MediaCollectionEnums::BIG_CONVENTION)
            ->format(Manipulations::FORMAT_WEBP)
            ->optimize()
            ->width(1340)
            ->performOnCollections(MediaCollectionEnums::VARIATION);

        $this->addMediaConversion(MediaCollectionEnums::VARIATION_COLOR_CONVENTION)
            ->format(Manipulations::FORMAT_WEBP)
            ->performOnCollections(MediaCollectionEnums::VARIATION_COLOR);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection(MediaCollectionEnums::VARIATION)
            ->onlyKeepLatest(6);

        $this->addMediaCollection(MediaCollectionEnums::VARIATION_COLOR)
            ->singleFile();
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function stocks(): HasMany
    {
        return $this->hasMany(Stock::class);
    }

    public function carts(): BelongsToMany
    {
        return $this->belongsToMany(Cart::class)->withPivot(['quantity', 'price', 'total']);
    }

    public function parent(): BelongsTo
    {
        return $this->belongsTo(Variation::class, 'parent_id');
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

    public function sizeDescriptionValues(): HasMany
    {
        return $this->hasMany(SizeDescriptionValue::class);
    }

    public function variationTypeValue(): BelongsTo
    {
        return $this->belongsTo(VariationTypeValue::class);
    }

    public function VariationColor(): MorphOne
    {
        return $this->getMediaByCollectionAndConvention(MediaCollectionEnums::VARIATION_COLOR);
    }

    public function VariationImages(): MorphMany
    {
        return $this->getManyMediaByCollectionName(MediaCollectionEnums::VARIATION);
    }

    public function StockCount()
    {
        return DB::table('stocks')
            ->selectRaw('sum(amount) as count')
            ->where('variation_id', '=', $this->id)
            ->first()
            ->count;
    }

    public function orders(): BelongsToMany
    {
        return $this
            ->belongsToMany(Order::class, 'order_variation')
            ->withPivot('quantity', 'price', 'store_id', 'pickup_address_id');
    }

    public function store(): BelongsTo
    {
        return $this->belongsTo(Store::class);
    }

    public function variationSmallImage(): Model|MorphOne|null
    {
        return $this->getMediaByCollectionAndConvention(MediaCollectionEnums::VARIATION);
    }

    protected function price(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $value / 100,
            set: fn ($value) => $value * 100,
        );
    }

    public function scopeColor(Builder $query): Builder
    {
        return $query->whereHas('variationType', fn ($query) => $query->whereRaw("JSON_EXTRACT(type, '$.en') = 'color'"));
    }

    public function scopeSize(Builder $query): Builder
    {
        return $query->whereHas('variationType', fn ($query) => $query->whereRaw("JSON_EXTRACT(type, '$.en') = 'size'"));
    }

    public function mainImage()
    {
        return $this->getMediaByCollectionAndConventionNonOrdered(MediaCollectionEnums::VARIATION)->orderByDesc('created_at');
    }
}
