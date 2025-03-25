@extends('layouts.layout')

@section('title', __('惨劇RoopeR脚本データベースについて'))

@section('body_class', 'top-faq')

@pushOnce('stack_headers')
<script type="application/ld+json">@json($markup)</script>
@endPushOnce

@section('bread')
<x-breadcrumbs :pageType=\App\Enums\PageType::About />
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
