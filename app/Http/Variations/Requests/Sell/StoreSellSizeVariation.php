<?php

namespace App\Http\Variations\Requests\Sell;

use Illuminate\Foundation\Http\FormRequest;

class StoreSellSizeVariation extends FormRequest
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
            'parent_id' => 'required|integer',
            "sizes" => 'array|nullable',
            'sizes.*.id' => 'required|integer',
            'sizes.*.stock_amount' => 'required|integer',
            'sizes.*.price' => 'nullable|numeric|min:0,max:1000000',
        ];
    }
}
