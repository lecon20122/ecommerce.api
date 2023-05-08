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
        $approvedActiveProducts = Product::approved()->active()->get();

        $totalCount = 0;

        foreach ($approvedActiveProducts as $product) {
            $productCount =
                $product
                ->views()
                ->whereDate('created_at', Carbon::yesterday('Africa/Cairo')->format('Y-m-d'))
                ->count();



            $totalCount += $productCount;

            if ($product->viewSummary()->where('summary_date', Carbon::yesterday()->startOfDay())->first()) continue;

            $product->viewSummary()->create([
                'views' => $productCount,
                'store_id' => $product->store_id ?? null,
                'summary_date' => Carbon::yesterday()->startOfDay(),
            ]);
        }


        $message = "<b>Environment:</b> " . config('app.env') . "\n";
        $message = "<b>Product Daily Views Summary</b> \n";
        $message .= "<b>Summary Date:</b> " . Carbon::yesterday()->startOfDay()->format('Y-m-d') . "\n";
        $message .= "<b>Products Count:</b> {$approvedActiveProducts->count()} \n";
        $message .= "<b>Products Views Summary: {$totalCount}</b> \n";




        Telegram::sendMessage([
            'chat_id' => config('telegram.bots.modaje.channel_id'),
            'parse_mode' => 'HTML',
            'text' => $message,
        ]);
    }
}
