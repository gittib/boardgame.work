@props([
    'isAdminPage',
])

@if(!empty($isAdminPage ?? false))
<style>
.admin_header {
    text-align: center;
    background-color: lightgreen;
    color: blueviolet;
    font-weight: bold;
}
</style>
@endif
