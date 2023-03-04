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
        Schema::create('product_attributes', function (Blueprint $table) {
            $table->id();
            $table->json('attribute');
            $table->boolean('is_filterable')->default(false);
            $table->timestamps();

            $table->string('en')->virtualAs("JSON_EXTRACT(attribute, '$.en')");
            $table->string('ar')->virtualAs("JSON_EXTRACT(attribute, '$.ar')");
            $table->unique(['en', 'ar']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_attributes');
    }
};
