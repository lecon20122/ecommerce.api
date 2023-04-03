<?php

namespace App\Domain\Product\Models;

use App\Domain\Category\Models\Category;
use App\Domain\Statistics\Models\View;
use App\Domain\Store\Models\Store;
use App\Domain\User\Models\Favorite;
use App\Domain\Variation\Models\Variation;
use App\Support\Enums\MediaCollectionEnums;
use Domain\User\Models\User;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Translatable\HasTranslations;

class Product extends Model
{
    use HasFactory, HasTranslations, SoftDeletes, Searchable;

    public $translatable = ['title'];
    protected $fillable = ['title', 'description', 'price', 'store_id'];

    public function variations(): HasMany
    {
        return $this->hasMany(Variation::class);
    }

    public function variation(): HasOne
    {
        return $this->hasOne(Variation::class);
    }

    public function description(): HasMany
    {
        return $this->hasMany(ProductDescription::class);
    }

    public function store(): BelongsTo
    {
        return $this->belongsTo(Store::class);
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class)
            ->using(CategoryProduct::class)
            ->withTimestamps();
    }

    public function attributes(): BelongsToMany
    {
        return $this->belongsToMany(ProductAttribute::class, 'product_description')
            ->withPivot('product_attribute_value_id')
            ->using(ProductDescription::class);
    }

    public function favorites(): BelongsToMany
    {
        return $this
            ->belongsToMany(User::class, 'favorites')
            ->using(Favorite::class);
    }

    public function views()
    {
        return $this->morphMany(View::class, 'viewable');
    }

    public function toSearchableArray(): array
    {
        $this->load(['variations' => fn($query) => $query->with(['variationType', 'variationTypeValue'])]);
        return [
            'slug' => $this->slug,
            'title' => $this->title,
            ...$this->pushVariationTypeValuesIntoVariationType($this->variations),
            'price' => $this->price,
            'category' => $this->load('categories')->categories->pluck('slug')->toArray(),
            'stores' => $this->load('store')->store->name,
            'created_at' => $this->created_at,
            'id' => $this->id,
        ];
    }

    public function pushVariationTypeValuesIntoVariationType($variations): array
    {
        $result = [];
        foreach ($variations as $variation) {
            $result[$variation->variationType?->type][] = $variation->variationTypeValue?->slug;
            $result[$variation->variationType?->type . '_' . 'ids'][] = $variation->variationTypeValue?->id;
        }
        return $result;
    }

    public function discounts(): HasMany
    {
        return $this->hasMany(ProductDiscount::class);
    }

    public function discount()
    {
        return $this->hasOne(ProductDiscount::class)->active()->latest();
    }

    protected function price(): Attribute
    {
        return Attribute::make(
            get: fn($value) => $value / 100,
            set: fn($value) => $value * 100,
        );
    }
}
