<?php

namespace App\App\Console\Commands;

use Illuminate\Console\Command;
use MeiliSearch\Client;

class MeiliSearchFilterableAttributesCommand extends Command
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
    public function handle()
    {
        $client = new Client('http://127.0.0.1:7700');
        $client->index('products')->updateFilterableAttributes(['category_ids']);
        return 0;
    }
}
