<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTragedyRoles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('mysql_for_migration')->create('tragedy_roles', function (Blueprint $table) {
            $table->id()->comment('役職マスタ');
            $table->timestamp("created_at")->useCurrent();
            $table->timestamp("updated_at")->useCurrent();
            $table->softDeletes();

            $table->string('code')->unique()->comment('役職コード');
            $table->integer('hostility_type')->comment('3:傀儡友好無視、2:絶対友好無視, 1:友好無視, 0:友好無視でない');
            $table->boolean('is_immortality')->comment('true:不死');
            $table->integer('max_count')->nullable()->comment('採用上限人数');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('mysql_for_migration')->dropIfExists('tragedy_roles');
    }
}
