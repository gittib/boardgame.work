<?php
?>
@extends('layouts.layout')

@section('title', __('惨劇脚本一覧'))

@section('body_class', 'scenario-index')

@section('contents')
<h1>@lang('ネタバレ注意！')</h1>

<div class="">
    <p>@lang('messages.are_you_writer.notice')</p>

    <ul>
    @foreach(__('messages.are_you_writer.questions') as $question)
    <?php $qIndex = $loop->index; ?>
        <li>
            <div class="q">{!! $question['q'] !!}</div>
            <div class="a">
            @foreach($question['answers'] as $answer)
                <label>
                    {{ Form::radio('answer['.$qIndex.']', $loop->index) }}
                    {!! $answer !!}
                </label>
            @endforeach
            </div>
        </li>
    @endforeach
    </ul>
</div>
@endsection

@section('additional_scripts')
<script>
$('.js-show_title').on('click', async () => {
    const {result} = await myConfirm("@lang('脚本名を表示します。よろしいですか？')");
    if (result == 'ok') {
        $('ul.scenario_list .title').show();
        $('.js-hide_title').show();
        $('.js-show_title').hide();
    }
});
$('.js-hide_title').on('click', () => {
    $('ul.scenario_list .title').hide();
    $('.js-hide_title').hide();
    $('.js-show_title').show();
});
</script>
@endsection
