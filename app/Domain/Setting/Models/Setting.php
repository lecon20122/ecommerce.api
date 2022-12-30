<?php

namespace App\Domain\Setting\Models;

use App\Support\Enums\MediaCollectionEnums;
use App\Support\Traits\CustomHasMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Spatie\Image\Exceptions\InvalidManipulation;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Setting extends Model implements HasMedia
{
    use HasFactory, CustomHasMedia;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    /**
     * @throws InvalidManipulation
     */
    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion(MediaCollectionEnums::LOGO_CONVERSION)
            ->format(Manipulations::FORMAT_WEBP)
            ->quality(100)
            ->performOnCollections(MediaCollectionEnums::LOGO);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection(MediaCollectionEnums::LOGO)
            ->singleFile();
    }

    public function logo(): MorphOne
    {
        return $this->getMediaByCollectionAndConvention(MediaCollectionEnums::LOGO);
    }
}
