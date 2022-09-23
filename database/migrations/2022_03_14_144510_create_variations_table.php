<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('variations', function (Blueprint $table) {
            $table->id();
            $table->json('title')->nullable();
            $table->json('type')->nullable();
            $table->foreignId('product_id')->constrained();
            $table->foreignId('variation_type_value_id')->constrained();
            $table->decimal('price')->unsigned()->default(0);
            $table->foreignId('variation_type_id')->constrained();
            $table->string('sku')->nullable();
            $table->integer('order')->nullable();
            $table->unsignedBigInteger('parent_id')->nullable();
            $table->softDeletes();
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
        Schema::dropIfExists('variations');
    }
};
