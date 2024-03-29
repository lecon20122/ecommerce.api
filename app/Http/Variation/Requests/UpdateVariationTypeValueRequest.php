<?php

namespace App\Http\Variation\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateVariationTypeValueRequest extends FormRequest
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
            'ar' => 'nullable|string|max:256',
            'en' => 'nullable|string|max:256',
            'hex_value' => 'nullable|string|max:256',
            'slug ' => 'nullable|string|max:256',
            'variation_type_id' => 'integer|nullable'
        ];
    }
}
