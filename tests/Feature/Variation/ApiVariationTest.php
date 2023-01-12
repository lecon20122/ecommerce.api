<?php

namespace Tests\Feature\Variation;

use App\Domain\Inventory\Models\Stock;
use App\Domain\Product\Models\Product;
use App\Domain\Store\Models\Store;
use App\Domain\Variation\Models\Variation;
use App\Domain\Variation\Models\VariationType;
use App\Domain\Variation\Models\VariationTypeValue;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use JetBrains\PhpStorm\ArrayShape;
use JetBrains\PhpStorm\NoReturn;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Tests\TestCase;

class ApiVariationTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    public function test_variation_details_can_only_be_shown_by_owner()
    {
        $owner = User::factory()->create();

        $notTheOwner = User::factory()->create();

        $this->actingAs($notTheOwner, 'web');

        $testData = $this->createProductForThisUser($owner);

        $variation = Variation::factory()->create([
            'product_id' => $testData['product']->id,
            'store_id' => $testData['product']->store_id
        ]);

        $response = $this->get(route('api.get.owner.variation', ['variation' => $variation]));
        $this->assertEquals("something went wrong we working on it", $response->json()['message']);
    }

    #[ArrayShape(['store' => "\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|mixed", 'product' => "\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|mixed"])] public function createProductForThisUser(User $user): array
    {
        $store = Store::factory()->create([
            'user_id' => $user->id
        ]);
        $product = Product::factory()->create([
            'store_id' => $store->id
        ]);

        return [
            'store' => $store,
            'product' => $product,
        ];
    }

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
                1 => UploadedFile::fake()->image("test.jpg", 100, 100),
            ]
        ];

        $this->post(route('api.add.media.to.store.variation', ['variation' => $variation]), $data);
        $this->assertCount(2, Media::all());
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
        $this->post(route('api.delete.media.of.store.variation', ['variation' => $variation]), ['id' => Media::first()->id]);
        $this->assertNull(Media::first());
    }

    public function test_variation_can_be_created_with_images_only_by_the_owner()
    {
        $user = User::factory()->create();

        $notTheOwner = User::factory()->create();

        $this->actingAs($notTheOwner, 'web');

        $testData = $this->createProductForThisUser($user);


        $VariationTypeValue = VariationTypeValue::factory()->create();

        Storage::fake('public');

        $data = [
            'price' => 150,
            'variation_type_id' => $VariationTypeValue->variation_type_id,
            'variation_type_value_id' => $VariationTypeValue->id,
            'order' => 1,
            'product_id' => $testData['product']->id,
            'store_id' => $testData['product']->store_id,
            'images' => [
                0 => UploadedFile::fake()->image("test.webp", 100, 100)
            ]
        ];

        $this->post(route('api.create.owner.variation'), $data)->assertForbidden();
        $this->assertCount(0, Variation::all());
        $this->assertCount(0, Media::all());
    }

    #[NoReturn] public function test_variation_can_be_created_with_images_by_owner()
    {
        $user = User::factory()->create();

        $this->actingAs($user, 'web');

        $testData = $this->createProductForThisUser($user);


        $VariationTypeValue = VariationTypeValue::factory()->create();

        Storage::fake('public');

        $data = [
            'price' => 150,
            'variation_type_id' => $VariationTypeValue->variation_type_id,
            'variation_type_value_id' => $VariationTypeValue->id,
            'order' => 1,
            'product_id' => $testData['product']->id,
            'store_id' => $testData['product']->store_id,
            'images' => [
                0 => UploadedFile::fake()->image("test.webp", 100, 100)
            ]
        ];

        $this->post(route('api.create.owner.variation'), $data);
        $this->assertCount(1, Variation::all());
        $this->assertCount(1, Media::all());
    }

    public function test_variation_can_be_updated_only_by_owner()
    {
        $user = User::factory()->create();
        $notTheOwner = User::factory()->create();

        $this->actingAs($notTheOwner, 'web');

        $testData = $this->createProductForThisUser($user);

        $variation = Variation::factory()->create([
            'store_id' => $testData['store']->id,
            'product_id' => $testData['product']->id
        ]);

        $VariationTypeValue = VariationTypeValue::factory()->create();

        Storage::fake('public');

        $data = [
            'title' => 'Black man',
            'variation_type_id' => $VariationTypeValue->variation_type_id,
            'variation_type_value_id' => $VariationTypeValue->id,
        ];

        $response = $this->post(route('api.update.owner.variation', ['variation' => $variation]), $data)->assertForbidden();

        $this->assertNotEquals($VariationTypeValue->id, Variation::first()->variation_type_value_id);
        $this->assertNotEquals($VariationTypeValue->variation_type_id, Variation::first()->variation_type_id);
        $this->assertNotEquals('Black man', Variation::first()->title);
    }

    public function test_variation_can_be_updated_by_owner_only_by_the_same_type()
    {
        $user = User::factory()->create();
        $notTheOwner = User::factory()->create();

        $this->actingAs($user, 'web');

        $testData = $this->createProductForThisUser($user);

        $variation = Variation::factory()->create([
            'store_id' => $testData['store']->id,
            'product_id' => $testData['product']->id
        ]);

        $VariationTypeValue = VariationTypeValue::factory()->create([
            'variation_type_id' => $variation-> variation_type_id
        ]);

        $data = [
            'title' => 'Black man',
            'variation_type_value_id' => $VariationTypeValue->id,
        ];

        $response = $this->post(route('api.update.owner.variation', ['variation' => $variation]), $data)->assertOk();

        $this->assertEquals($VariationTypeValue->id, Variation::first()->variation_type_value_id);
        $this->assertEquals('Black man', Variation::first()->title);
    }

    public function test_variation_can_be_destroyed_only_by_the_owner()
    {
        $user = User::factory()->create();
        $notTheOwner = User::factory()->create();

        $this->actingAs($notTheOwner, 'web');

        $testData = $this->createProductForThisUser($user);

        $variation = Variation::factory()->create([
            'store_id' => $testData['store']->id,
            'product_id' => $testData['product']->id
        ]);

        $this->post(route('api.soft.delete.owner.variation', ['id' => $variation->id]));

        $this->assertNull(Variation::withTrashed()->first()->deleted_at);
    }

    public function test_variation_can_be_destroyed()
    {
        $user = User::factory()->create();

        $this->actingAs($user, 'web');

        $testData = $this->createProductForThisUser($user);

        $variation = Variation::factory()->create([
            'store_id' => $testData['store']->id,
            'product_id' => $testData['product']->id
        ]);

        $this->post(route('api.soft.delete.owner.variation', ['id' => $variation->id]));

        $this->assertNotNull(Variation::withTrashed()->first()->deleted_at);
    }

    public function test_owner_can_create_color_variant()
    {
        $user = User::factory()->create();

        $this->actingAs($user, 'web');

        $testData = $this->createProductForThisUser($user);

        $color = VariationType::factory()->create([
            'type' => 'color'
        ]);

        $size = VariationType::factory()->create([
            'type' => 'size'
        ]);

        $variationTypeValue = VariationTypeValue::factory()->create([
            'variation_type_id' => $color->id,
        ]);

        $variationTypeValue2 = VariationTypeValue::factory()->create([
            'variation_type_id' => $size->id,
        ]);

        $data = [
            'price' => 150,
            'order' => 1,
            'variation_type_value_id' => $variationTypeValue->id,
            'product_id' => $testData['product']->id,
            'store_id' => $testData['product']->store_id,
            'images' => [
                0 => UploadedFile::fake()->image("test.webp", 100, 100)
            ]
        ];
        $response = $this->post(route('api.create.color.variation'), $data);
        $this->assertEquals($color->id, Variation::first()->variation_type_id);
        $this->assertEquals($color->id, $response->json()['variation_type_value']['id']);
    }

    public function test_owner_can_create_size_variant_and_add_stock()
    {
        $user = User::factory()->create();

        $this->actingAs($user, 'web');

        $testData = $this->createProductForThisUser($user);

        $color = VariationType::factory()->create([
            'type' => 'color'
        ]);

        $size = VariationType::factory()->create([
            'type' => 'size',
            'is_stockable' => true
        ]);

        $colorTypeValue = VariationTypeValue::factory()->create([
            'variation_type_id' => $color->id,
        ]);

        $sizeTypeValue = VariationTypeValue::factory()->create([
            'variation_type_id' => $size->id,
        ]);

        $data = [
            'price' => 150,
            'order' => 1,
            'variation_type_value_id' => $sizeTypeValue->id,
            'product_id' => $testData['product']->id,
            'store_id' => $testData['product']->store_id,
            'stock_amount' => 5
        ];
        $response = $this->post(route('api.create.size.variation'), $data);
        $this->assertEquals(5, Stock::first()->amount);
        $this->assertEquals($size->id, Variation::first()->variation_type_id);
        $this->assertEquals(5, Variation::first()->stock_count);
    }

    public function test_GetVariationColorValues()
    {
        $user = User::factory()->create();

        $this->actingAs($user, 'web');

        $color = VariationType::factory()->create([
            'type' => 'color'
        ]);

        $size = VariationType::factory()->create([
            'type' => 'size'
        ]);

        $variationTypeValue = VariationTypeValue::factory()->create([
            'variation_type_id' => $color->id,
        ]);

        $variationTypeValue2 = VariationTypeValue::factory()->create([
            'variation_type_id' => $size->id,
        ]);

        $response = $this->get(route('api.get.color.values.variation'));
        $this->assertEquals($variationTypeValue->value , $response->json()[0]['value']['en']);
    }
}
