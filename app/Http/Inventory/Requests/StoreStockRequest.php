<?php

namespace App\Http\Inventory\Requests;

use App\Support\Enums\ValidationRuleEnums;
use Illuminate\Foundation\Http\FormRequest;

class StoreStockRequest extends FormRequest
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
            'variation_id' => ValidationRuleEnums::REQUIRED_INTEGER->value,
            'amount' => ValidationRuleEnums::REQUIRED_INTEGER->value,
        ];
    }
}
