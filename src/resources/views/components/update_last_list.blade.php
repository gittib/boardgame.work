@props([
    'pageType',
])
@push('stack_scripts')
<script>
window.addEventListener('pageshow', async function() {
    const res = await fetch("{{ route('scenario.last_list_update') }}", {
        method: "POST",
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr('content'),
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            pageType: "{{ $pageType }}"
        }),
    }).then(r => r.json());
    @if(config('app.debug')) console.log(res); @endif
});
</script>
@endpush
