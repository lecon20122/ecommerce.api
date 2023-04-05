<?php

namespace App\Http\Media\Requests\Sell;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreSellMediaRequest extends FormRequest
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
            'color_id' => 'required|numeric',
            'images' => 'required|array',
            'images.*' => [
                'mimes:jpg,webp,png|max:3000',
                Rule::dimensions()
                    ->minWidth(600)
                    ->maxWidth(3000)
            ],
        ];
    }
}
