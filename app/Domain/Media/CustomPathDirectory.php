<?php

namespace App\Domain\Media;

use Illuminate\Support\Str;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\MediaLibrary\Support\PathGenerator\PathGenerator;

class CustomPathDirectory implements PathGenerator
{

    public function getPath(Media $media): string
    {
        return 'images/' . md5($media->id . config('app.key')) . '/';
    }

    public function getPathForConversions(Media $media): string
    {
        return 'images/' . md5($media->id . config('app.key')) . '/';
    }

    public function getPathForResponsiveImages(Media $media): string
    {
        return 'images/' . md5($media->id . config('app.key')) . '/';
    }
}
