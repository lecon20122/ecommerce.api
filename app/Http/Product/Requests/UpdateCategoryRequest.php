<?php

namespace App\Http\Product\Requests;

use App\Support\Enums\ValidationRuleEnums;
use Illuminate\Foundation\Http\FormRequest;

class UpdateCategoryRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'ar' => 'nullable|string',
            'en' => 'nullable|string',
            'order' => ValidationRuleEnums::NULLABLE_NUMERIC->value,
            'parent_id' => 'integer|numeric|nullable',
            'image_id' => 'nullable',
            'images' => 'nullable',
            'secondary_color' => 'string|nullable',
            'primary_color' => 'string|nullable',
            'images.*' => 'mimes:jpg|max:1024',
            'opposite_category_id' => 'nullable|integer|exists:categories,id',
        ];
    }
}
