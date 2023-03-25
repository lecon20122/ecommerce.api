<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Telegram\Bot\Laravel\Facades\Telegram;

class SellerRequestApprovedJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(protected Model $store)
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
        $approved = "\u{2705}";

        $shop = "\u{1F3E0}";
        $message = "<b>{$approved} {$shop} Store Approved {$approved}</b>\n";
        $message .= "<b>Seller ID:</b> {$this->store->id}\n";
        $message .= "<b>Seller Brand Name:</b> {$this->store->name}\n";

        Telegram::sendMessage([
            'chat_id' => config('telegram.bots.modaje.channel_id'),
            'parse_mode' => 'HTML',
            'text' => $message,
        ]);
    }
}
