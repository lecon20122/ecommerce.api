<?php

namespace App\Domain\Location\Enums;

enum AddressTypeEnums: string
{
    case SHIPPING = 'shipping';
    case PICKUP = 'pickup';
    case HOME = 'home';
    case OFFICE = 'office';
}
