@props([
    'role',
])
<?php
$roleName = \Str::of($role->name)->replace('／', '/')->explode('/')->map(fn($it) => trim(e($it)))->implode('<br>／');
?>
<span class="role-spec {{ $role->isPerson ? '' : 'not-person' }}">
    {{ html()->span()
        ->class('dia')
        ->classIf(in_array($role->hostility_type, [2, 3]), 'black')
        ->textIf(in_array($role->hostility_type, [2, 3]), '◆')
        ->textIf(!in_array($role->hostility_type, [2, 3]), '◇') }}
    {{ html()->i()
        ->classIf(in_array($role->hostility_type, [1, 2, 3]), 'fas fa-heart-broken')
        ->classIf(!in_array($role->hostility_type, [1, 2, 3]), 'fa-regular fa-heart') }}
    {{ html()->i()
        ->classIf($role->is_immortality, 'fa-solid fa-star')
        ->classIf(!$role->is_immortality, 'fa-regular fa-star') }}

    <span class="role-name">{!! $roleName !!}</span>
</span>
