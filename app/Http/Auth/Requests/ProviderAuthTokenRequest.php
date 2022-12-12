<?php

namespace App\Http\Auth\Requests;

use App\Support\Enums\ValidationRuleEnums;
use Illuminate\Foundation\Http\FormRequest;

class ProviderAuthTokenRequest extends FormRequest
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
            'token' => ValidationRuleEnums::REQUIRED_STRING_MAXED->value,
            'provider' => ValidationRuleEnums::REQUIRED_STRING_MAXED->value,
        ];
    }
}
