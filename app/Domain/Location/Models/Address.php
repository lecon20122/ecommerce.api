<?php

namespace App\Domain\Location\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;
    
    protected $guarded = [];

    public function addressable()
    {
        return $this->morphTo();
    }
}
