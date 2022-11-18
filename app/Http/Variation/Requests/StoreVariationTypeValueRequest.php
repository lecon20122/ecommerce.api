<?php

namespace App\Http\Variation\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVariationTypeValueRequest extends FormRequest
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
            'ar' => 'required|string|max:256',
            'en' => 'required|string|max:256',
            'hex_value' => 'nullable|string|max:256|starts_with:#',
            'variation_type_id' => 'integer|required'
        ];
    }
}
