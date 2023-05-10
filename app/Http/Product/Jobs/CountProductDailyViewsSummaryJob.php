<?php

namespace App\Http\Product\Jobs;

use App\Domain\Product\Models\Product;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Carbon;
use Telegram\Bot\Laravel\Facades\Telegram;

class CountProductDailyViewsSummaryJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $tries = 3;
    public $timeout = 60 * 5;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
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
        $products = Product::all(['id', 'store_id']);

        $totalCount = 0;

        $appTimeZone = config('app-settings.timezone');

        echo "Timezone: {$appTimeZone}\n";

        $yesterdayDate = Carbon::yesterday($appTimeZone)->format('Y-m-d');

        foreach ($products as $product) {

            if ($product->viewSummary()->where('summary_date', $yesterdayDate)->first()) {
                echo "Product: {$product->id} already counted\n";
                continue;
            }

            $productCount =
                $product
                ->views()
                ->whereDate('created_at', $yesterdayDate)
                ->count();



            $totalCount += $productCount;


            $product->viewSummary()->create([
                'views' => $productCount,
                'store_id' => $product->store_id,
                'summary_date' => $yesterdayDate,
            ]);
        }


        $message = "<b>Environment:</b> " . config('app.env') . "\n";
        $message .= "<b>Product Daily Views Summary</b> \n";
        $message .= "<b>Summary Date:</b> " . $yesterdayDate . "\n";
        $message .= "<b>Current Time:</b> " . Carbon::now($appTimeZone)->format('Y-m-d H:i:s') . "\n";
        $message .= "<b>Products Count:</b> {$products->count()} \n";
        $message .= "<b>Products Views Summary: {$totalCount}</b> \n";




        Telegram::sendMessage([
            'chat_id' => config('telegram.bots.modaje.channel_id'),
            'parse_mode' => 'HTML',
            'text' => $message,
        ]);
    }
}
