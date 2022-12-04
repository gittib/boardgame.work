@extends('layouts.layout')

@section('title', __('惨劇セット一覧'))

@section('contents')
<ul>
@foreach($sets as $set)
    <li>
        <a href="{{ route('tragedy-set.show', ['tragedy_set' => $set->id]) }}">{{ $set->name }}</a>
    </li>
@endforeach
</ul>
@endsection
