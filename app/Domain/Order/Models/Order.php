<?php

namespace App\Domain\Order\Models;

use Domain\User\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'state',
        'notes',
        'total',
        'cost',
        'delivery_fees',
        'commission',
        'net',
        'store_id',
        'user_id',
        'address_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function variations()
    {
        //
    }
}
