<?php

namespace App\Http\Product\Requests;

use App\Domain\Variation\Models\VariationTypeValue;
use App\Support\Enums\ValidationRuleEnums;
use Illuminate\Foundation\Http\FormRequest;

class StoreProductMegaFormRequest extends FormRequest
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
            "en" => ValidationRuleEnums::REQUIRED_STRING_MAXED->value,
            "ar" => ValidationRuleEnums::REQUIRED_STRING_MAXED->value,
            "price" => ValidationRuleEnums::REQUIRED_INTEGER->value,
            "variation_type_value_id" => ValidationRuleEnums::REQUIRED_INTEGER->value,
            "sizes" => 'array|required',
//            "sizes.*.variation_type_value_id" => ValidationRuleEnums::REQUIRED_INTEGER->value,
//            "sizes.*.stock_amount" => ValidationRuleEnums::REQUIRED_INTEGER->value,
            "category_ids" => 'array|required',
            'category_ids.*' => ValidationRuleEnums::REQUIRED_NUMERIC->value,
            'images' => 'required',
            'images.*' => 'mimes:jpg,webp,png|max:2048',
        ];
    }
}
