<?php

namespace App\Http\Product\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductFilterRequest extends FormRequest
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
            'color' => 'nullable|array',
            'color.*' => 'string',
            'size' => 'nullable|array',
            'size.*' => 'string',
            'style' => 'nullable|array',
            'style.*' => 'string',
            'stores' => 'nullable|array',
            'stores.*' => 'string',
            'price' => 'nullable|integer'
        ];
    }
}
