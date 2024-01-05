<?php
$user = Auth::user() ?? null;
$bodyClass ??= '';
?>
<header>
    <label class="my-link" for="menu_toggle">
        @auth
            @if(!empty($user->profile_img_url))
            <div class="icon_wrapper">
                <img src="{{ $user->profile_img_url }}" alt="{{ $user->name }}">
            </div>
            @else
            <div class="text_wrapper">
                <p>{{ __(':nameさん', ['name' => $user->name]) }}</p>
            </div>
            @endif
        @endauth
        <span class="menu">MENU</span>
    </label>
    <div class="menu_wrapper">
        <input type="checkbox" id="menu_toggle">
        <ul class="header_menu">
            <li><a href="{{ route('top.index') }}">@lang('TOP')</a></li>
            @auth
            <li><a href="{{ route('my_page') }}">@lang('マイページ')</a></li>
            @endauth
            <li><a href="{{ route('scenario.index') }}">@lang('脚本一覧')</a></li>
            <li><a href="{{ route('scenario.quiz-index') }}">@lang('指針クイズ')</a></li>
            @guest
            <li><a href="{{ route('auth.twitter.login') }}"><img src="/images/sign-in-with-twitter.png"></a></li>
            @endguest
        </ul>
        <label for="menu_toggle" class="menu_bg_filter"></label>
    </div>
</header>
