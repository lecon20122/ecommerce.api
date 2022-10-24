<?php

namespace App\Http\Variation\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSizeDescriptionValueRequest extends FormRequest
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
            'variation_id' => 'nullable|integer',
            'size_description_id' => 'nullable|integer',
            'value' => 'nullable|string',
        ];
    }
}