<?php

namespace App\Http\Product\Requests;

use App\Support\Enums\ValidationRuleEnums;
use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'ar' => ValidationRuleEnums::NULLABLE_STRING_MAXED->value,
            'en' => ValidationRuleEnums::NULLABLE_STRING_MAXED->value,
            'price' => 'nullable|integer',
        ];
    }
}
