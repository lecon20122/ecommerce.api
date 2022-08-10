<?php

namespace App\Http\Product\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCategoryRequest extends FormRequest
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
            'ar' => 'nullable|string',
            'en' => 'nullable|string',
            'parent_id' => 'integer|numeric|nullable',
            'image_id' => 'nullable',
            'images' => 'nullable',
            'images.*' => 'mimes:jpg|max:1024',
        ];
    }
}
