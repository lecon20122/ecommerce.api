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
        Schema::create('seller_requests', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('phone')->unique();
            $table->string('pickup_location');
            $table->string('company_register');
            $table->string('what_store_sells')->nullable();
            $table->string('social_media')->nullable();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('store_id')->nullable()->constrained();
            $table->foreignId('approved_by')->nullable()->constrained('admins');
            $table->timestamp('approved_at')->nullable();
            $table->foreignId('rejected_by')->nullable()->constrained('admins');
            $table->timestamp('rejected_at')->nullable();
            $table->string('rejected_reason')->nullable();
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
        Schema::dropIfExists('seller_requests');
    }
};
