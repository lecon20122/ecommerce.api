<?php

namespace App\Domain\Order\Models;

use App\Domain\Location\Models\Address;
use App\Domain\Store\Models\Store;
use App\Domain\Variation\Models\Variation;
use Domain\User\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'state',
        'notes',
        'total',
        'subtotal',
        'delivery_fees',
        'commission',
        'net',
        'store_id',
        'user_id',
        'address_id',
        'pickup_address_id',
        'shipping_address_id',
        'uuid',
        'placed_at',
        'packaged_at',
        'shipped_at',
        'shipping_type_id'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function variations(): BelongsToMany
    {
        return $this
            ->belongsToMany(Variation::class, 'order_variation')
            ->withPivot('quantity', 'price', 'store_id', 'pickup_address_id');
    }

    public function shippingAddress(): BelongsTo
    {
        return $this->belongsTo(Address::class, 'shipping_address_id');
    }

    public function store(): BelongsTo
    {
        return $this->belongsTo(Store::class);
    }

}
