<div class="button_wrapper">
    <p class="button js-narrow_set">@lang('脚本検索')</p>
</div>

@pushOnce('stack_scripts')
<script>
$('.js-narrow_set').on('click', async () => {
    const res = await openPopup('js-popup-search_scenario');
});
</script>
@endPushOnce

@pushOnce('stack_popups')
<?php
$sets ??= App\Models\TragedySet::get();
$setsForSel = $sets->mapWithKeys(fn($s) => [$s->abbr => $s->name]);
$writersForSel = App\Models\User::whereHasScenario()->orderBy('name')->get()->mapWithKeys(fn($it) => [$it->id => $it->name]);
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
                        <span class="select_wrapper">{{ html()->select('set', $setsForSel)
                            ->value(request()->set)
                            ->placeholder('&nbsp;')
                        }}</span>
                    </dd>
                </dl>
                <dl>
                    <dt>@lang('作者')</dt>
                    <dd>
                        <span class="select_wrapper">{{ html()->select('writer', $writersForSel)
                            ->value(request()->writer)
                            ->placeholder('&nbsp;')
                        }}</span>
                    </dd>
                </dl>
                <dl>
                    <dt>@lang('難易度')</dt>
                    <dd class="difficult_setting">
                        <span class="select_wrapper">{{ html()->select('dif_min', $difficultSel)
                            ->value(request()->dif_min ?? 0)
                        }}</span>～
                        <span class="select_wrapper">{{ html()->select('dif_max', $difficultSel)
                            ->value(request()->dif_max ?? 8)
                        }}</span>
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
@endPushOnce
