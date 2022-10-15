<?php

namespace App\Support\Observers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class BaseObserver
{
    protected Model $model;
    protected string $key;

    public function created($model)
    {
        Cache::forget($this->key);
    }
}
