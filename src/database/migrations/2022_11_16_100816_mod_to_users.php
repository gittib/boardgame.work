<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('mysql_for_migration')->table('users', function (Blueprint $table) {
            $table->dropColumn([
                'email',
                'password',
            ]);

            $table->string('profile_img_url')->nullable()->comment('プロフィール画像URL');
            $table->string('twitter_id')->nullable()->comment('twitter ID');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('mysql_for_migration')->table('users', function (Blueprint $table) {
            $table->dropColumn([
                'profile_img_url',
                'twitter_id',
            ]);

            $table->string('email');
            $table->string('password');
        });
    }
}
