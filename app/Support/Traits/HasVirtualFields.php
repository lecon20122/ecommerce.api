<?php

namespace App\Support\Traits;

trait HasVirtualFields
{
    public function save(array $options = [])
    {
        if (isset($this->virtualFields)) {
            $this->attributes = array_diff_key($this->attributes, array_flip($this->virtualFields));
        }

        $return = parent::save($options);
        $this->refresh(); // Refresh the model for the new virtual column values
        return $return;
    }
}
