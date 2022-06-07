<?php

namespace Tests\Feature\Store;

use App\Domain\Location\Models\Address;
use App\Domain\Store\Models\Store;
use App\Support\Enums\HttpStatusEnums;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use phpDocumentor\Reflection\Types\This;
use Tests\TestCase;

use function PHPUnit\Framework\assertTrue;

class StoreTest extends TestCase
{
    use RefreshDatabase, WithFaker;
    protected $user, $address, $token;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_store_can_be_created()
    {
        $this->user = User::factory()->create();

        $this->token = $this->user->createToken($this->user->email, ['customer'])->plainTextToken;
        $headers = ['Authorization' => 'Bearer ' . $this->token];

        $data = [
            'name' => $this->faker->unique()->firstName,
            'description' => $this->faker->realText(),
            'user_id' => $this->user->id,
        ];

        $response = $this->post(route('stores.store'), $data, $headers)->assertStatus(HttpStatusEnums::CREATED);

        $this->assertEquals(Store::first()->name, $response->json()['name']);
    }

    public function test_store_can_be_updated()
    {
        $this->user = User::factory()->create();

        $store = $this->user->stores()->create([
            'name' => $this->faker->unique()->firstName,
            'description' => $this->faker->realText(),
        ]);


        $this->token = $this->user->createToken($this->user->email, ['customer'])->plainTextToken;
        $headers = ['Authorization' => 'Bearer ' . $this->token];

        $data = [
            'name' => 'new store',
        ];

        $this->put(route('stores.update', ['store' => $store]), $data, $headers)->assertOk();

        $store->refresh();

        $this->assertEquals('new store', $store->name);
    }

    public function test_store_can_be_destroyed()
    {
        $this->user = User::factory()->create();

        $store = $this->user->stores()->create([
            'name' => $this->faker->unique()->firstName,
            'description' => $this->faker->realText(),
        ]);

        $this->token = $this->user->createToken($this->user->email, ['customer'])->plainTextToken;
        $headers = ['Authorization' => 'Bearer ' . $this->token];

        $this->delete(route('stores.destroy', ['store' => $store]), [], $headers)->assertOk();

        $this->assertNull(Store::first());
    }
}
