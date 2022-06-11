<?php

namespace Support\Traits;

use Illuminate\Support\Str;

trait HasSlug
{
    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }
}
