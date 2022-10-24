<?php

namespace App\Domain\Cart\Models;


use App\Contracts\CartContract;
use App\Domain\Cart\Enums\CartStateEnums;
use App\Domain\Variation\Models\Variation;
use App\Http\Cart\Observers\CartVariationObserver;
use Domain\User\Models\User;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Query\Builder;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'uuid'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function itemCount(): int
    {
        return $this->variations()->sum('quantity');
    }

    public function variations(): BelongsToMany
    {
        return $this->belongsToMany(Variation::class)->withPivot(['quantity', 'price', 'total']);
    }

    public function scopeActives(Builder $query): Builder
    {
        return $query->whereIn('state', CartStateEnums::getActivesStates());
    }
}
