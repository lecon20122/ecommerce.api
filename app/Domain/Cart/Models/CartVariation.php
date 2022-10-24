<?php

namespace App\Domain\Cart\Models;

use Domain\User\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;

class CartVariation extends Pivot
{
    use HasFactory;

    protected $table = 'cart_variation';

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
