<?php

namespace Database\Seeders;

use App\Domain\Admin\Models\Admin;
use App\Domain\Cart\Models\Cart;
use App\Domain\Category\Models\Category;
use App\Domain\Location\Models\District;
use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\Variation;
use App\Domain\Store\Models\Store;
use Domain\User\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\File;

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
        //  User::factory(1000)->create();
        // Admin::factory(1)->create();
        // Cart::factory(5)->create();
        // Store::factory(2)->hasAddresses(3)->create();
        // seeding Products with Me

        Category::factory(5)->create();
        $categories = Category::all();

        $folder = File::files(storage_path('images'));
        foreach ($folder as  $path) {
            $filePath = storage_path('images') . '/' . $path->getFilename();
            echo 1;
            $product = Product::factory()->create();
            $product->categories()->attach(
                $categories->random(rand(1, 5))->pluck('id')->toArray()
            );
            $product->addMedia($filePath)->toMediaCollection('products');
        }
    }
}
