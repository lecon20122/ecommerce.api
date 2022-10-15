<?php

namespace App\Domain\Variation\Services;

use App\Domain\Variation\Models\SizeDescription;

class SizeDescriptionService
{
    public function store(array $data)
    {
        $data['name'] = [
            'en' => $data['name_en'],
            'ar' => $data['name_ar'],
        ];
        $data['guide'] = [
            'en' => $data['guide_en'],
            'ar' => $data['guide_ar'],
        ];
        SizeDescription::query()->create($data);
    }

    public function update($id, array $data)
    {
        $sizeDescription = SizeDescription::query()->find($id);
        if (isset($data['name_en'])) $data['name']['en'] = $data['name_en'];
        if (isset($data['name_ar'])) $data['name']['ar'] = $data['name_ar'];

        if (isset($data['guide_en'])) $data['guide']['en'] = $data['guide_en'];
        if (isset($data['guide_ar'])) $data['guide']['ar'] = $data['guide_ar'];

        $sizeDescription->update($data);
    }
}
