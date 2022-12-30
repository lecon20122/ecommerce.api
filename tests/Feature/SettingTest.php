<?php

namespace Tests\Feature;

use App\Domain\Admin\Models\Admin;
use App\Domain\Setting\Models\Setting;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Tests\TestCase;

class SettingTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testAdminCanStoreSettings()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');

        $data = [
            'key' => 'Logo',
            'value' => 'Modaje'
        ];

        $this->post(route('admin.store.settings'), $data)->assertRedirect();

        $this->assertNotNull(Setting::first());
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testAdminCanUpdateSettings()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $setting = Setting::factory()->create();

        $data = [
            'key' => 'mustafa',
        ];

        $this->post(route('admin.update.settings', ['setting' => $setting]), $data)->assertRedirect();

        $this->assertEquals('mustafa', Setting::first()->key);
    }

    public function testAdminCanDestroySetting()
    {
        $admin = Admin::factory()->create();
        $this->actingAs($admin, 'admin');
        $setting = Setting::factory()->create();
        $this->post(route('admin.delete.settings', ['setting' => $setting]))->assertRedirect();

        $this->assertNull(Setting::first());

    }

    public function testAdminCanUploadLogoSetting()
    {
        $admin = Admin::factory()->create();

        $this->actingAs($admin, 'admin');

        $setting = Setting::factory()->create();

        Storage::fake('public');

        $data = [
            'images' => [
                0 => UploadedFile::fake()->image("test.webp", 100, 100)
            ]
        ];
        $this->post(route('admin.upload.logo.settings', ['setting' => $setting]), $data)->assertRedirect();
        $this->assertCount(1, Media::all());
    }

}
