<?php

namespace App\Http\Product\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
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
            'ar' => 'required|string|max:256',
            'en' => 'required|string|max:256',
            'images' => 'nullable',
            'images.*' => 'mimes:jpg|max:1024',
            'description' => 'required',
            'price' => 'required|numeric|integer',
            'store_id' => 'required',
        ];
    }
}
