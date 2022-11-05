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

Route::get('/', function () {
    return view('welcome');
});

Route::namespace('App\Http\Controllers')->group(function() {
    Route::middleware('auth')->group(function() {
        Route::get('my-page', 'UserController@mypage')->name('my_page');
    });

    Route::post('file/file/upload/chunk', 'FileController@uploadFirstChunk')->name('file.upload.chunk.first');
    Route::post('file/file/upload/chunk/{media}', 'FileController@uploadChunk')->name('file.upload.chunk.add');
});
