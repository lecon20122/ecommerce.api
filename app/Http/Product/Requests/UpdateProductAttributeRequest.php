<?php

namespace App\Http\Product\Requests;

use App\Support\Enums\ValidationRuleEnums;
use Illuminate\Foundation\Http\FormRequest;

class UpdateProductAttributeRequest extends FormRequest
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
            'en' => ValidationRuleEnums::NULLABLE_STRING_MAXED->value,
            'ar' => ValidationRuleEnums::NULLABLE_STRING_MAXED->value,
            'is_filterable' => 'boolean|nullable'
        ];
    }
}
