<?php

namespace Tests\Feature\Variation;

use App\Domain\Admin\Models\Admin;
use App\Domain\Product\Models\Product;
use App\Domain\Store\Models\Store;
use App\Domain\Variation\Models\Variation;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Tests\TestCase;

class ApiVariationTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    public function test_variation_can_add_images_by_store_owner()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');

        $store = Store::factory()->create([
            'user_id' => $user->id
        ]);
        $product = Product::factory()->create([
            'store_id' => $store->id
        ]);
        $variation = Variation::factory()->create([
            'store_id' => $store->id,
            'product_id' => $product->id,
        ]);

        Storage::fake('public');

        $data = [
            'images' => [
                0 => UploadedFile::fake()->image("test.jpg", 100, 100),
            ]
        ];

        $this->post(route('api.add.media.to.store.variation', ['variation' => $variation]), $data);
        $this->assertCount(1, Media::all());
    }

    public function test_variation_can_delete_images_by_store_owner()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');

        $store = Store::factory()->create([
            'user_id' => $user->id
        ]);
        $product = Product::factory()->create([
            'store_id' => $store->id
        ]);
        $variation = Variation::factory()->create([
            'store_id' => $store->id,
            'product_id' => $product->id,
        ]);

        Storage::fake('public');

        $data = [
            'images' => [
                0 => UploadedFile::fake()->image("test.jpg", 100, 100),
            ]
        ];

        $this->post(route('api.add.media.to.store.variation', ['variation' => $variation]), $data);
        $this->assertCount(1, Media::all());
        $this->post(route('api.delete.media.of.store.variation', ['variation' => $variation]) , ['id' => Media::first()->id]);
        $this->assertNull(Media::first());
    }
}
