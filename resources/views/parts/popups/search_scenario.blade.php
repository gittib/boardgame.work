@once
<?php
$sets ??= App\Models\TragedySet::get();
$setsForSel = $sets->mapWithKeys(fn($s) => [$s->abbr => $s->name]);
$difficultSel = [];
for ($i = 0 ; $i <= 8 ; $i++) {
    $txt = '';
    for($j = 0 ; $j < 8 ; $j++) {
        if ($j < $i) {
            $txt .= '★';
        } else {
            $txt .= '☆';
        }
    }
    $difficultSel[$i] = $txt;
}
?>
<section class="c-popup js-popup-search_scenario">
    <div class="filter-area"></div>
    <div class="popup-area">
        <div class="popup-area-inner tragedy-list-wrapper">
            <div class="popup-header">
                <p class="title">@lang('絞り込み条件')</p>
                <p class="close_button"></p>
            </div>
            <form>
                <dl>
                    <dt>@lang('惨劇セット')</dt>
                    <dd>
                        <span class="select_wrapper">{{ Form::select('set', $setsForSel, request()->set, ['placeholder' => '']) }}</span>
                    </dd>
                </dl>
                <dl>
                    <dt>@lang('難易度')</dt>
                    <dd class="difficult_setting">
                        <span class="select_wrapper">{{ Form::select('dif_min', $difficultSel, request()->dif_min ?? 0) }}</span>～
                        <span class="select_wrapper">{{ Form::select('dif_max', $difficultSel, request()->dif_max ?? 8) }}</span>
                    </dd>
                </dl>

                <div class="button_wrapper">
                    <div class="button">
                        <input type="submit" value="@lang('検索')">
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>
@endonce
