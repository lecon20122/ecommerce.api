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

        DB::table('products')->update(['status' => StateEnums::ACTIVE->value]);

        $approvedActiveProducts = Product::approved()->active()->get();

        foreach ($approvedActiveProducts as $product) {
            View::factory(1220)->create([
                'viewable_id' => $product->id,
                'viewable_type' => Product::class,
            ]);

            View::factory(120)->create([
                'viewable_id' => $product->id,
                'viewable_type' => Product::class,
                'created_at' => Carbon::now()->addDay(),
            ]);

            View::factory(120)->create([
                'viewable_id' => $product->id,
                'viewable_type' => Product::class,
                'created_at' => Carbon::now()->addDays(2),
            ]);
        }
    }
}
