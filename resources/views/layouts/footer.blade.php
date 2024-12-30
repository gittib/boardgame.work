<?php
$aLang = [
    'ja' => '日本語',
    'en' => 'English',
];
?>
<footer>
    <div>
        <form action="{{route('language.trans') }}">
            <div class="select_wrapper">
                {{ html()->select('lang', $aLang)
                    ->placeholder('Language')
                    ->class('js-language_setting') }}
            </div>
        </form>
        @lang('messages.footer', [
            'trlink' => html()->a(__('messages.official_url'), __('惨劇RoopeR'))->target('_blank'),
            'manager' => html()->a('https://twitter.com/gittib_gittib', __('ペンスキー'))->target('_blank'),
        ])<br>
        <a href="http://bakafire.main.jp/rooper/sr_dl_04_sozai.htm" target="_blank">惨劇コモンズ by BakaFire, 紺ノ玲</a> is licensed under a <a href="http://creativecommons.org/licenses/by-sa/2.1/jp/" target="_blank">Creative Commons 表示 - 継承 2.1 日本 License</a>
    </div>
</footer>
