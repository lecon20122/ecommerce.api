<?php

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
        Schema::create('variation_type_values', function (Blueprint $table) {
            $table->id();
            $table->foreignId('variation_type_id')->constrained()->restrictOnDelete();
            $table->json('value');
            //            $table->string('slug');
//            $table->string('hex_value')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('variation_type_values');
    }
};
