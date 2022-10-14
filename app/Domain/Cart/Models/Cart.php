<?php

namespace App\Domain\Cart\Models;


use App\Domain\Variation\Models\Variation;
use Domain\User\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'uuid'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function variations(): BelongsToMany
    {
        return $this->belongsToMany(Variation::class)->withPivot(['quantity', 'price']);
    }
}
