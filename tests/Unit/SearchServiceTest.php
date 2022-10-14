<?php

namespace Tests\Unit;

use App\Domain\Cart\Models\Support\Services\SearchService;
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
        $this->assertEquals($expectedResult , $actualResult);
    }
}
