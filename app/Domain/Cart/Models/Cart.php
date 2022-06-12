<?php

namespace App\Domain\Cart\Models;

use App\Domain\Product\Models\Variation;
use Domain\User\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = ['user_id' , 'variation_id' , 'notes' , 'qty'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function variation()
    {
        return $this->belongsTo(Variation::class);
    }
}
