<?php

namespace Tests\Feature\Variation;

use App\Domain\Admin\Models\Admin;
use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\Variation;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class VariationTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    public function createProduct($user)
    {

    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_variation_can_be_created()
    {
        $user = User::factory()->create();

        $product = $this->createProduct($user);

        $header = $this->generateBearerTokenHeader($user);

        $data = [
            'title' => $this->faker->unique()->sentence,
            'price' => $this->faker->randomFloat(null, 99, 500),
            'type' => 'Color',
            'order' => $this->faker->randomDigit(),
            'product_id' => $product->id,
            'store_id' => $product->store_id,
        ];

        $response = $this->post(route('variations.store'), $data, $header);

        $this->assertEquals($response->json()['title'], Variation::first()->title);
        $this->assertEquals(1, Variation::first()->count());
    }

    public function test_variation_can_be_updated()
    {
        $user = User::factory()->create();

        $product = $this->createProduct($user);

        $header = $this->generateBearerTokenHeader($user);

        $data = [
            'title' => $this->faker->unique()->sentence,
            'price' => $this->faker->randomFloat(null, 99, 500),
            'type' => $this->faker->unique()->sentence,
            'order' => $this->faker->randomDigit(),
            'store_id' => $product->store_id,
        ];

        $variation = $product->variations()->create($data);

        $this->put(route('variations.update', ['variation' => $variation]), ['title' => 'new title'], $header)->assertOk();

        $this->assertEquals('new title', Variation::first()->title);
    }

    public function test_variation_can_be_destroyed()
    {
        $user = User::factory()->create();

        $product = $this->createProduct($user);

        $header = $this->generateBearerTokenHeader($user);

        $data = [
            'title' => $this->faker->unique()->sentence,
            'price' => $this->faker->randomFloat(null, 99, 500),
            'type' => $this->faker->unique()->sentence,
            'order' => $this->faker->randomDigit(),
            'store_id' => $product->store_id,
        ];

        $variation = $product->variations()->create($data);

        $this->delete(route('variations.destroy', ['variation' => $variation]), [], $header)->assertOk();

        $this->assertNull(Variation::first());
    }
}
