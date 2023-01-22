@extends('layouts.layout')

@section('contents')
    <div class="centering_wrapper">
        <div class="centering_frame">
            <p>@lang('右上のリンクからログインしてください。')</p>
        </div>
        <div class="mt-24">
            <a href="{{ route('top.index') }}">@lang('TOPへ')</a>
        </div>
    </div>
@endsection
