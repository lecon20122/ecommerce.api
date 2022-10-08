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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->json('title');
            $table->string('slug')->unique();
            $table->integer('price')->unsigned();
            $table->foreignId('store_id')->constrained();
            $table->dateTime('live_at')->nullable();
            $table->boolean('is_approved')->nullable();
            $table->foreignId('admin_id')->nullable()->constrained();
            $table->text('meta_keywords')->nullable();
            $table->text('meta_description')->nullable();
            $table->decimal('stock', 15, 4)->default(0);
            $table->decimal('original_price', 15, 4)->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
