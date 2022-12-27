<?php

namespace App\Support\Enums;

enum ValidationRuleEnums: string
{
    case REQUIRED_STRING_MAXED = 'required|string|max:255';
    case NULLABLE_STRING_MAXED = 'nullable|string|max:255';

    case REQUIRED_NUMERIC = 'required|numeric';
    case NULLABLE_NUMERIC = 'nullable|numeric';

    case REQUIRED_INTEGER = 'required|integer';
    case NULLABLE_INTEGER = 'nullable|integer';
}
