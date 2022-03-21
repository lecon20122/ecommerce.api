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
            'title' => 'required|string|max:256',
            'images' => 'required',
            'images.*' => 'mimes:jpeg,jpg,png|max:1024',
            'description' =>'required',
            'price' =>'required|numeric|integer',
        ];
    }
}
