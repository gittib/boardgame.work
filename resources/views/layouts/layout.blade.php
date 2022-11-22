<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="chunk_upload_url" content="{{ route('file.upload.chunk.first') }}">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>@yield('title', __('惨劇RoopeR 脚本データベース'))</title>

        <!-- Fonts -->

        <!-- Styles -->
        <link rel="stylesheet" href="https://unpkg.com/ress@5.0.2/dist/ress.min.css">
        <link rel="stylesheet" href="{{ Res::ver('/screen.css') }}">
    </head>
    <body class="">
        @include('layouts.header')

        <main>
            @yield('contents')
        </main>

        {{-- TODO: scriptタグ設置 --}}
        @yield('additional_scripts')
    </body>
</html>
