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
            'size' => [
                'XL'
            ],
            'color' => [
                'Green'
            ],
            'stores' => [
                'Adara'
            ],
        ];
        $expectedResult = 'size = "XL" AND color = "Green" AND stores = "Adara"';
        $actualResult = (new SearchService())->recursiveFilterIteration($filters);
        $this->assertEquals($expectedResult, $actualResult);
    }
}
