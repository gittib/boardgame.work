@props([
    'scenario',
    'type' => '脚本',
    'withTitle' => true,
    'showTitle' => false,
    'withDifficult' => true,
    'isMyPage' => false,
])

<li class="list_item_script">
    <div class="row id_wrapper">
        <a href="{{ route('scenario.show', ['scenario' => $scenario->id])}}">
            {{ __($type) }}[{{ $scenario->id }}]
        </a>
        @if($isMyPage)
        <span>
            @if($scenario->is_quiz)
            <span class="quiz">Q</span>
            @endif
            @if($scenario->is_open)
            <span class="open_now">@lang('公開中')</span>
            @endif
        </span>
        @else
        <span class="writer">@lang('作者：:writer', ['writer' => e($scenario->writer?->name)])</span>
        @endif
    </div>
    @if($withTitle)
    <div class="title @if($isMyPage || $showTitle) show @endif">
        <a href="{{ route('scenario.show', ['scenario' => $scenario->id])}}">
            {{ $scenario->title }}
        </a>
    </div>
    @endif
    <div class="row summary_wrapper">
        <span class="abbr_wrapper">
            <span class="set_abbr {{ $scenario->set?->abbr }}">{{ $scenario->set?->abbr }}</span>
        </span>
        <span class="loop_day_summary">@lang('messages.loop_day_summary', ['loops' => $scenario->loops, 'days' => $scenario->days])</span>
        @if($withDifficult)
        <span class="difficult">@lang('難易度'):<span class="difficult_name">{{ $scenario->difficult_name }}</span> {{ $scenario->difficult_star }}</span>
        @endif
        <span class="like">
            @if($scenario->likes->contains(Auth::id()))
            <img src="{{ Res::ver('/images/red_heart.png') }}">
            @else
            <img src="{{ Res::ver('/images/heart.png') }}">
            @endif
            <span class="like_count">
            @if($scenario->likes->isNotEmpty())
                {{ $scenario->likes->count() }}
            @endif
            </span>
        </span>
    </div>
</li>
