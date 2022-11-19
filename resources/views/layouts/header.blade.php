<?php
$user = Auth::user() ?? null;
?>
<header>
    @auth
        <a class="my-link" href="{{ route('my_page') }}">
            @if(!empty($user->profile_img_url))
            <div class="icon_wrapper">
                <img src="{{ $user->profile_img_url }}" alt="{{ $user->name }}">
            </div>
            @endif
        </a>
    @else
        <a class="my-link" href="{{ route('auth.twitter.login') }}">
            Twitterでログイン
        </a>
    @endauth
</header>