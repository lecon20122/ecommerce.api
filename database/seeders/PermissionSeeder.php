<?php

namespace Database\Seeders;

use App\Support\Enums\RolesEnum;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $roles = [
            RolesEnum::SUPER_ADMIN->value,
            RolesEnum::CUSTOMER_SERVICE->value,
            RolesEnum::MARKETING->value,
        ];

        foreach ($roles as $role) {
            Role::create(['name' => $role , 'guard_name' => 'admin']);
        }
    }
}
