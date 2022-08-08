<?php

namespace Tests\Feature\Category;

use App\Domain\Admin\Models\Admin;
use App\Domain\Category\Models\Category;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CategoryTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_that_category_can_be_stored_with_translation()
    {
        $admin = Admin::factory(1)->create()->first();
        $this->actingAs($admin, 'admin');
        $response = $this->post(route('admin.categories.store'), [
            'en' => 'test category',
            'ar' => 'هيللو',
        ])->assertRedirect();

        $category = Category::first();
        $this->assertEquals($category->title, 'test category');
    }

    public function test_that_category_title_is_slugged()
    {
        $admin = Admin::factory(1)->create()->first();
        $this->actingAs($admin, 'admin');
        $response = $this->post(route('admin.categories.store'), [
            'en' => 'test category',
            'ar' => 'هيللو',
        ])->assertRedirect();
        $response->assertSessionHas('message', 'success');
        $category = Category::first();
        $this->assertEquals('test-category', $category->slug);
    }

    public function test_that_category_can_be_updated()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $category = Category::factory()->create();

        $response = $this->post(route('admin.categories.update', ['category' => $category]), [
            'en' => 'new category',
        ])->assertRedirect();

        $response->assertSessionHas('message', 'success');
        $category->refresh();

        $this->assertEquals('new category', $category->title);
        $this->assertEquals('new-category', $category->slug);
    }

    public function test_that_category_can_be_destroyed()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $category = Category::factory()->create();

        $response = $this->post(route('admin.categories.destroy', ['id' => $category->id]))
            ->assertRedirect();
        $response->assertSessionHas('message', 'success');

        $this->assertNull(Category::first());
    }
}
