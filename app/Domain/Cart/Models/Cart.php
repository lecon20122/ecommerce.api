<?php

namespace App\Domain\Cart\Models;


use App\Domain\Store\Models\Store;
use App\Domain\Variation\Models\Variation;
use Domain\User\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\DB;

class Cart extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function variation(): BelongsTo
    {
        return $this->belongsTo(Variation::class);
    }

    public function store(): BelongsTo
    {
        return $this->belongsTo(Store::class);
    }

    public function parentVariation(): BelongsTo
    {
        return $this->belongsTo(Variation::class, 'variation_parent_id');
    }

    public function StockCount($variation_id)
    {
        return DB::table('stocks')
            ->selectRaw('sum(amount) as count')
            ->where('variation_id', '=', $variation_id)
            ->first()
            ->count;
    }
}
