<?php

namespace Tests\Feature\Category;

use App\Domain\Category\Models\Category;
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

    public function test_cache_is_forgotten_when_new_item_created()
    {
        $this->post(route('categories.store'), [
            'title' => 'test category',
        ])->assertStatus(201);

        Cache::shouldReceive('forget')
            ->once()
            ->with('categories')
            ->andReturn([]);
    }

    public function test_that_category_title_is_slugged()
    {
        $this->post(route('categories.store'), [
            'title' => 'test category',
        ])->assertStatus(201);

        $category = Category::first();

        $this->assertEquals($category['slug'], 'test-category');
    }
}
