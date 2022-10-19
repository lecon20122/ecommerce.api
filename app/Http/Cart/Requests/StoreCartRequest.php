<?php

namespace App\Http\Cart\Requests;

use App\Support\Enums\ValidationRuleEnums;
use Illuminate\Foundation\Http\FormRequest;

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
    public function rules()
    {
        return [
            'variation_id' => ValidationRuleEnums::REQUIRED_INTEGER->value,
            'quantity' => ValidationRuleEnums::REQUIRED_INTEGER->value,
            'price' => 'required|numeric|between:1,999999',
        ];
    }
}
