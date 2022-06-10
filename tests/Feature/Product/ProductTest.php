<?php

namespace Tests\Feature\Product;

use App\Domain\Product\Models\Product;
use App\Domain\Store\Models\Store;
use App\Support\Enums\HttpStatusEnums;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProductTest extends TestCase
{
    use WithFaker, RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_product_can_be_created()
    {
        $user = User::factory()->create();

        $store = $user->stores()->create([
            'name' => $this->faker->unique()->firstName,
            'description' => $this->faker->realText(),
        ]);

        $token = $user->createToken($user->email, ['customer'])->plainTextToken;
        $headers = ['Authorization' => 'Bearer ' . $token];

        $data = [
            'title' => $this->faker->title,
            'description' => $this->faker->text,
            'price' => $this->faker->randomFloat(00, 50, 300),
            'live_at' => now(),
            'store_id' => $store->id,
        ];

        $response = $this->post(route('products.store'), $data, $headers);

        $response->assertStatus(HttpStatusEnums::CREATED);
    }

    public function test_product_can_be_updated()
    {
        $user = User::factory()->create();

        $store = $user->stores()->create([
            'name' => $this->faker->unique()->firstName,
            'description' => $this->faker->realText(),
        ]);

        $token = $user->createToken($user->email, ['customer'])->plainTextToken;
        $headers = ['Authorization' => 'Bearer ' . $token];

        $data = [
            'title' => $this->faker->title,
            'description' => $this->faker->text,
            'price' => $this->faker->randomFloat(00, 50, 300),
            'live_at' => now(),
        ];

        $product = $store->products()->create($data);

        $response = $this->put(route('products.update', ['product' => $product]), [
            'title' => 'new product',
        ], $headers)->assertOk();

        $this->assertEquals('new product', $response->json()['title']);
    }

    public function test_product_can_be_destroyed()
    {
        $user = User::factory()->create();
        
        $token = $user->createToken($user->email, ['customer'])->plainTextToken;
        $headers = ['Authorization' => 'Bearer ' . $token];

        $store = $user->stores()->create([
            'name' => $this->faker->unique()->firstName,
            'description' => $this->faker->realText(),
        ]);


        $data = [
            'title' => $this->faker->title,
            'description' => $this->faker->text,
            'price' => $this->faker->randomFloat(00, 50, 300),
            'live_at' => now(),
        ];

        $product = $store->products()->create($data);

        $this->delete(route('products.destroy', ['product' => $product]), [], $headers)->assertOk();

        $this->assertNull(Product::first());
    }
}
