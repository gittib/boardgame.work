@extends('layouts.layout')

@section('title', __('惨劇セット :set', ['set' => $set->name]))

@section('contents')
<style>
dt {
    margin-top: 20px;
    font-weight: bold;
}
</style>
<h2>{{ $set->name }}</h2>

<dl>
    <dt>ルールY</dt>
    <dd>
        <ul>
            @foreach($set->ruleYs as $rule)
            <li>
                {{ $rule->name }}
            </li>
            @endforeach
        </ul>
    </dd>
    <dt>ルールX</dt>
    <dd>
        <ul>
            @foreach($set->ruleXs as $rule)
            <li>
                {{ $rule->name }}
            </li>
            @endforeach
        </ul>
    </dd>
    <dt>役職</dt>
    <dd>
        <ul>
            @foreach($set->roles as $role)
            <li>
                {{ $role->name }}
            </li>
            @endforeach
        </ul>
    </dd>
    <dt>事件</dt>
    <dd>
        <ul>
            @foreach($set->incidents as $incident)
            <li>
                {{ $incident->name }}
            </li>
            @endforeach
        </ul>
    </dd>
</dl>
@endsection
