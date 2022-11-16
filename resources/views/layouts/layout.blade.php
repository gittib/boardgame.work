<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="chunk_upload_url" content="{{ route('file.upload.chunk.first') }}">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        <!-- Fonts -->

        <!-- Styles -->

    </head>
    <body class="">
        @yield('contents')
    </body>
    @yield('additional_scripts')
</html>
