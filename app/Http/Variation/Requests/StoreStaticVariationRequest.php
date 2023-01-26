<?php

namespace App\Http\Variation\Requests;

use App\Support\Enums\ValidationRuleEnums;
use Illuminate\Foundation\Http\FormRequest;

class StoreStaticVariationRequest extends FormRequest
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
            'price' => ValidationRuleEnums::REQUIRED_NUMERIC->value,
            'product_id' => ValidationRuleEnums::REQUIRED_NUMERIC->value,
            'variation_type_value_id' => ValidationRuleEnums::REQUIRED_NUMERIC->value,
            'store_id' => ValidationRuleEnums::REQUIRED_NUMERIC->value,
            'parent_id' => ValidationRuleEnums::NULLABLE_NUMERIC->value,
            'order' => ValidationRuleEnums::NULLABLE_NUMERIC->value,
            'stock_amount' => ValidationRuleEnums::NULLABLE_NUMERIC->value,
            'images' => 'nullable',
            'images.*' => 'mimes:jpg,webp,png|max:2048',
        ];
    }
}
