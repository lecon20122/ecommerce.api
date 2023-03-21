<?php

namespace App\Domain\Store\Models;

use App\Domain\Admin\Models\Admin;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SellerRequest extends Model
{
    use HasFactory;

    // guarded
    protected $guarded = ['id', 'created_at', 'updated_at'];

    // relations

    public function store()
    {
        return $this->belongsTo(Store::class);
    }

    // user

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // approved by

    public function approvedBy()
    {
        return $this->belongsTo(Admin::class, 'approved_by');
    }

    // rejected by

    public function rejectedBy()
    {
        return $this->belongsTo(Admin::class, 'rejected_by');
    }
}
