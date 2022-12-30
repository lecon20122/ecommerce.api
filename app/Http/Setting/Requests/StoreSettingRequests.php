<?php

namespace App\Http\Setting\Requests;

use App\Support\Enums\ValidationRuleEnums;
use Illuminate\Foundation\Http\FormRequest;

class StoreSettingRequests extends FormRequest
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
            'key' => ValidationRuleEnums::REQUIRED_STRING_MAXED->value,
            'value' => ValidationRuleEnums::REQUIRED_STRING_MAXED->value,
        ];
    }
}
