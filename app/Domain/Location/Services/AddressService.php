<?php

namespace App\Domain\Location\Services;

use App\Domain\Location\Enums\AddressTypeEnums;
use App\Domain\Store\Models\Store;
use App\Http\Location\Resources\AddressResource;
use Exception;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Auth;

class AddressService
{

    public function getUserAddresses(): AnonymousResourceCollection
    {
        return AddressResource::collection(\auth('web')->user()->addresses()->get());
    }

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

    public function createAddress(array $data)
    {
        $user = auth('web')->user();
        $user->addresses()->create($data);
    }
}
