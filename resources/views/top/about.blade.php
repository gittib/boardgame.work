@extends('layouts.layout')

@section('title', __('惨劇RoopeR脚本データベースについて'))

@section('body_class', 'top-faq')

@pushOnce('stack_headers')
<script type="application/ld+json">@json($markup)</script>
@endPushOnce

@section('bread')
@include('layouts.bread', ['breads' => [
    __('TOP') => route('top.index'),
    __('惨劇RoopeR脚本データベースについて') => route('top.about'),
]])
@endsection

@section('contents')
    <h1>@lang('惨劇RoopeR脚本データベースについて')</h1>
    <dl>
    @foreach($faqs as $faq)
        <dt>Q. @lang($faq['q'])</dt>
        <dd>A. {!! nl2br(e(__($faq['a']))) !!}</dd>
    @endforeach
    </dl>
@endsection
