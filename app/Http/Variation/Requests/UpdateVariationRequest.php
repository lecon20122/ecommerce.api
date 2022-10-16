<?php

namespace App\Http\Variation\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateVariationRequest extends FormRequest
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
            'title' => 'nullable|string',
            'price' => 'nullable',
            'order' => 'nullable',
            'variation_type_id' => 'nullable',
            'variation_type_value_id' => 'nullable',
            'images' => 'nullable',
            'images.*' => 'mimes:jpg,webp|max:1024',
        ];
    }
}
