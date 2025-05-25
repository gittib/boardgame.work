<?php
$likeRoles = collect([
    'KeyPerson',
    'SerialKiller',
    'Misleader',
    'Kromak',
    'Person',
])->mapWithKeys(fn($it) => [$it => __("tragedy_master.role.{$it}.name")]);

$likeRoles2 = collect([
    'Killer',
    'Ninja',
    'Dripper',
    'Vampire',
    'Hitohashira',
    'NurseryLime',
])->mapWithKeys(fn($it) => [$it => __("tragedy_master.role.{$it}.name")]);

$likeIncidents = collect([
    'Murder',
    'SerialMurder',
    'BlasphemyMurder',
    'MadnessMurder',
    'ImpulseMurder',
])->mapWithKeys(fn($it) => [$it => __("tragedy_master.incident.{$it}.name")]);

$likeIncidents2 = collect([
    'suicide',
    'RumorOfCurse',
    'MadnessMurder',
    'testament',
])->mapWithKeys(fn($it) => [$it => __("tragedy_master.incident.{$it}.name")]);
?>
@extends('layouts.layout')

@section('body_class', 'enquete-create')

@section('contents')
    <h1>@lang('アンケート')</h1>
    <x-enquete.qa_radio :question="__('好きな役職は？')" inputName="like_role" :answers="$likeRoles" />
    <x-enquete.qa_radio :question="__('好きな役職は？その２')" inputName="like_role_2" :answers="$likeRoles2" />
    <x-enquete.qa_radio :question="__('好きな事件は？')" inputName="like_incident" :answers="$likeIncidents" />
    <x-enquete.qa_radio :question="__('好きな事件は？その２')" inputName="like_incident_2" :answers="$likeIncidents2" />
@endsection
