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

class NewSellerRequestJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(protected Model $sellerRequest)
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
        $shop = "\u{1F3E0}";
        $alert = "\u{1F7E2}";
        $message = "<b>{$alert} {$shop} New Seller Request {$alert}</b>\n";
        $message .= "<b>Seller ID:</b> {$this->sellerRequest->id}\n";
        $message .= "<b>Seller Brand Name:</b> {$this->sellerRequest->brand_name}\n";
        $message .= "<b>Seller Sells:</b> {$this->sellerRequest->what_store_sells}\n";

        Telegram::sendMessage([
            'chat_id' => config('telegram.bot.modaje.channel_id'),
            'parse_mode' => 'HTML',
            'text' => $message,
        ]);
    }
}
