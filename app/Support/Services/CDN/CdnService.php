<?php

namespace App\Domain\Cart\Models\Support\Services\CDN;

interface CdnService
{
    public function purge($fileName);
}
