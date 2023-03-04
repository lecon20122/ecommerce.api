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
            $table->string('state')->default(StateEnums::PROCESSING->value);
            $table->string('notes')->nullable(); // done
            $table->unsignedInteger('total')->default(0)->nullable();
            $table->unsignedInteger('subtotal')->default(0)->nullable(); // done
            $table->unsignedInteger('delivery_fees')->default(0)->nullable(); // after calc
            $table->unsignedInteger('commission')->default(0)->nullable(); // after calc
            $table->unsignedInteger('net')->default(0)->nullable(); // after calc

            $table->foreignId('user_id')->nullable()->constrained(); // done
            $table->foreignId('store_id')->nullable()->constrained(); // done
            $table->foreignId('shipping_address_id')->nullable()->constrained('addresses'); // done
            $table->timestamp('packaged_at')->nullable();
            $table->timestamp('shipped_at')->nullable();
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
