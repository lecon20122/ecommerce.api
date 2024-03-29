<?php

namespace Database\Factories\Domain\Setting\Models;

use App\Domain\Setting\Models\Setting;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class SettingFactory extends Factory
{
    protected $model = Setting::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'key' => 'logo',
            'value' => 'modaje'
        ];
    }
}
