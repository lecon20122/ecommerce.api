<?php


namespace App\Support\Services\Media;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig;
use Spatie\MediaLibrary\MediaCollections\FileAdder;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ImageService
{
    public function imageUpload(Model $model, $keyName, $collectionName, $model_id)
    {
        $model->addMultipleMediaFromRequest([$keyName])
            ->each(/**
             * @throws FileDoesNotExist
             * @throws FileIsTooBig
             */ function (FileAdder $fileAdder) use ($collectionName, $model_id) {
                $fileAdder
                    ->usingFileName($model_id . '_' . now()->timestamp . '.jpg')
                    ->addCustomHeaders([
                        'ACL' => 'public-read'
                    ])
                    ->toMediaCollection($collectionName, config('env-settings.media-filesystem'));
            });
    }

    public function delete($id)
    {
        Media::destroy($id);
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

    public function setCustomProperty($image_Id, $key, $value)
    {
        $media = Media::query()
            ->find($image_Id);
        $media?->setCustomProperty($key, $value);

        $media->save();
    }

    public function forgetCustomProperty($media, $key)
    {
        $media?->forgetCustomProperty($key);

        $media?->save();
    }
}
