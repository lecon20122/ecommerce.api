<?php

namespace Database\Seeders;

use App\Domain\Product\Models\Product;
use App\Domain\Statistics\Models\View;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

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

        $yesterday = Carbon::yesterday(config('app-settings.timezone'));

        echo "Start Date: {$yesterday->format('Y-m-d H:i:s')}\n";
        echo "timezone :" . config('app-settings.timezone') . "\n";
        echo "time now" . now()->format('Y-m-d H:i:s') . "\n";
        
        foreach ($approvedActiveProducts as $product) {

            View::factory(rand(100, 500))->create([
                'viewable_id' => $product->id,
                'viewable_type' => Product::class,
                'created_at' => $yesterday->midDay(),
            ]);
        }
    }
}
