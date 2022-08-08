<?php

namespace App\Domain\Media;

use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\MediaLibrary\Support\PathGenerator\PathGenerator;

class CustomPathDirectory implements PathGenerator
{
    public function getPath(Media $media): string
    {
        return $this->folderStructure($media);
    }

    public function folderStructure($media): string
    {
        return 'images/' . $this->path($media) . '/';
    }

    public function path($media): string
    {
        return md5($media->id . config('app.key'));
    }

    public function getPathForConversions(Media $media): string
    {
        return $this->folderStructure($media) . 'conversions/';
    }

    public function getPathForResponsiveImages(Media $media): string
    {
        return $this->folderStructure($media) . 'responsive-images/';
    }
}
