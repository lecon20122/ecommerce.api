<?php

namespace App\Http\Media\Request;

use Illuminate\Foundation\Http\FormRequest;

class StoreMediaRequest extends FormRequest
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
            'collection_name' => 'string|nullable',
            'images' => 'required',
            'images.*' => 'mimes:jpg,webp,png|max:2048',
        ];
    }
}
