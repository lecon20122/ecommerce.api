<?php

namespace App\Http\Product\Requests\Sell;

use App\Support\Enums\StateEnums;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class UpdateSellProduct extends FormRequest
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
            'title' => 'nullable|array',
            'title.en' => 'nullable|string|max:255',
            'title.ar' => 'nullable|string|max:255',
            'price' => 'nullable|numeric',
            'status' => ['nullable', Rule::in(StateEnums::DRAFT->value, StateEnums::ACTIVE->value)],
            'category_id' => 'nullable|integer',
            'unisex' => 'nullable|boolean',
        ];
    }
}
