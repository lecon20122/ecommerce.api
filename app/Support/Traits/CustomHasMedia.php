<?php

namespace App\Support\Traits;


use Spatie\MediaLibrary\InteractsWithMedia;

trait CustomHasMedia
{
    use InteractsWithMedia;


    public function morphOneMedia()
    {
        return $this->morphOne(config('media-library.media_model'), 'model')->orderBy('order_column');
    }

    public function morphManyMedia()
    {
        return $this->morphMany(config('media-library.media_model'), 'model')->orderBy('order_column');
    }

    public function getManyMediaByCollectionName($collectionName)
    {
        return $this->morphMany(config('media-library.media_model'), 'model')
            ->where('collection_name', $collectionName)
            ->orderBy('order_column');
    }

    public function getMediaByCollectionAndConvention($collectionName)
    {
        return $this->morphOne(config('media-library.media_model'), 'model')
            ->where('collection_name', $collectionName)
            ->orderBy('order_column');
    }

    public function getMediaByCollectionAndConventionNonOrdered($collectionName)
    {
        return $this->morphOne(config('media-library.media_model'), 'model')
            ->where('collection_name', $collectionName);
    }
}
