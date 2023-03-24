<?php

// create enum class

namespace App\Support\Enums;

enum RolesEnum: string
{
    case SUPER_ADMIN = 'super-admin';
    case CUSTOMER_SERVICE = 'customer-service';
    case MARKETING = 'marketing';
}
