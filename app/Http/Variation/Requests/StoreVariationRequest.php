<?php

namespace App\Http\Variation\Requests;

use App\Support\Enums\ValidationRuleEnums;
use Illuminate\Foundation\Http\FormRequest;

class StoreVariationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
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
            'price' => ValidationRuleEnums::REQUIRED_NUMERIC->value,
            'variation_type_id' => ValidationRuleEnums::REQUIRED_INTEGER->value,
            'variation_type_value_id' => ValidationRuleEnums::REQUIRED_INTEGER->value,
            'product_id' => ValidationRuleEnums::REQUIRED_INTEGER->value,
            'store_id' => ValidationRuleEnums::REQUIRED_INTEGER->value,
            'parent_id' => ValidationRuleEnums::NULLABLE_INTEGER->value,
            'order' => ValidationRuleEnums::NULLABLE_INTEGER->value,
            'images' => 'nullable',
            'images.*' => 'mimes:jpg,webp|max:1024',
        ];
    }
}
