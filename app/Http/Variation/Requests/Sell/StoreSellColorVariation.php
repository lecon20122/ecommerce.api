<?php

namespace App\Http\Variation\Requests\Sell;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreSellColorVariation extends FormRequest
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
            'product_id' => 'required|integer',
            'color_id' => 'required|integer',
            "sizes" => 'array|nullable',
            'images' => 'required|array',
            'images.*' => [
                'mimes:jpg,webp,png|max:2048',
                Rule::dimensions()
                    ->minWidth(600)
                    ->maxWidth(2000)
            ],
        ];
    }
}
