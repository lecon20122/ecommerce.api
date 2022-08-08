<?php


namespace App\Support\Services\Media;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ImageService
{
    public function imageUpload(Model $model, $keyName, $collectionName, $model_id)
    {
        $model->addMultipleMediaFromRequest([$keyName])
            ->each(function ($fileAdder) use ($collectionName, $model_id) {
                $fileAdder
                    ->usingFileName($model_id . '_' . now()->timestamp . '.jpg')
                    ->addCustomHeaders([
                        'ACL' => 'public-read'
                    ])
                    ->toMediaCollection($collectionName, config('env-settings.media-filesystem'));
            });
    }


    public function isImageDeleted($image_Id)
    {
        $media = Media::query()
            ->find($image_Id);
        if ($media) {
            return $media->delete();
        } else {
            return true;
        }
    }
}
