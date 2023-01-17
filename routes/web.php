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

if(config('app.debug')) {
    Route::view('url-list', 'url-list');
}

Route::namespace('App\Http\Controllers')->group(function() {
    Route::any('/', 'TopController@index')->name('top.index');
    Route::any('language/setting/to/{lang}', 'LanguageController@trans')->name('language.trans');
    Route::resource('tragedy-set', 'TragedySetController', ['only' => ['index', 'show']]);
    Route::resource('scenario', 'ScenarioController', ['only' => ['index', 'show']]);

    Route::namespace('Auth')->middleware('guest')->group(function() {
        Route::get('login', 'LoginController@login')->name('login');

        Route::get('auth/twitter', 'TwitterController@redirectToProvider')->name('auth.twitter.login');
        Route::get('auth/twitter/callback', 'TwitterController@providerCallback')->name('auth.twitter.callback');
    });
    Route::get('auth/logout', 'Auth\LoginController@logout')->name('auth.logout');

    Route::middleware('auth')->group(function() {
        Route::get('home', 'UserController@mypage')->name('my_page');
        Route::resource('my-scenario', 'MyScenarioController', ['except' => ['show']]);
        Route::match(['post', 'put'], 'my-scenario/creating/preview', 'MyScenarioController@preview')->name('my-scenario.preview');
        Route::post('my-scenario/upload/json', 'MyScenarioController@storeFromJson')->name('my-scenario.store_from_json');
    });

    Route::post('file/file/upload/chunk', 'FileController@uploadFirstChunk')->name('file.upload.chunk.first');
    Route::post('file/file/upload/chunk/{media}', 'FileController@uploadChunk')->name('file.upload.chunk.add');
});

Route::fallback(function() {
    return response()->view('errors.404', [], 404);
});
