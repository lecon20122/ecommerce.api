<?php

namespace App\Http\Cart\Requests;

use App\Support\Enums\ValidationRuleEnums;
use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\ArrayShape;

class StoreCartRequest extends FormRequest
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
    #[ArrayShape(['variation_id' => "string", 'store_id' => "string", 'variation_parent_id' => "string", 'price' => "string"])] public function rules()
    {
        return [
            'variation_id' => ValidationRuleEnums::REQUIRED_INTEGER->value,
            'store_id' => ValidationRuleEnums::REQUIRED_INTEGER->value,
            'variation_parent_id' => ValidationRuleEnums::REQUIRED_INTEGER->value,
            'price' => 'required|numeric|between:1,999999',
        ];
    }
}
