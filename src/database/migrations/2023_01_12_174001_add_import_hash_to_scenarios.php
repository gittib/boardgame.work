<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddImportHashToScenarios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('mysql_for_migration')->table('scenarios', function (Blueprint $table) {
            $table->string('import_hash')->nullable()->comment('JSONインポート識別用');
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
            $table->dropColumn('import_hash');
        });
    }
}
