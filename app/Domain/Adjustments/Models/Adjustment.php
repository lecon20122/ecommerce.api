<?php

namespace App\Domain\Adjustments\Models;

use App\Domain\Adjustments\Enums\AdjustmentType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Adjustment extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $casts = [
        'data' => 'json',
        'is_locked' => 'boolean',
        'is_included' => 'boolean',
        'type' => AdjustmentType::class,
    ];

    public function adjustable(): MorphTo
    {
        return $this->morphTo();
    }

    public function getType(): AdjustmentType
    {
        return $this->type;
    }

    public function getAdjustable(): Adjustable
    {
        return $this->adjustable;
    }

    public function setAdjustable(Adjustable $adjustable): void
    {
        $this->adjustable_type = $adjustable->getMorphClass();
        $this->adjustable_id = $adjustable->id;
    }

    public function getAdjuster(): Adjuster
    {
        $adjusterType = $this->adjuster;
        if (class_exists($this->adjuster)) {
            return forward_static_call([$adjusterType, 'reproduceFromAdjustment'], $this);
        }
    }

    public function getOrigin(): ?string
    {
        return $this->origin;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function getAmount(): float
    {
        return floatval($this->amount);
    }

    public function setAmount(float $amount): void
    {
        $this->amount = $amount;
        $this->save();
    }

    public function getData(string $key = null)
    {
        return Arr::get($this->data, $key);
    }

    public function isCharge(): bool
    {
        return $this->amount > 0;
    }

    public function isCredit(): bool
    {
        return $this->amount < 0;
    }

    public function isIncluded(): bool
    {
        return (bool)$this->is_included;
    }

    public function isLocked(): bool
    {
        return (bool)$this->is_locked;
    }

    public function lock(): void
    {
        $this->is_locked = true;
        $this->save();
    }

    public function unlock(): void
    {
        $this->is_locked = false;
        $this->save();
    }
}
