<?php

namespace Database\Seeders;

use App\Domain\Product\Models\Product;
use App\Domain\Statistics\Models\View;
use App\Support\Enums\StateEnums;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class ViewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $approvedActiveProducts = Product::all(['id']);

        foreach ($approvedActiveProducts as $product) {
            View::factory(rand(100, 500))->create([
                'viewable_id' => $product->id,
                'viewable_type' => Product::class,
            ]);
        }
    }
}
