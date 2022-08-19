<?php

namespace App\Http\Variation\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVariationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
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
            'ar' => 'required',
            'en' => 'required',
            'price' => 'required',
            'type' => 'required',
            'order' => 'nullable',
            'parent_id' => 'nullable',
            'product_id' => 'required',
        ];
    }
}
