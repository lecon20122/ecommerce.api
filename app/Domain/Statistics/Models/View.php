<?php

namespace App\Domain\Statistics\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class View extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    public static function createViewLog(Model $model): View
    {
        return $model->views()->create([
            'ip_address' => request()->ip() ?? null,
            'referer' => request()->headers->get('referer') ?? null,
            'user_agent' => request()->userAgent() ?? null,
            'user_id' => auth()->id() ?? null,
        ]);
    }

    public function viewable(): MorphTo
    {
        return $this->morphTo();
    }
}
