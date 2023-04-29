<?php

namespace App\Http\Product\Requests\Sell;

use App\Rules\Boolean;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreSellProductRequest extends FormRequest
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
            'status' => 'nullable',
            'title' => 'required|array',
            'title.ar' => 'required|string|max:255',
            'title.en' => 'required|string|max:255',
            'price' => 'required|numeric|min:0,max:1000000',
            'category_id' => 'required|numeric',
            'unisex' => ['nullable', new Boolean],
            'variations' => 'required|array',
            'variations.*.color_id' => 'required|integer',
            'variations.*.sizes' => 'required|array',
            'variations.*.sizes.*' => 'required|integer',
            'variations.*.images' => 'required|array',
            'variations.*.images.*' => [
                'mimes:jpg,webp,png|max:3000',
                Rule::dimensions()
                    ->minWidth(600)
                    ->maxWidth(3000)
            ],
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Title is required',
            'title.ar.required' => 'Arabic title is required',
            'title.en.required' => 'English title is required',
            'title.ar.max' => 'Arabic title must be less than 255 characters',
            'title.en.max' => 'English title must be less than 255 characters',

            'variations.required' => 'Variations are required',
            'variations.array' => 'Variations must be an array',
            'variations.*.color_id.required' => 'Color id is required',
            'variations.*.color_id.integer' => 'Color id must be an integer',
            'variations.*.sizes.required' => 'Sizes are required',
            'variations.*.sizes.array' => 'Sizes must be an array',
            'variations.*.sizes.*.required' => 'Size is required',
            'variations.*.sizes.*.integer' => 'Size id must be an integer',
            'variations.*.images.required' => 'Images are required',
            'variations.*.images.array' => 'Images must be an array',
            'variations.*.images.*.mimes' => 'Image must be jpg, webp or png',
            'variations.*.images.*.max' => 'Image must be less than 3MB',
            'variations.*.images.*.dimensions' => 'Image must be between 600x600 and 3000x3000 pixels',

            'price.required' => 'Price is required',
            'price.numeric' => 'Price must be a number',
            'price.min' => 'Price must be greater than 0',
            'price.max' => 'Price must be less than 1000000',

            'category_id.required' => 'Category is required',
            'category_id.numeric' => 'Category must be a number',

            'unisex.required' => 'Unisex is required',
            'unisex.boolean' => 'Unisex must be a boolean',
        ];
    }
}
