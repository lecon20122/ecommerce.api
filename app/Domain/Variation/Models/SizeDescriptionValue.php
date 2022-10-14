<?php

namespace App\Domain\Variation\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SizeDescriptionValue extends Model
{
    use HasFactory;

    protected $fillable = ['variation_id', 'size_description_id', 'value'];

    public function sizeDescription(): BelongsTo
    {
        return $this->belongsTo(SizeDescription::class);
    }

    public function variation(): BelongsTo
    {
        return $this->belongsTo(Variation::class);
    }
}
