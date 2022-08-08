<?php

namespace App\Support\Traits;

use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Spatie\MediaLibrary\InteractsWithMedia;

trait CustomHasMedia
{
    use InteractsWithMedia;

    /**
     * @return MorphOne
     */
    public function morphOneMedia()
    {
        return $this->morphOne(config('media-library.media_model'), 'model')->orderBy('order_column')->take(1);
    }

    /**
     * @return MorphMany
     */
    public function morphManyMedia(): MorphMany
    {
        return $this->morphMany(config('media-library.media_model'), 'model')->orderBy('order_column');
    }
}