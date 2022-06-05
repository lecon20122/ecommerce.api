<?php

namespace App\Domain\Store\Models;

use App\Domain\Location\Models\Address;
use Domain\User\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{

    use HasFactory;

    protected $guarded = [];

    public function addresses()
    {
        return $this->morphMany(Address::class, 'addressable');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
