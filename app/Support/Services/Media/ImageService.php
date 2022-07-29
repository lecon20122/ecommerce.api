<?php


namespace App\Support\Services\Media;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class ImageService
{
    public function imageUpload(Model $model, $keyName, $collectionName, $store_id)
    {
        // dd($store_id . '_' . now()->timestamp . '.jpg');
        $model->addMultipleMediaFromRequest([$keyName])
            ->each(function ($fileAdder) use ($collectionName, $store_id) {
                $fileAdder
                    ->usingFileName($store_id . '_' . now()->timestamp . '.jpg')
                    ->addCustomHeaders([
                        'ACL' => 'public-read'
                    ])
                    ->toMediaCollection($collectionName, config('env-settings.media-filesystem'));
            });
    }
}
