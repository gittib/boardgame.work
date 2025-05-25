<?php
$likeRoles = collect([
    'KeyPerson',
    'SerialKiller',
    'Misleader',
    'Kromak',
    'Person',
])->mapWithKeys(fn($it) => [$it => __("tragedy_master.role.{$it}.name")]);
?>
@extends('layouts.layout')

@section('body_class', 'enquete-create')

@section('contents')
    <h1>@lang('アンケート')</h1>
    <x-enquete.qa_radio question="好きな役職は？" inputName="like_role" :answers="$likeRoles" />
@endsection
