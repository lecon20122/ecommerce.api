<?php

namespace App\Support\Services;

use Exception;
use Illuminate\Support\Collection;
use Laravel\Scout\Builder;
use Laravel\Scout\Searchable;
use MeiliSearch\Endpoints\Indexes;

class SearchService
{
    /**
     * @param $categoryId
     * @param null $filtersExceptPrice
     * @param null $maxPrice
     * @return string
     */
    public function filterFactory($categoryId, $filtersExceptPrice = null, $maxPrice = null): string
    {

        $baseQuery = 'category_ids = ' . $categoryId;

        if ($filtersExceptPrice) {
            $filtersExceptPriceString = $this->recursiveFilterIteration($filtersExceptPrice);
        }

        if ($maxPrice) {
            $baseQuery = 'category_ids = ' . $categoryId . ' AND ' . 'price <= ' . $maxPrice;
        }

        return empty($filtersExceptPriceString)
            ? $baseQuery
            : $baseQuery . ' AND ' . $filtersExceptPriceString;
    }

    /**
     * @param $filters
     * @return null
     */
    public function recursiveFilterIteration($filters)
    {
        if (!$filters) return null;
        return $this->collectChildren(collect($filters)->filter(fn($filter) => !empty($filter)))
            ->map(function ($value, $key) {
                if (is_string($value)) return $key . ' = "' . $value . '"';
                return $value->map(fn($value) => $key . ' = "' . $value . '"');
            })
            ->flatten()
            ->join(' AND ');
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
    public function searchIndexedModel(array $params, $model): Builder
    {
        if (!in_array(Searchable::class, class_uses_recursive($model::class))) throw new Exception('this model not uses Searchable trait');

        return $model::search($params['q'] ?? '', function (Indexes $meilisearch, string $query, array $options) use ($params) {
            $options['facets'] = $params['facets'] ?? null;
            $options['filter'] = $params['filter'] ?? null;
            $options['sort'] = $params['sort'] ?? null;
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
