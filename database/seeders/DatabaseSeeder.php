<?php

namespace Database\Seeders;

use App\Domain\Product\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Foundation\Testing\WithFaker;

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
//        $user = new Domain\User\Models\User();

//        User::factory()->create();
//        Admin::factory()->create();
        // Cart::factory(5)->create();
//         Store::factory()->hasProducts(15)->create();
        // seeding Products with Me
//        Product::factory(25)->hasVariations(4)->create();
        // Category::factory(5)->create();
        $products = Product::query()->get();
        foreach ($products as $product) {
            $product->categories()->attach([1]);
        }
    }
}
