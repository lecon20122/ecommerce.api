<?php

namespace Database\Seeders;

use App\Domain\Product\Models\Product;
use App\Domain\Statistics\Models\View;
use Illuminate\Database\Seeder;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Carbon;

class DatabaseSeeder extends Seeder
{

    use WithFaker;
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $product = Product::find(16);

        // View::factory(120)->create([
        //     'viewable_id' => $product->id,
        //     'viewable_type' => Product::class,
        //     'created_at' => Carbon::now()->addDay(),
        // ]);


        // Product::factory(5)->has(
        //     \App\Domain\Statistics\Models\View::factory(rand(250, 1000))
        // )->create();

        // $this->call([
        //     StartupSeeder::class,
        //     PermissionSeeder::class,
        // ]);
    }
}
