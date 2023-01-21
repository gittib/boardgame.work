<?php
$user = Auth::user() ?? null;
$bodyClass ??= '';
?>
<header>
    @auth
        <a class="my-link" href="{{ route('my_page') }}">
            @if($bodyClass != 'user-mypage')
                <span>@lang('マイページへ')</span>
            @endif
            @if(!empty($user->profile_img_url))
            <div class="icon_wrapper">
                <img src="{{ $user->profile_img_url }}" alt="{{ $user->name }}">
            </div>
            @else
            <div class="text_wrapper">
                <p>{{ __(':nameさん', ['name' => $user->name]) }}</p>
            </div>
            @endif
        </a>
    @else
        <a class="my-link" href="{{ route('auth.twitter.login') }}">
            <img src="/images/sign-in-with-twitter.png">
        </a>
    @endauth
</header>
