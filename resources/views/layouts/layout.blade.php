<?php
$isAdminPage ??= \Str::of($bodyClass ?? '')->startsWith('admin-');
?>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="chunk_upload_url" content="{{ route('file.upload.chunk.first') }}">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="shortcut icon" href="/images/favicon.png">

        @hasSection('title')
            <title>@yield('title') - @lang('惨劇RoopeR 脚本データベース')</title>
        @else
            <title>@lang('惨劇RoopeR 脚本データベース')</title>
        @endif

        <script src="https://kit.fontawesome.com/2899befb82.js" crossorigin="anonymous"></script>

        <!-- Styles -->
        <link rel="stylesheet" href="https://unpkg.com/ress@5.0.2/dist/ress.min.css">
        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">

        @hasSection('canonical_url')
            <link rel="canonical" href="@yield('canonical_url')">
        @endif

        <x-admin_layout_css :isAdminPage=$isAdminPage />
        @stack('stack_headers')

        @if(config('app.env') == 'production')
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GP74G1ZWM5"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GP74G1ZWM5');
        </script>
        @else
        <script>
          function gtag(){console.log(arguments);}
        </script>
        @endif
    </head>
    <body class="@yield('body_class')">
        <div class="contents_wrapper">
            @include('layouts.header')

            @yield('bread')

            <main>
                @yield('contents')
            </main>
        </div>

        @include('layouts.footer')

        @yield('popups')
        @stack('stack_popups')
        @include('parts.popups.my_confirm')

        <script src="https://code.jquery.com/jquery-3.6.1.slim.min.js" integrity="sha256-w8CvhFs7iHNVUtnSP0YKEg00p9Ih13rlL9zGqvLdePA=" crossorigin="anonymous"></script>
        <script src="{{ mix('/js/manifest.js') }}"></script>
        <script src="{{ mix('/js/vendor.js') }}"></script>
        <script src="{{ mix('/js/app.js') }}"></script>

        <?php $flushMessage = session()->pull('flush_message'); ?>
        @if(!empty($flushMessage))
        <script>myAlert("{{ $flushMessage }}", "", "{{ now()->format('YmdHis') }}");</script>
        @endif

        @yield('additional_scripts')
        @stack('stack_scripts')
    </body>
</html>
