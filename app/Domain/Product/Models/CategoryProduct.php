<?php

namespace App\Domain\Product\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class CategoryProduct extends Pivot
{
    protected $table = 'category_product';

    public $timestamps = null;


}
