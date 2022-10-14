<?php

namespace App\Domain\Variation\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Translatable\HasTranslations;

class SizeDescription extends Model
{
    use HasFactory, HasTranslations;

    public array $translatable = ['name', 'guide'];
    protected $fillable = ['name', 'guide'];

    public function sizeDescriptionValues(): HasMany
    {
        return $this->hasMany(SizeDescriptionValue::class);
    }
}
