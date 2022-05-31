<?php

namespace App\Support\Observers;

use Illuminate\Support\Facades\Cache;

class BaseObserver
{
    protected $model, $key;
    public function created($model)
    {
        Cache::forget($this->key);
    }
}
