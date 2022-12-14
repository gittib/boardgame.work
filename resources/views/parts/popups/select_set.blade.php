@once
<?php
$sets = $sets ?? App\Models\TragedySet::get();
?>
<section class="c-popup js-popup-select_set">
    <div class="popup-filter-area"></div>
    <div class="popup-area">
        <div class="popup-area-inner">
            <div class="popup-header">
                <p class="title">@lang('惨劇セットを選んでください。')</p>
                <p class="close_button"></p>
            </div>
            @foreach($sets as $set)
            <div class="button">
                <a href="{{ route('my-scenario.create', ['set' => $set->abbr]) }}">
                    {{ $set->name }}
                </a>
            </div>
            @endforeach
        </div>
    </div>
</section>
@endonce
