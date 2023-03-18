<?php

namespace App\Jobs;

use App\Support\Enums\MediaCollectionEnums;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Telegram\Bot\Laravel\Facades\Telegram;

class NewProductCreatedJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(protected Model $product)
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // $this->product->load(['variation' => function ($query) {
        //     $query->with('mainImage')->color();
        // }]);
        // create a html message for telegram , wrapped in product link says that a new product has been created in Bold and send it to the telegram channel and include the product link

        $message = "<b>New Product Created, Need Admin Approval</b> \n";
        $message .= "<b>Product ID:</b> {$this->product->id} \n";
        $message .= "<b>Product Name:</b> {$this->product->title} \n";
        $message .= "<b>Product Price:</b> {$this->product->price} EGP \n";
        $message .= "<b>Product Link:</b> " . route('admin.products.edit', $this->product->id) . "\n";



        Telegram::sendMessage([
            'chat_id' => -1001304158950,
            'parse_mode' => 'HTML',
            'text' => $message,
        ]);
    }
}
