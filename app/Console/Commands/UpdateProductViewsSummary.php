<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class UpdateProductViewsSummary extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'views:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update Product Views Summary';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        return Command::SUCCESS;
    }
}
