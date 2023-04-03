<?php

use App\Support\Enums\StateEnums;
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
            $table->string('slug');
            $table->unsignedInteger('price')->default(0);
            $table->foreignId('store_id')->constrained();
            $table->string('status')->default(StateEnums::DRAFT->value);
            $table->boolean('is_approved')->default(false);
            $table->foreignId('admin_id')->nullable()->constrained();
            $table->softDeletes();
            $table->timestamps();

            $table->index('slug');
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
