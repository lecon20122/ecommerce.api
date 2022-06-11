<?php

namespace Tests\Feature\Category;

use App\Domain\Category\Models\Category;
use App\Support\Enums\CacheKeyEnums;
use App\Support\Enums\HttpStatusEnums;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Cache;
use Tests\TestCase;

class CategoryTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_that_category_can_be_stored()
    {
        $response = $this->post(route('categories.store'), [
            'title' => 'test category',
        ])->assertStatus(201);

        $category = Category::first();

        $this->assertEquals($category['title'], $response->json()['title']);
        $this->assertArrayHasKey('title', $response->json());
    }

    //    public function test_cache_is_forgotten_when_new_item_created()
    //    {
    //        $this->post(route('categories.store'), [
    //            'title' => 'test category',
    //        ])->assertStatus(HttpStatusEnums::CREATED);
    //
    //        Cache::shouldReceive('forget')
    //            ->once()
    //            ->with(CacheKeyEnums::CATEGORY)
    //            ->andReturn([]);
    //    }

    public function test_that_category_title_is_slugged()
    {
        $this->post(route('categories.store'), [
            'title' => 'test category',
        ])->assertStatus(HttpStatusEnums::CREATED);

        $category = Category::first();

        $this->assertEquals($category['slug'], 'test-category');
    }

    public function test_that_category_can_be_updated()
    {
        $category = Category::factory()->create();

        $this->put(route('categories.update', ['category' => $category]), [
            'title' => 'new category',
        ])->assertOk();

        $category->refresh();

        $this->assertEquals('new category', $category->title);
    }

    public function test_that_category_can_be_destroyed()
    {
        $category = Category::factory()->create();

        $this->delete(route('categories.destroy', ['category' => $category]))->assertOk();

        $this->assertNull(Category::first());
    }
}
