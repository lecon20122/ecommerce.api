<?php

namespace App\Domain\Cart\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class CartVariation extends Pivot
{
    use HasFactory;

    protected $table = 'cart_variation';
}
