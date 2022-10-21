<?php

namespace App\Http\Variation\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVariationTypeRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'ar' => 'required|string|max:256',
            'en' => 'required|string|max:256',
            'is_mediable' => 'required|boolean',
            'is_stockable' => 'required|boolean'
        ];
    }
}
