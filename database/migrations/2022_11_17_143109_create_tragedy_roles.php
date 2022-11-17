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
        Schema::create('tragedy_roles', function (Blueprint $table) {
            $table->id()->comment('役職マスタ');
            $table->timestamp("created_at")->useCurrent();
            $table->timestamp("updated_at")->useCurrent();
            $table->softDeletes();

            $table->string('name')->unique()->comment('役職名');
            $table->integer('hostility_type')->comment('2:絶対友好無視, 1:友好無視, 0:友好無視でない');
            $table->boolean('is_immortality')->comment('true:不死');
            $table->integer('max_count')->default(10)->comment('採用上限人数');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tragedy_roles');
    }
}
