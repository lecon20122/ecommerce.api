<?php

namespace App\Support\Services;

use App\Domain\Product\DTOs\ProductFilterDTO;
use Exception;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use JetBrains\PhpStorm\NoReturn;
use Laravel\Scout\Builder;
use Laravel\Scout\Searchable;
use MeiliSearch\Endpoints\Indexes;

class SearchService
{
    /**
     * @param array|string $filters
     * @return string
     */
    public function filterQueryGenerator(array|string $filters): string
    {

        if (count($filters) === 1 && array_key_exists('mainCategory', $filters)) {
            return $this->generateCategoryQueryString($filters['mainCategory'] ?? null, $filters['category'] ?? null, false);
        }

        $areCategoryAndSubCategoryTheOnlyKeys =
            count($filters) === 2
            && array_key_exists('category', $filters)
            && array_key_exists('mainCategory', $filters);

        $areSizeOrColorExists = isset($filters['size']) | isset($filters['color']);

        $colors = Arr::only($filters, ['color']);
        $sizes = Arr::only($filters, ['size']);
        $stores = Arr::only($filters, ['stores']);

        $categoryQuery = $this->generateCategoryQueryString($filters['mainCategory'] ?? null, $filters['category'] ?? null, !$areCategoryAndSubCategoryTheOnlyKeys);

        if ($stores) {
            $categoryQuery = $categoryQuery . $this->generateStoreQuery($stores) . ($areSizeOrColorExists ? ' AND ' : '');
        }

        $stringQuery = $categoryQuery . $this->generateSizeAndColorQueryString($colors, $sizes);


        if (isset($filters['price'])) {
            $stringQuery = $stringQuery . ($areSizeOrColorExists || $stores ? ' AND ' : '') . $this->generatePriceRangeQuery($filters['price']);
        }
        return $stringQuery;
    }

    public function generateCategoryQueryString(string $mainCategory = null, string $category = null, bool $andOperatorFlag = true): ?string
    {
        if (!$mainCategory && !$category) return null;
        return 'category = ' . '"' . ($category ?? $mainCategory) . '"' . ($andOperatorFlag ? ' AND ' : '');
    }

    public function generateStoreQuery(array|string $filters): ?string
    {
        return $this->generateOptionalBetweenBracketsQuery($filters);
    }

    public function generateOptionalBetweenBracketsQuery(array|string $filters): ?string
    {
        if (!$filters) return null;

        $splitFilter = $this->splitFiltersStrings($filters);
        $query = $this->collectChildren(collect($splitFilter)->filter(fn($filter) => !empty($filter)))
            ->map(function ($value, $key) {
                if (is_string($value)) return $key . ' = "' . $value . '"';
                return $value->map(fn($value) => $key . ' = "' . $value . '"');
            })
            ->flatten()
            ->join(' OR ');
        return '(' . $query . ')';
    }

    public function splitFiltersStrings(array|string $filters): array
    {
        if (is_string($filters)) return explode(',', $filters);

        foreach ($filters as $filter => $value) {
            $splitFilters[$filter] = explode(',', $value);
        }

        return $splitFilters;
    }

    public function collectChildren(Collection $collection): Collection
    {
        return $collection->map(function ($value) {
            if (is_array($value) || is_object($value)) {
                return $this->collectChildren(collect($value));
            }
            return $value;
        });
    }

    /**
     * @param array|string $color
     * @param array|string $size
     * @return string|null
     */
    public function generateSizeAndColorQueryString(array|string $color, array|string $size): ?string
    {
        $andOperatorIfBothSizeAndColorExists = $color && $size ? ' AND ' : '';
        return $this->generateColorQuery($color) . $andOperatorIfBothSizeAndColorExists . $this->generateSizeQuery($size);
    }

    public function generateColorQuery(array|string $filters): ?string
    {
        return $this->generateOptionalBetweenBracketsQuery($filters);
    }

    public function generateSizeQuery(array|string $filters): ?string
    {
        return $this->generateOptionalBetweenBracketsQuery($filters);
    }

    public function generatePriceRangeQuery(string $price): string
    {
        $priceRange = explode('-', $price);
        if (!$priceRange[1]) {
            return 'price' . ' > ' . '"' . $priceRange[0] . '"';
        }

        return 'price ' . '"' . $priceRange[0] . '"' . ' TO ' . '"' . $priceRange[1] . '"';
    }

    /**
     * @throws Exception
     */
    public function getFacetDistribution($facets, $categoryId, $model)
    {
        $params['filter'] = 'category_ids = ' . $categoryId;
        $params['facets'] = $facets;
        $facetDistribution = $this->searchIndexedModel($params, $model)->raw();
        return $facetDistribution['facetDistribution'];
    }

    /**
     * @throws Exception
     */
    public function searchIndexedModel(array $params, $model, int|null $limit = 20): Builder
    {
        if (!in_array(Searchable::class, class_uses_recursive($model::class))) throw new Exception('this model not uses Searchable trait');

        return $model::search($params['q'] ?? '', function (Indexes $meilisearch, string $query, array $options) use ($params, $limit) {
            $options['facets'] = $params['facets'] ?? null;
            $options['filter'] = $params['filter'] ?? null;
            $options['sort'] = $params['sort'] ?? null;
            is_null($limit) ? $options['limit'] = 20 : $options['limit'] = $limit;
            return $meilisearch->search($query, $options);
        }
        );
    }

    public function sortFactory(array|null $sortables): array|null
    {
        if (!$sortables) return null;

        foreach ($sortables as $sortable => $value) {
            $result[] = $sortable . ':' . ($value ? 'asc' : 'desc');
        }
        return $result;
    }
}
