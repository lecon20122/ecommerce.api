<?php

namespace App\Support\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;

class UploadImageJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected Model $model;
    protected string $keyName;
    protected string $collectionName;

    /**
     * @param Model $model
     * @param string $keyName
     * @param string $collectionName
     */
    public function __construct(Model $model, string $keyName, string $collectionName)
    {
        $this->model = $model;
        $this->keyName = $keyName;
        $this->collectionName = $collectionName;
    }


    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->model->addMultipleMediaFromRequest([$this->keyName])
            ->each(function ($fileAdder) {
                $fileAdder->usingFileName(Str::uuid() . '.' . 'jpg')
                    ->addCustomHeaders([
                        'ACL' => 'public-read'
                    ])
                    ->toMediaCollection($this->collectionName , 'do');
            });
    }
}
