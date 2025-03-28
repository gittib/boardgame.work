@once
<?php
assert(!empty($incidents));
?>
<section class="c-popup js-popup-incident_explain">
    <div class="filter-area"></div>
    <div class="popup-area">
        <div class="popup-area-inner tragedy-list-wrapper">
            <div class="popup-header">
                <p class="title">@lang('事件効果を確認')</p>
                <p class="close_button"></p>
            </div>
            <ul class="incident_list">
                @foreach($incidents as $incident)
                <li>
                    <a href="javascript:void(0)">{{ $incident->name }}</a>
                    <p class="note">{!! nl2br(e($incident->note)) !!}</p>
                </li>
                @endforeach
            </ul>
        </div>
    </div>
</section>
@endonce
