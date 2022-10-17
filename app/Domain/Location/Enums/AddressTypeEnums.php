<?php

namespace App\Domain\Location\Enums;

enum AddressTypeEnums: string
{
    case SHIPPING = 'shipping';
    case HOME = 'home';
}
