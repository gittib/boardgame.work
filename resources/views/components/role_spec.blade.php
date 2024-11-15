@props([
    'role',
])
<?php
$roleName = \Str::of($role->name)->replace('／', '/')->explode('/')->map(fn($it) => trim(e($it)))->implode('<br>／');
?>
<span class="role-spec {{ $role->isPerson ? '' : 'not-person' }}">
    {{ html()->span()
        ->class('dia')
        ->classIf($role->isSpecialHostility, 'black')
        ->textIf($role->isSpecialHostility, '◆')
        ->textIf(!$role->isSpecialHostility, '◇') }}
    {{ html()->i()
        ->classIf($role->isHostility, 'fas fa-heart-broken')
        ->classIf(!$role->isHostility, 'fa-regular fa-heart') }}
    {{ html()->i()
        ->classIf($role->is_immortality, 'fa-solid fa-star')
        ->classIf(!$role->is_immortality, 'fa-regular fa-star') }}
    <span class="role-name">{!! $roleName !!}</span>
</span>
