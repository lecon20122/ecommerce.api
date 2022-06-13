<?php

namespace App\Http\Product\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVariationRequest extends FormRequest
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
            'title' => 'required',
            'price' => 'required',
            'type' => 'required',
            'order' => 'required',
            'product_id' => 'required',
            'store_id' => 'required',
        ];
    }
}
