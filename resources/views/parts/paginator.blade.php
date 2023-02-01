<?php
assert(!empty($items));
$aRequest = request()->all();
?>
@if($items->lastPage() > 1)
    <ul class="page_link_wrapper">

    @if($items->currentPage() > 1)
        <?php $i = $items->currentPage() - 1; ?>
        <li class="back">
            <form action="{{ $items->url(1) }}">
                <a href="javascript:void(0);" class="submit_button">
                    ＜
                </a>
                <?php $aRequest['page'] = $i; ?>
                @foreach($aRequest as $key => $val)
                    {{ Form::hidden($key, $val) }}
                @endforeach
            </form>
        </li>
    @endif

    @for($i = $items->currentPage() - 3 ; $i <= $items->currentPage() + 3 ; $i++)
        @if($i < 1) @continue @endif
        @if($i <= $items->lastPage())
            <li class="@if($i == $items->currentPage()) current @endif">
                <form action="{{ $items->url(1) }}">
                    <a href="javascript:void(0);" class="@if($i != $items->currentPage()) submit_button @endif">
                        {{ $i }}
                    </a>
                    <?php $aRequest['page'] = $i; ?>
                    @foreach($aRequest as $key => $val)
                        {{ Form::hidden($key, $val) }}
                    @endforeach
                </form>
            </li>
        @endif
    @endfor

    @if($items->currentPage() < $items->lastPage())
        <?php $i = $items->currentPage() + 1; ?>
        <li class="next">
            <form action="{{ $items->url(1) }}">
                <a href="javascript:void(0);" class="submit_button">
                    ＞
                </a>
                <?php $aRequest['page'] = $i; ?>
                @foreach($aRequest as $key => $val)
                    {{ Form::hidden($key, $val) }}
                @endforeach
            </form>
        </li>
    @endif

    </ul>
@endif
