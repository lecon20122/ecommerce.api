<?php

namespace Database\Seeders;

use App\Domain\Admin\Models\Admin;
use Domain\User\Models\User;
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
        User::factory(3)->create();
        Admin::factory()->create();
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
