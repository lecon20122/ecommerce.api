<?php

namespace Tests\Feature\Product;

use App\Domain\Admin\Models\Admin;
use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\ProductAttribute;
use App\Domain\Product\Models\ProductDescription;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProductAttributeTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testAdminCanAddProductAttribute()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $data = [
            'en' => 'material',
            'ar' => 'خامة',
            'is_filterable' => true,
        ];
        $response = $this->post(route('admin.add.attribute'), $data)->assertRedirect();

        $response->assertSessionHas('message', 'success');
        $this->assertEquals('material', ProductAttribute::first()->attribute);
    }

    public function testAdminCanUpdateProductAttribute()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $attribute = ProductAttribute::factory()->create();
        $data = [
            'en' => 'material',
            'ar' => 'خامة',
        ];
        $response = $this->post(route('admin.update.attribute', ['attribute' => $attribute]), $data)->assertRedirect();

        $response->assertSessionHas('message', 'success');
        $this->assertEquals('material', ProductAttribute::first()->attribute);
    }

    public function testAdminCanDeleteProductAttribute()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $productAttribute = ProductAttribute::factory()->create();

        $this->post(route('admin.delete.attribute', ['attribute' => $productAttribute]))->assertRedirect();

        $this->assertNull(ProductAttribute::first());
    }
}
