<?php

namespace Tests\Feature\Store;

use App\Domain\Admin\Models\Admin;
use App\Domain\Store\Models\Store;
use App\Support\Enums\HttpStatusEnums;
use Domain\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class
StoreTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_store_can_be_created()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $data = [
            'name' => 'JK',
            'description' => $this->faker->realText(),
            'user_id' => User::factory()->create()->id,
        ];

        $response = $this->post(route('admin.stores.store'), $data)
            ->assertRedirect();

        $response->assertSessionHas('message', 'success');

        $this->assertEquals('JK', Store::first()->name);
    }

    public function test_store_can_be_updated()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $user = User::factory()->create();

        $store = $user->stores()->create([
            'name' => $this->faker->unique()->firstName,
            'description' => $this->faker->realText(),
        ]);

        $data = [
            'name' => 'new store',
        ];

        $response = $this->post(route('admin.stores.update', ['store' => $store]), $data)->assertRedirect();
        $response->assertSessionHas('message', 'success');
        $store->refresh();

        $this->assertEquals('new store', $store->name);
    }

    public function test_store_can_be_destroyed()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $user = User::factory()->create();

        $store = $user->stores()->create([
            'name' => $this->faker->unique()->firstName,
            'description' => $this->faker->realText(),
        ]);

        $response = $this->post(route('admin.stores.destroy', ['id' => $store->id]))->assertRedirect();
        $response->assertSessionHas('message', 'success');
        $this->assertNull(Store::first());
    }
}
