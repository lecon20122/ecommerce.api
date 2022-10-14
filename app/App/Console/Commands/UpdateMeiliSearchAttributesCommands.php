<?php

namespace App\App\Console\Commands;

use App\Domain\Cart\Models\Domain\Variation\Services\VariationService;
use Exception;
use Illuminate\Console\Command;
use MeiliSearch\Client;

class UpdateMeiliSearchAttributesCommands extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'index:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create Meilisearch Index';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(): int
    {
        try {
            $client = new Client('http://127.0.0.1:7700', config('scout.meilisearch.key' ));
            $client->index('products')
                ->updateFilterableAttributes(['category_ids', 'stores', 'price', ...(new VariationService)->getFacetsArray()]);
            $client->index('products')
                ->updateSortableAttributes(['price', 'created_at']);
            return 0;
        } catch (Exception $exception) {
            logger()->error($exception->getMessage());
            return 0;
        }
    }
}
