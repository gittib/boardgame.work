@props([
    'isAdmin',
])

@if(!empty($isAdmin ?? false))
<style>
.admin_header {
    text-align: center;
    background-color: lightgreen;
    color: blueviolet;
    font-weight: bold;
}
</style>
@endif
