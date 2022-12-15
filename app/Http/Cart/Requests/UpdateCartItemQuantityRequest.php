<?php

namespace App\Http\Cart\Requests;

use App\Support\Enums\ValidationRuleEnums;
use Illuminate\Foundation\Http\FormRequest;

class UpdateCartItemQuantityRequest extends FormRequest
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
            'id' => ValidationRuleEnums::REQUIRED_INTEGER->value,
            'quantity' => ValidationRuleEnums::REQUIRED_INTEGER->value,
        ];
    }
}
