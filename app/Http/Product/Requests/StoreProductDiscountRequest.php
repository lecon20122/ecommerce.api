<?php

namespace App\Http\Product\Requests;

use App\Support\Enums\TypeEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreProductDiscountRequest extends FormRequest
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
            'value' => 'required|integer',
            'type' => ['required', 'string', Rule::in([TypeEnum::FIXED, TypeEnum::PERCENTAGE])],
            'start_at' => 'required|date',
            'end_at' => 'required|date|after:start_at',
            'is_active' => 'required|boolean',
            'product_id' => 'required|integer',
        ];
    }
}
