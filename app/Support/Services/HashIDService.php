<?php

namespace App\Support\Services;

use Hashids\Hashids;

class HashIDService
{
    public Hashids $hashIds;

    public function __construct()
    {
        $this->hashIds = new Hashids(config('app.key'), 10);
    }

    public function encode($id): string
    {
        return $this->hashIds->encode($id);
    }

    public function decode($hashId)
    {
        if (is_int($hashId))
            return $hashId;
        return $this->hashIds->decode($hashId)[0];
    }
}
