@extends('layouts.layout')

@section('body_class', 'top-index')

@section('contents')
    <h1>@lang('惨劇RoopeR脚本データベース')</h1>
    <ul>
        <li class="mx-center mt-32 mb-32"><a href="{{ route('scenario.index') }}">@lang('脚本一覧')</a></li>
        <li class="mx-center mt-32 mb-32"><a href="{{ route('my_page') }}">@lang('脚本を作る')</a></li>
    </ul>
@endsection
