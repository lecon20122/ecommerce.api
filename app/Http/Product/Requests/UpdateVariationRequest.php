<?php

namespace App\Http\Product\Requests;

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
            'title' => 'nullable',
            'price' => 'nullable',
            'type' => 'nullable',
            'order' => 'nullable',
            'product_id' => 'nullable',
        ];
    }
}
