<?php
namespace App\Utils;

use Illuminate\Support\ViewErrorBag;

/**
 * バリデーションエラーや確認画面からの修正ボタンで入力画面に戻ってきた際、
 * 各入力要素に適切な初期値をセットするためのヘルパー
 */
class InputHelper
{
    private ViewErrorBag $errors;


    public function __construct(ViewErrorBag $errors) {
        $this->errors = $errors;
    }

    /**
     * input要素やtextarea要素に対して適切な初期値を返す
     * @param key           Requestからデータを取得するキー。HTML要素のname属性値に相当する
     * @param defaultValue  Requestやold()にデータが無い場合の初期値
     */
    public function inputVal($key, $defaultValue = null) {
        if ($this->errors->any()) {
            return old($key) ?? $defaultValue;
        } else {
            return request()->input($key) ?? $defaultValue;
        }
    }

    /**
     * バリデーションエラー時に付与するエラークラスを返す
     */
    public function errClass($key, $className = 'is-error') {
        if ($this->errors->has($key)) {
            return ' '.$className.' ';
        } else {
            return '';
        }
    }
}

