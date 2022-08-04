<?php


namespace App\Support\Services\Media;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ImageService
{
    public function imageUpload(Model $model, $keyName, $collectionName, $store_id)
    {
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


    public function deleteImage($image_Id)
    {
        $media = Media::find($image_Id);
        if ($media) {
            return $media->delete();
        } else {
            return true;
        }
    }
}
