@if(!session('spolier_alert_displaied'))

@pushOnce('stack_scripts')
<script>
window.addEventListener('load', () => {
    openPopup('js-popup-scenario_list_alert');
});
</script>
@endPushOnce

@pushOnce('stack_popups')
<section class="c-popup js-popup-scenario_list_alert">
    <div class="unllick-filter-area"></div>
    <div class="popup-area">
        <div class="popup-area-inner tragedy-list-wrapper">
            <div class="popup-header">
                <p class="title">@lang('警告')</p>
                <p class="close_button"></p>
            </div>
            <div>
                <div class="">
                    @lang('messages.spoiler_alert')
                </div>
                <div class="button_wrapper">
                    <div class="button" data-result="cancel">
                        @lang('閉じる')
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endPushOnce

<?php session(['spolier_alert_displaied' => true]) ?>
@endif
