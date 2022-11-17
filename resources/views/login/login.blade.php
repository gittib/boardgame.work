@extends('layouts.layout')

@section('contents')
    <div class="centering_wrapper">
        <div class="centering_frame">
            <ul>
                <li><a href="{{ route('auth.twitter.login') }}">Twitterでログイン</a></li>
            </ul>
        </div>
    </div>
@endsection
