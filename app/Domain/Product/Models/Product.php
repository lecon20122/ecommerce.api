<?php

namespace App\Domain\Product\Models;

use App\Domain\Category\Models\Category;
use App\Domain\Store\Models\Store;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Spatie\Image\Exceptions\InvalidManipulation;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Product extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = ['title', 'description', 'price', 'store_id'];
    protected $with = ['media'];

    public function variations()
    {
        return $this->hasMany(Variation::class)->orderBy('order', 'asc')->groupBy('type');
    }

    public function store()
    {
        return $this->belongsTo(Store::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }
    /**
     * @throws InvalidManipulation
     */
    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb232x320')
            ->fit(Manipulations::FIT_CROP, 232, 320);

        $this->addMediaConversion('small38x50')
            ->fit(Manipulations::FIT_CROP, 38, 50);
    }
}
