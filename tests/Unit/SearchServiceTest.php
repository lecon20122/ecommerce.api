<?php

namespace Tests\Unit;

use App\Support\Services\SearchService;
use PHPUnit\Framework\TestCase;

class SearchServiceTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_sort_factory_return_the_expected_result()
    {
        $sortables = [
            'created_at' => true,
            'price' => false
        ];
        $expectedResult = ['created_at:asc', 'price:desc'];
        $actualResult = (new SearchService())->sortFactory($sortables);
        $this->assertEquals($expectedResult, $actualResult);
    }

    public function test_Filter_return_the_expected_result()
    {
        $filters = [
            'size' => 'XL,M',
            'color' => 'green,blue',
            'stores' => 'Adara',
        ];
        $expectedResult = 'size = "XL" OR size = "M" OR color = "green" OR color = "blue" OR stores = "Adara"';
        $actualResult = (new SearchService())->generateSizeAndColorQueryString($filters);
        $this->assertEquals($expectedResult, $actualResult);
    }

    public function test_that_if_category_is_not_null()
    {
        $actualResult = (new SearchService())->generateCategoryQueryString('kids', 'tops');
        $expectedString = 'category = "tops" AND ';
        $this->assertEquals($expectedString, $actualResult);
    }

    public function test_that_if_category_is_null()
    {
        $actualResult = (new SearchService())->generateCategoryQueryString('kids');
        $expectedString = 'category = "kids" AND ';
        $this->assertEquals($expectedString, $actualResult);
    }

    public function test_that_if_category_is_null_and_mainCategory_too()
    {
        $actualResult = (new SearchService())->generateCategoryQueryString();
        $expectedString = null;
        $this->assertEquals($expectedString, $actualResult);
    }
}
