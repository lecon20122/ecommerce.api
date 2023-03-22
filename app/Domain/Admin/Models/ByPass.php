<?php

namespace App\Domain\Admin\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ByPass extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];


    //expired scope
    public function scopeExpired($query)
    {
        return $query->where('expires_at', '<', now());
    }

    //not expired scope
    public function scopeNotExpired($query)
    {
        return $query->where('expires_at', '>=', now());
    }
}
