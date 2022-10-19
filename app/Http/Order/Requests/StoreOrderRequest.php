<?php

namespace App\Http\Order\Requests;

use App\Support\Enums\ValidationRuleEnums;
use Illuminate\Foundation\Http\FormRequest;

class StoreOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'notes' => ValidationRuleEnums::NULLABLE_STRING_MAXED->value,
            'shipping_address_id' => ValidationRuleEnums::REQUIRED_INTEGER->value,
            'shipping_type_id' => ValidationRuleEnums::REQUIRED_INTEGER->value,
        ];
    }
}
