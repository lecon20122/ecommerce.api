<?php

namespace App\Http\Product\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
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
            'ar' => 'nullable|string|max:256',
            'en' => 'nullable|string|max:256',
            'images' => 'nullable',
            'images.*' => 'nullable|mimes:jpg|max:1024',
            'description' => 'nullable',
            'price' => 'nullable|integer',
        ];
    }
}
