<?php

namespace Tests\Feature\Category;

use App\Domain\Admin\Models\Admin;
use App\Domain\Category\Models\Category;
use App\Domain\Variation\Models\VariationType;
use App\Support\Traits\FeatureTestTrait;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use JetBrains\PhpStorm\NoReturn;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Tests\TestCase;

class CategoryTest extends TestCase
{
    use RefreshDatabase, WithFaker, FeatureTestTrait;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_that_category_can_be_stored_with_translation_and_Thumbnail()
    {
        $this->authorizedAdmin();

        Storage::fake('public');

        $oppositeCategory = Category::factory()->create();

        $this->post(route('admin.categories.store'), [
            'en' => 'test category',
            'ar' => 'هيللو',
            'opposite_category_id' => $oppositeCategory->id,
            'images' => [
                0 => UploadedFile::fake()->image("test.jpg", 100, 100)
            ]
        ]);
        $category = Category::with('media')->orderBy('id', 'desc')->first();

        $this->assertEquals($category->title, 'test category');
        $this->assertEquals($category->oppositeCategory->title, $oppositeCategory->title);
    }

    public function test_that_category_title_is_slugged()
    {
        $admin = Admin::factory(1)->create();
        $this->actingAs($admin, 'admin');
        $response = $this->post(route('admin.categories.store'), [
            'en' => 'test category',
            'ar' => 'هيللو',
        ])->assertRedirect();
        $category = Category::first();
        $this->assertEquals('test-category', $category->slug);
    }

    public function test_that_category_can_be_updated()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $category = Category::factory()->create();
        $oppositeCategory = Category::factory()->create();
        $response = $this->post(route('admin.categories.update', ['id' => $category->id]), [
            'en' => 'new category',
            'opposite_category_id' => $oppositeCategory->id,
        ])->assertRedirect();


        $category->refresh();
        
        $this->assertEquals('new category', $category->title);
        $this->assertEquals('new-category', $category->slug);
        $this->assertEquals($oppositeCategory->title, $category->oppositeCategory->title);
    }

    public function test_that_category_can_be_destroyed()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $category = Category::factory()->create();

        $response = $this->post(route('admin.categories.destroy', ['id' => $category->id]))
            ->assertRedirect();


        $this->assertNull(Category::first());
    }

    public function test_that_as_a_admin_can_add_a_single_thumbnail_to_category()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $category = Category::factory()->create();

        Storage::fake('public');
        $data = [
            'images' => [
                0 => UploadedFile::fake()->image("test.jpg", 100, 100),
                1 => UploadedFile::fake()->image("test.jpg", 100, 100),
            ]
        ];
        $response = $this->post(route('admin.add.media.to.category', ['id' => $category->id]), $data)->assertRedirect();


        $this->assertCount(1, $category->media);
    }

    public function test_that_as_a_admin_can_toggle_category_status()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $category = Category::factory()->create();

        $response = $this->post(route('admin.toggle.category.status', ['id' => $category->id]))->assertRedirect();



        $this->assertTrue(Category::first()->is_active);
    }

    public function test_that_as_a_admin_can_delete_a_category_thumbnail()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $category = Category::factory()->create();

        Storage::fake('public');
        $data = [
            'images' => [
                0 => UploadedFile::fake()->image("test.jpg", 100, 100),
            ]
        ];
        $response = $this->post(route('admin.add.media.to.category', ['id' => $category->id]), $data)->assertRedirect();


        $this->assertCount(1, $category->media);

        $dataToDelete = [
            'id' => $category->thumbnail->id
        ];

        $this->post(route('admin.delete.media.of.category', ['id' => $category->id]), $dataToDelete)->assertRedirect();
        $category->refresh();
        $this->assertCount(0, $category->media);
    }
}
