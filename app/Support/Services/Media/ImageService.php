<?php


namespace App\Support\Services\Media;

use App\Domain\Media\CustomPathDirectory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Spatie\Image\Image;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig;
use Spatie\MediaLibrary\MediaCollections\FileAdder;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Throwable;

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

    public function imageUploadWithDimensions(Model $model, $keyName, $collectionName, $model_id, $width = null, $height = null)
    {
        $model->addMultipleMediaFromRequest([$keyName])
            ->each(/**
             * @throws FileDoesNotExist
             * @throws FileIsTooBig
             */ function (FileAdder $fileAdder) use ($collectionName, $model_id, $width, $height) {
                $fileAdder
                    ->usingFileName($model_id . '_' . now()->timestamp . '.jpg')
                    ->withCustomProperties(['width' => $width ?? null, 'height' => $height ?? null])
                    ->addCustomHeaders([
                        'ACL' => 'public-read'
                    ])
                    ->toMediaCollection($collectionName, config('env-settings.media-filesystem'));
            });
    }

    public function getDimensions(UploadedFile $file): array
    {
        try {
            $image = Image::load($file->getPathname());
            return [$image->getWidth(), $image->getHeight()];
        } catch (Throwable $e) {
            return [null, null];
        }
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
