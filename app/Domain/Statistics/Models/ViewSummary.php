<?php

namespace App\Domain\Statistics\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ViewSummary extends Model
{

    protected $table = 'view_summaries';
    use HasFactory;


    protected $fillable = ['viewable_id', 'viewable_type', 'views', 'summary_date', 'store_id'];

    protected $dates = ['summary_date', 'created_at', 'updated_at'];

    public function viewable()
    {
        return $this->morphTo();
    }
}
