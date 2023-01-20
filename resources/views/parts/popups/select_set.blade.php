@once
<?php
$sets = $sets ?? App\Models\TragedySet::get();
?>
<section class="c-popup js-popup-select_set">
    <div class="filter-area"></div>
    <div class="popup-area">
        <div class="popup-area-inner tragedy-list-wrapper">
            <div class="popup-header">
                <p class="title">@lang('惨劇セットを選んでください。')</p>
                <p class="close_button"></p>
            </div>
            @foreach($sets as $set)
            <div class="button" data-result="ok" data-info="{{ $set->abbr }}">
                {{ $set->name }}
            </div>
            @endforeach
        </div>
    </div>
</section>
@endonce
