<?php

//create a class ByPassService

namespace App\Domain\Admin\Services;

use App\Domain\Admin\Models\ByPass;

class ByPassService

{
    public function createByPass(array $data)
    {
        ByPass::query()->create($data);
    }

    public function getByPasses()
    {
        return ByPass::query()->get();
    }

    public function deleteByPass(int $id)
    {
        ByPass::query()->find($id)->delete();
    }

    public function updateByPass(int $id, array $data)
    {
        ByPass::query()->find($id)->update($data);
    }
}
