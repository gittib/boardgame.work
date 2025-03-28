<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Media;

class FileController extends Controller
{
    public function uploadFirstChunk(Request $request) {
        $request->validate([
            'file_name' => 'nullable',
            'file_size' => 'nullable|integer',
            'chunk_data' => 'required|file',
        ]);

        $media = Media::createFromFile($request->chunk_data, $request->file_name);
        $media->delete(); // アップロードが完了するまで、Mediaレコードは論理削除状態にしておく

        return [
            'result' => 'OK',
            'url' => route('file.upload.chunk.add', ['media' => $media->id]),
        ];
    }

    public function uploadChunk(Request $request, $id) {
        $request->validate([
            'file_name' => 'nullable',
            'file_size' => 'nullable|integer',
            'chunk_data' => 'required_without:is_finish',
            'to_user_id' => 'nullable|integer',
        ]);

        $media = Media::withTrashed()->findOrFail($id);
        if (!empty($request->to_user_id)) {
            $media->to_user_id = $request->to_user_id;
            $media->save();
        }

        if (!empty($request->chunk_data)) {
            // 追記処理
            $fp = fopen($media->s3path, 'a');
            fwrite($fp, $request->chunk_data->get());
            fclose($fp);
        }

        if (!empty($request->is_finish)) {
            // アップロード完了したのでmediaを復活させる
            $media->restore();

            // 画像の場合はサムネイルを生成する
            $media->makeThumbnail();
        }

        return [
            'result' => 'OK',
            'media' => empty($request->is_finish) ? null : $media,
        ];
    }
}
