<?php

namespace App\Domain\User\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Favorite extends Pivot
{
    use HasFactory;
    protected $table = 'favorites';
}
