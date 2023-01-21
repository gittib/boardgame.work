<?php
$trLink = '<a href="http://bakafire.main.jp/rooper/sr_top.htm" target="_blank">'.__('惨劇RoopeR').'</a>';
$webManagerLink = '<a href="https://twitter.com/gittib_gittib" target="_blank">ペンスキー</a>';
$aLang = [
    'ja' => '日本語',
    'en' => 'English',
];
?>
<footer>
    <div>
        <form action="{{route('language.trans') }}">
            <div class="select_wrapper">
                {{ Form::select('lang', $aLang, null, ['placeholder' => __('言語設定'), 'class' => 'js-language_setting']) }}
            </div>
        </form>
        @lang('messages.footer', ['trlink' => $trLink, 'manager' => $webManagerLink])<br>
        <a href="http://bakafire.main.jp/rooper/sr_dl_04_sozai.htm" target="_blank">惨劇コモンズ by BakaFire, 紺ノ玲</a> is licensed under a <a href="http://creativecommons.org/licenses/by-sa/2.1/jp/" target="_blank">Creative Commons 表示 - 継承 2.1 日本 License</a>
    </div>
</footer>
