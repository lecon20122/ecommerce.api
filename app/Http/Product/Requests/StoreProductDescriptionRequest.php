<?php

namespace App\Http\Product\Requests;

use App\Support\Enums\ValidationRuleEnums;
use Illuminate\Foundation\Http\FormRequest;

class StoreProductDescriptionRequest extends FormRequest
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
            'en' => ValidationRuleEnums::REQUIRED_STRING_MAXED->value,
            'ar' => ValidationRuleEnums::REQUIRED_STRING_MAXED->value,
            'product_id' => ValidationRuleEnums::REQUIRED_NUMERIC->value,
            'product_attribute_id' => ValidationRuleEnums::REQUIRED_NUMERIC->value,
        ];
    }
}
