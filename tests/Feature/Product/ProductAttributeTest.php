<?php

namespace Tests\Feature\Product;

use App\Domain\Admin\Models\Admin;
use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\ProductAttribute;
use App\Domain\Product\Models\ProductAttributeValue;
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
            'attribute' => 'material',
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
            'attribute' => 'material',
        ];
        $response = $this->post(route('admin.update.attribute', ['attribute' => $attribute]), $data)->assertRedirect();

        $response->assertSessionHas('message', 'success');
        $this->assertEquals('material', ProductAttribute::first()->attribute);
    }

    public function testAdminCanAddProductAttributeValue()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $attribute = ProductAttribute::factory()->create();

        $data = [
            'value' => 'cotton',
            'product_attribute_id' => $attribute->id,
        ];
        $response = $this->post(route('admin.add.attribute.value'), $data)->assertRedirect();

        $response->assertSessionHas('message', 'success');
        $this->assertEquals('cotton', ProductAttributeValue::first()->value);
    }

    public function testAdminCanUpdateProductAttributeValue()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $attributeValue = ProductAttributeValue::factory()->create();
        $data = [
            'value' => 'cotton',
        ];

        $response = $this->post(route('admin.update.attribute.value', ['attributeValue' => $attributeValue]), $data)->assertRedirect();

        $response->assertSessionHas('message', 'success');
        $this->assertEquals('cotton', ProductAttributeValue::first()->value);
    }

    public function testAdminCanAttachProductAttributeToProduct()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $attribute = ProductAttribute::factory()->create();
        $attribute2 = ProductAttribute::factory()->create();
        $attributeValue = ProductAttributeValue::factory()->create();
        $product = Product::factory()->create();

        $data = [
            'product_id' => $product->id,
            'product_attribute_value_id' => $attributeValue->id
        ];

        $response = $this->post(route('admin.attach.attribute.to.product', ['attribute' => $attribute2]), $data)->assertRedirect();

        $response->assertSessionHas('message', 'success');

        $expectedData = [
            'product_id' => 1,
            'product_attribute_id' => 2,
            'product_attribute_value_id' => 1,
        ];
        $this->assertDatabaseHas('product_description', $expectedData);
    }

    public function testAdminCanDetachProductAttributeFromProduct()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $description = ProductDescription::factory()->create();

        $attribute = ProductAttribute::query()->find($description->product_attribute_id);

        $data = [
            'product_id' => $description->product_id,
        ];

        $response = $this->post(route('admin.detach.attribute.from.product', ['attribute' => $attribute]), $data)->assertRedirect();

        $response->assertSessionHas('message', 'success');

        $this->assertNull(ProductDescription::first());
    }
}
