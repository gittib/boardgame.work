<?php
assert(!empty($breads));
$breads ??= [];

$json = [
    "@context" => "http://schema.org",
    "@type" => "BreadcrumbList",
    "itemListElement" => [],
];
$loopIteration = 1;
foreach($breads as $label => $url) {
    $json['itemListElement'][] = [
        '@type' => 'ListItem',
        'position' => $loopIteration,
        'item' => [
            '@id' => $url,
            'name' => $label,
        ],
    ];
    $loopIteration++;
}
?>
<ol class="breadcrumb">
    @foreach($breads as $label => $url)
        @if($loop->last)
        <li>{{ $label }}</li>
        @else
        <li><a href="{{ $url }}">{{ $label }}</a></li>
        @endif
    @endforeach
</ol>
<script type="application/ld+json">{!! json_encode($json) !!}</script>
