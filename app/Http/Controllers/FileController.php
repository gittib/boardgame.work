<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileController extends Controller
{
    public function uploadFirstChunk(Request $request) {
        $request->validate([
            'file' => 'required|file',
        ]);
    }
}
