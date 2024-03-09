@props([
    'paginator',
])

<?php
$range = 3;
$rangeStart = $paginator->currentPage() - $range;
$rangeEnd = $paginator->currentPage() + $range;
$lastPage = $paginator->lastPage();

if ($rangeStart < 1) $rangeStart = 1;
if ($rangeEnd > $lastPage) $rangeEnd = $lastPage;
$urls = $paginator->getUrlRange($rangeStart, $rangeEnd);
?>
@if($lastPage > 1)
<ul class="paginator_link">
    @if($paginator->currentPage() > 1)
    <li class="prev">
        <a href="{{ $paginator->previousPageUrl() }}">＜</a>
    </li>
    @endif
    @if($rangeStart > 1)
    <li class="first">
        <a href="{{ $paginator->url(1) }}">1</a>
        @if($rangeStart > 2) … @endif
    </li>
    @endif
    @foreach($urls as $key => $url)
    <li>
        @if($key == $paginator->currentPage())
        <span class="current_page">{{ $key }}</span>
        @else
        <a href="{{ $url }}">{{ $key }}</a>
        @endif
    </li>
    @endforeach
    @if($rangeEnd < $lastPage)
    <li class="last">
        @if($rangeEnd < $lastPage-1) … @endif
        <a href="{{ $paginator->url($lastPage) }}">{{ $lastPage }}</a>
    </li>
    @endif
    @if($paginator->currentPage() < $lastPage)
    <li class="next">
        <a href="{{ $paginator->nextPageUrl() }}">＞</a>
    </li>
    @endif
</ul>
@endif
