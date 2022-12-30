<?php

namespace App\Support\Jobs;

use App\Domain\Media\CustomPathDirectory;
use App\Support\Enums\MediaCollectionEnums;
use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use JetBrains\PhpStorm\Pure;
use Spatie\MediaLibrary\Conversions\ConversionCollection;
use Spatie\MediaLibrary\Conversions\FileManipulator;
use Spatie\MediaLibrary\Conversions\Jobs\PerformConversionsJob;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class PerformConversionsAndDeleteTheOriginalFileJob extends PerformConversionsJob
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Execute the job.
     *
     * @param FileManipulator $fileManipulator
     * @return bool
     */
    public function handle(FileManipulator $fileManipulator): bool
    {
        $fileManipulator->performConversions($this->conversions, $this->media, $this->onlyMissing);

        if ($this->conversions->first()->getName() !== MediaCollectionEnums::LOGO_CONVERSION) {
            $this->deleteOriginalFileAfterUpload($this->media);
        }
        return true;
    }

    public function deleteOriginalFileAfterUpload($media)
    {
        $folder = (new CustomPathDirectory)->path($media);
        $disk = config('env-settings.media-filesystem');
        Storage::disk($disk)->delete('images/' . $folder . '/' . $media->file_name);
    }
}
