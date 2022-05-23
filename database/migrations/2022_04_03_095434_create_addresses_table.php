<?php

use App\Domain\Location\Enums\AddressTypeEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->string('street');
            $table->unsignedInteger('building');
            $table->unsignedInteger('floor');
            $table->unsignedInteger('apartment_number');
            $table->foreignId('district_id')->constrained();
            $table->enum('type', [AddressTypeEnum::HOME->value, AddressTypeEnum::OFFICE->value])->nullable();
            $table->string('nearby_landmark')->nullable();
            $table->morphs('addressable');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addresses');
    }
};
