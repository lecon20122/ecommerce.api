<?php

namespace Tests\Feature\Product;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProductFilterTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_Product_filter()
    {
        $response = $this->get(route('api.search.filters.by.category' , ['category' => 'tops']));
        dd($response->json());
        $response->assertStatus(200);
    }
}
