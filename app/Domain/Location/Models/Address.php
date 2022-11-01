<?php

namespace App\Domain\Location\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];
//    protected $fillable = [
//        'type',
//        'district_id',
//        'street',
//        'building',
//        'floor',
//        'apartment_number',
//        'nearby_landmark',
//        'addressable_type',
//        'addressable_id',
//    ];

    public function addressable()
    {
        return $this->morphTo();
    }
}
