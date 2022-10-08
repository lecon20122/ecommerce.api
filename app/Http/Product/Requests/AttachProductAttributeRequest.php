<?php

namespace App\Http\Product\Requests;

use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\ArrayShape;

class AttachProductAttributeRequest extends FormRequest
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
    #[ArrayShape(['product_id' => "string", 'product_attribute_value_id' => "string"])] public function rules(): array
    {
        return [
            'product_id' => 'required|integer',
            'product_attribute_value_id' => 'required|integer',
        ];
    }
}
