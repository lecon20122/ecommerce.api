<?php

namespace App\Domain\Cart\Models\Domain\Variation\Services;

use App\Domain\Variation\Models\SizeDescriptionValue;

class SizeDescriptionValueService
{
    public function store(array $data)
    {
        SizeDescriptionValue::query()->create($data);
    }

    public function update(array $data, $id)
    {
        $sizeDescriptionValue = SizeDescriptionValue::query()->find($id);
        $sizeDescriptionValue->query()->update($data);
    }
}
