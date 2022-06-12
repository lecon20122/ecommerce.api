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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
			$table->string('state')->default(StateEnums::PROCESSING);
			$table->string('notes');
			$table->decimal('total', 8,2)->default(0)->nullable();
			$table->decimal('cost', 8,2)->default(0)->nullable();
			$table->decimal('delivery_fees', 8,2)->default(0)->nullable();
			$table->decimal('commission', 8,2)->default(0)->nullable();
			$table->decimal('net', 8,2)->default(0)->nullable();
            
            $table->foreignId('store_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('shipping_address_id')->constrained('addresses');
            $table->foreignId('pickup_address_id')->constrained('addresses');
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
        Schema::dropIfExists('orders');
    }
};
