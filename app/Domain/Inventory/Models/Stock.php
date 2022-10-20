<?php

namespace App\Domain\Inventory\Models;

use App\Domain\Variation\Models\Variation;
use App\Events\StockChangedEvent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Stock extends Model
{
    use HasFactory;

    protected $fillable = ['variation_id', 'amount'];

    protected $dispatchesEvents = [
        'created' => StockChangedEvent::class,
        'updated' => StockChangedEvent::class,
        'deleted' => StockChangedEvent::class,
    ];

    public function variation(): BelongsTo
    {
        return $this->belongsTo(Variation::class);
    }
}
