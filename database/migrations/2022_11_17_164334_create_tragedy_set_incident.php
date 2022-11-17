<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTragedySetIncident extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tragedy_set_incident', function (Blueprint $table) {
            $table->id()->comment('惨劇セット-事件');
            $table->timestamp("created_at")->useCurrent();
            $table->timestamp("updated_at")->useCurrent();

            $table->unsignedBigInteger('tragedy_set_id')->comment('惨劇セットマスタID');
            $table->unsignedBigInteger('incident_id')->comment('事件マスタID');
            $table->integer('order')->comment('表示順序');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tragedy_set_incident');
    }
}
