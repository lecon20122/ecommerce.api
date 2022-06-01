<?php

namespace App\Support\Observers;

use Illuminate\Support\Facades\Cache;

class BaseObserver
{
    protected $model;
    protected string $key;

    public function created($model)
    {
        Cache::forget($this->key);
    }
}
