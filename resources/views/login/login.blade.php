@extends('layouts.layout')

@section('contents')
    <div class="centering_wrapper">
        <div>
            <p>@lang('以下のボタンからログインしてください。')</p>
        </div>
        <div class="mt-16 centering_frame">
            <a href="{{ route('auth.twitter.login') }}">
                <img src="/images/sign-in-with-twitter.png">
            </a>
        </div>
        <div class="mt-32">
            <a href="{{ route('top.index') }}">@lang('TOPへ')</a>
        </div>
    </div>
@endsection
