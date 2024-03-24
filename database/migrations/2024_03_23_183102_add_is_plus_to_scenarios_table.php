<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIsPlusToScenariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('mysql_for_migration')->table('scenarios', function (Blueprint $table) {
            $table->boolean('is_plus')->default(false)->after('set_id')->comment('trueの場合、プラス対応脚本');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('mysql_for_migration')->table('scenarios', function (Blueprint $table) {
            $table->dropColumn('is_plus');
        });
    }
}
