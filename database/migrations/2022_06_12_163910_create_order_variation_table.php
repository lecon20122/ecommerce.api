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
        Schema::create('order_variation', function (Blueprint $table) {
            $table->id();
			$table->foreignId('order_id')->constrained();
            $table->foreignId('variation_id')->constrained();
			$table->integer('qty')->unsigned()->default(1);
			$table->string('notes')->nullable();
            $table->decimal('price')->unsigned();
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
        Schema::dropIfExists('order_variations');
    }
};
