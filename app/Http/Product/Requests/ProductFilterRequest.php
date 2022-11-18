<?php

namespace App\Http\Product\Requests;

use App\Support\Enums\ValidationRuleEnums;
use Illuminate\Foundation\Http\FormRequest;

class ProductFilterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'category' => ValidationRuleEnums::NULLABLE_STRING_MAXED->value,
            'mainCategory' => ValidationRuleEnums::REQUIRED_STRING_MAXED->value,

            'size' => ValidationRuleEnums::NULLABLE_STRING_MAXED->value,
            'color' => ValidationRuleEnums::NULLABLE_STRING_MAXED->value,


            'style' => ValidationRuleEnums::NULLABLE_STRING_MAXED->value,

            'stores' => ValidationRuleEnums::NULLABLE_STRING_MAXED->value,

            'price' => ValidationRuleEnums::NULLABLE_STRING_MAXED->value,

            'sort' => ValidationRuleEnums::NULLABLE_STRING_MAXED->value,
        ];
    }
}
