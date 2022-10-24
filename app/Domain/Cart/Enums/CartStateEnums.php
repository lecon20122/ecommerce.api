<?php

namespace App\Domain\Cart\Enums;

enum CartStateEnums: string
{
    case ACTIVE = 'active';
    case CHECKOUT = 'checkout';
    case COMPLETED = 'completed';
    case ABANDONED = 'abandoned';

    public static function getActivesStates(): array
    {
        return [self::ACTIVE->value, self::CHECKOUT->value];
    }
}
