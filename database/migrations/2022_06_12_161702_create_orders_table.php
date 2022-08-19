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
            $table->uuid();
            $table->string('state')->default(StateEnums::PROCESSING);
            $table->string('notes')->nullable();
            $table->decimal('total')->default(0)->nullable();
            $table->decimal('subtotal')->default(0)->nullable();
            $table->decimal('delivery_fees')->default(0)->nullable();
            $table->decimal('commission')->default(0)->nullable();
            $table->decimal('net')->default(0)->nullable();

            $table->foreignId('store_id')->constrained();
            $table->foreignId('user_id')->nullable()->constrained();
            $table->foreignId('shipping_address_id')->constrained('addresses');
            $table->foreignId('pickup_address_id')->constrained('addresses');
            $table->foreignId('shipping_type_id')->constrained();
            $table->timestamp('placed_at')->nullable();
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
