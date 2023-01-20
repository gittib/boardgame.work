<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedia extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('media', function (Blueprint $table) {
            $table->uuid('id')->comment('アップロードされたファイル');
            $table->timestamp("created_at")->useCurrent();
            $table->timestamp("updated_at")->useCurrent();
            $table->softDeletes();
            $table->nullableMorphs('mediable');
            $table->string('role')->nullable()->comment('役割');
            $table->unsignedBigInteger('user_id')->nullable()->comment('アップロードユーザID');
            $table->text('file_name')->comment('ファイル名');
            $table->string('ext')->default('txt')->comment('ファイル拡張子');
            $table->text('file_path')->comment('ファイルパス');
            $table->text('thumbnail_file_path')->nullable()->comment('サムネイル画像ファイルパス');

            $table->primary('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('media');
    }
}
