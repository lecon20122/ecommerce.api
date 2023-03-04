<?php

namespace App\Support\Traits;

use App\Domain\Admin\Models\Admin;
use App\Domain\Store\Models\Store;
use App\Domain\Variation\Models\VariationType;
use Domain\User\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

trait FeatureTestTrait
{
    public function authorizedUser(): Collection|Model
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'web');
        return $user;
    }

    public function authorizedAdmin(): Collection|Model
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        return $admin;
    }

    public function unAuthorizedUser(): Collection|Model
    {
        $unAuthorizedUser = User::factory()->create();
        $this->authorizedUser();
        return $unAuthorizedUser;
    }

    public function createColorType(): Model|Builder
    {
        return VariationType::query()->create([
            'type' => [
                'ar' => 'اللون',
                'en' => 'color',
            ],
            'is_mediable' => true,
            'is_stockable' => false,
        ]);
    }

    public function createSizeType(): Model|Builder
    {
        return VariationType::query()->create([
            'type' => [
                'ar' => 'الحجم',
                'en' => 'size',
            ],
            'is_mediable' => false,
            'is_stockable' => true,
        ]);
    }

    public function createColorValue(): Model|Builder
    {
        $colorType = $this->createColorType();
        return $colorType->variationTypeValues()->create([
            'value' => [
                'ar' => 'أحمر',
                'en' => 'red',
            ],
        ]);
    }

    public function createSizeValue(): Model|Builder
    {
        $sizeType = $this->createSizeType();
        return $sizeType->variationTypeValues()->create([
            'value' => [
                'ar' => 'كبير',
                'en' => 'big',
            ],
        ]);
    }

    // create approved store
    public function createApprovedStore(User $user): Model|Builder
    {
        $admin = $this->authorizedAdmin();
        return Store::factory()->create([
            'user_id' => $user->id,
            'approved_at' => now(),
            'approved_by' => $admin->id
        ]);
    }
}