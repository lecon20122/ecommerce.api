<?php

namespace App\Domain\Location\Services;

use App\Domain\Location\Enums\AddressTypeEnums;
use App\Domain\Store\Models\Store;
use Exception;
use Illuminate\Support\Facades\Auth;

class AddressService
{
    /**
     * @throws Exception
     */
    public function checkAndReturnShippingAddressId($address_id)
    {
        return Auth::user()
                ->addresses()
                ->find($address_id)->id
            ?? throw new Exception('this shipping address id not belong to that user');
    }

    /**
     * @throws Exception
     */
    public function checkAndReturnPickupAddressId(Store $store, $address_id)
    {
        return $store
                ->addresses()
                ->find($address_id)->id
            ?? throw new Exception('this pickup address id not belong to that store');
    }

    public function getStorePickupAddressId($variation)
    {
        return $variation->store()
            ->first()
            ->addresses()
            ->where('type', AddressTypeEnums::PICKUP->value)
            ->first()?->id;
    }
}
