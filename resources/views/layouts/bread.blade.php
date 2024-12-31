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
        'name' => $label,
        'item' =>  $url,
    ];
    $loopIteration++;
}
?>
<ol class="breadcrumb">
    @foreach($breads as $label => $url)
        <li>{{ $loop->last ? $label : html()->a($url, $label) }}</li>
    @endforeach
</ol>

@pushOnce('stack_headers')
<script type="application/ld+json">@json($json)</script>
@endPushOnce
