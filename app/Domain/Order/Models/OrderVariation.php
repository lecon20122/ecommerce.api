<?php

namespace App\Domain\Order\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderVariation extends Model
{
    protected $table = 'order_variation';
    use HasFactory;
}
