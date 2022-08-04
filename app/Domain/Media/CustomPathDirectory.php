<?php

namespace App\Domain\Media;

use Illuminate\Support\Str;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\MediaLibrary\Support\PathGenerator\PathGenerator;

class CustomPathDirectory implements PathGenerator
{
    public function path($media)
    {
        return md5($media->id . config('app.key'));
    }
    public function collectionName($collectionName)
    {
        return $collectionName . '/';
    }
    public function getPath(Media $media): string
    {
        return 'images/' . $this->collectionName($media->collection_name) .  $this->path($media) . '/';
    }

    public function getPathForConversions(Media $media): string
    {
        return 'images/' . $this->collectionName($media->collection_name) . $this->path($media) . '/conversions/';
    }

    public function getPathForResponsiveImages(Media $media): string
    {
        return 'images/' .  $this->collectionName($media->collection_name) . $this->path($media) . '/responsive-images/';
    }
}
