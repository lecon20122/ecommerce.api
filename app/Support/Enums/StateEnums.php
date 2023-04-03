<?php

namespace App\Support\Enums;

enum StateEnums: string
{
    case PENDING = 'Pending';
    case PROCESSING = 'Processing';
    case COMPLETED = 'Completed';
    case SUCCESS = 'success';
    case ERROR = 'error';
    case ACTIVE = 'active';
    case DRAFT = 'draft';
}
