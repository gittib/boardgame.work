<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::namespace('App\Http\Controllers')->group(function() {
    Route::any('/', 'TopController@index')->name('top.index');

    Route::namespace('Auth')->middleware('guest')->group(function() {
        Route::get('login', 'LoginController@login')->name('login');

        Route::get('auth/twitter', 'TwitterController@redirectToProvider')->name('auth.twitter.login');
        Route::get('auth/twitter/callback', 'TwitterController@providerCallback')->name('auth.twitter.callback');

        Route::get('auth/logout', 'LoginController@logout')->name('auth.logout');
    });

    Route::middleware('auth')->group(function() {
        Route::get('home', 'UserController@mypage')->name('my_page');
    });

    Route::post('file/file/upload/chunk', 'FileController@uploadFirstChunk')->name('file.upload.chunk.first');
    Route::post('file/file/upload/chunk/{media}', 'FileController@uploadChunk')->name('file.upload.chunk.add');
});
