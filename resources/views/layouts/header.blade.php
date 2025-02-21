<?php
$user = Auth::user() ?? null;
$bodyClass ??= '';
?>
<header>
    <div class="my-link">
        @auth
            @if(!empty($user->profile_img_url))
            <label class="icon_wrapper" for="menu_toggle">
                <img src="{{ $user->profile_img_url }}" alt="{{ $user->name }}">
            </label>
            @else
            <label class="text_wrapper" for="menu_toggle">
                <p>{{ __(':nameさん', ['name' => $user->name]) }}</p>
            </label>
            @endif
        @endauth
        <label for="menu_toggle" class="menu">MENU</label>
    </div>
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
            <li data-only_scenario_show="@lang('この機能は、脚本詳細画面でのみご利用いただけます。')">
                <button class="js-font_size_button">@lang('脚本 文字サイズ調整')</button>
            </li>
        </ul>
        <label for="menu_toggle" class="menu_bg_filter">&nbsp;</label>
    </div>
</header>

@if(!empty($isAdmin ?? false))
<div class="admin_header">
    {{ html()->a(route('admin.index'), 'Admin') }}
</div>
@endif
