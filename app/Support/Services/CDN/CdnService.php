<?php

namespace App\Support\Services\CDN;

interface CdnService
{
    public function purge($fileName);
}
