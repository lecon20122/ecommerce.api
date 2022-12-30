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
        Schema::create('product_description', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained();
            $table->foreignId('product_attribute_id')->constrained();
            $table->json('value');


            $table->string('en')->virtualAs("JSON_EXTRACT(value, '$.en')");
            $table->string('ar')->virtualAs("JSON_EXTRACT(value, '$.ar')");
            $table->unique(['product_id', 'product_attribute_id', 'en', 'ar']);
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
        Schema::dropIfExists('product_descriptions');
    }
};
