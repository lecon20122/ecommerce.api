<?php

namespace App\Http\Variation\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSizeDescriptionRequest extends FormRequest
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
            'name_en' => 'nullable|string',
            'name_ar' => 'nullable|string',
            'guide_en' => 'nullable|string',
            'guide_ar' => 'nullable|string',
        ];
    }
}
