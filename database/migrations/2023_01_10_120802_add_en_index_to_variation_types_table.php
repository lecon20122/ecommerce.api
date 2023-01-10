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
        Schema::table('variation_types', function (Blueprint $table) {
            $table->string('en')->virtualAs("JSON_EXTRACT(type, '$.en')");
            $table->string('ar')->virtualAs("JSON_EXTRACT(type, '$.ar')");
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
        Schema::table('variation_types', function (Blueprint $table) {
            //
        });
    }
};
