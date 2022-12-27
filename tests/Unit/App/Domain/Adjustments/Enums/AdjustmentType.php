<?php

namespace App\Domain\Adjustments\Enums;

enum AdjustmentType : string
{
    case PROMOTION = 'promotion';
    case SHIPPING = 'shipping';
    case TAX = 'tax';
    case MISC = 'misc';
}
