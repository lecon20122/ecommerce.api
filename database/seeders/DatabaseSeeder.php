<?php

namespace Database\Seeders;

use App\Domain\Admin\Models\Admin;
use App\Domain\Cart\Models\Cart;
use App\Domain\Category\Models\Category;
use App\Domain\Location\Models\District;
use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\Variation;
use App\Domain\Store\Models\Store;
use App\Support\Enums\MediaCollectionEnums;
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
//        Admin::factory(1)->create();
        // Cart::factory(5)->create();
//         Store::factory()->hasProducts(15)->create();
        // seeding Products with Me
//        Product::factory(6)->create();
        // Category::factory(5)->create();
        // $categories = Category::all();

//         $folder = File::files(public_path('images'));
//        $Store = Store::factory()->hasProducts(15)->create();
//        foreach ($folder as  $path) {
//             $filePath = public_path('images') . '/' . $path->getFilename();
//             dd($filePath);
//             echo 1;
//             $products = $Store->products()->get();
//             foreach ($products as $product){
//                 $product->addMedia($filePath)->toMediaCollection(MediaCollectionEnums::THUMBNAIL);
//             }
//         }
    }
}
