<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStoryToScearios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('scenarios', function (Blueprint $table) {
            $table->text('story')->nullable()->after('feature')->comment('ストーリー');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('scenarios', function (Blueprint $table) {
            $table->dropColumn('story');
        });
    }
}
