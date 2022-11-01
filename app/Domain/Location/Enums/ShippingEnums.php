<?php

namespace App\Domain\Location\Enums;

enum ShippingEnums: string
{
    // Address Type
    case HOME = 'Home';
    case OFFICE = 'Office';

    //ShippingTypesEnums
    case COD = 'Cash On Delivery';
}
