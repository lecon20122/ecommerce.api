<?php

namespace Tests\Unit;

use App\Support\Services\SearchService;
use Illuminate\Support\Arr;
use PHPUnit\Framework\TestCase;

class SearchServiceTest extends TestCase
{

    public function testSearchService()
    {
        $filters = [
            'size' => 'XL,M',
            'color' => 'green,blue',
            'mainCategory' => 'men',
            'category' => 'men-shoes',
            'price' => '100-200'
        ];

        $expected = 'category = "men-shoes" AND (color = "green" OR color = "blue") AND (size = "XL" OR size = "M") AND price "100" TO "200"';

        $actual = (new SearchService())->filterQueryGenerator($filters);

        $this->assertEquals($expected, $actual);
    }

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
            'color' => 'green,blue',
            'size' => 'XL,M',
        ];
        $expectedResult = '(size = "XL" OR size = "M") AND (color = "green" OR color = "blue")';

        $colors = Arr::except($filters, ['category', 'mainCategory', 'price', 'size', 'stores']);
        $sizes = Arr::except($filters, ['category', 'mainCategory', 'price', 'color', 'stores']);

        $actualResult = (new SearchService())->generateSizeAndColorQueryString($sizes, $colors);
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
