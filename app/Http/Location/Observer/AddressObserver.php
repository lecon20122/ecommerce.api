<?php

namespace App\Http\Location\Observer;

use App\Domain\Location\Models\Address;
use Domain\User\Models\User;

class AddressObserver
{
    public function creating(Address $address)
    {
        $address->user_id = auth('web')->user()->getAuthIdentifier();
    }
}
