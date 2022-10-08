<?php

namespace App\Http\Product\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductAttributeRequest extends FormRequest
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
            'attribute' => 'required|string',
            'is_filterable' => 'boolean|required'
        ];
    }
}
