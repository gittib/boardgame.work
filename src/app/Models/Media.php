<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Http\File;
use Auth;
use Intervention\Image\Facades\Image as InterventionImage;
use Log;
use Storage;
use Str;


class Media extends Model
{
    const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'tif', 'tiff'];
    const VIDEO_EXTENSIONS = ['avi', 'mp4', 'mov', 'wmv', 'mpg', 'mkv', 'flv', 'asf', ];
    const HASH_LENGTH = 30;

    use SoftDeletes;
    protected $guarded = ['id'];

    protected $keyType = 'string';
    public $incrementing = false;

    /**
     * モデルの「起動」メソッド
     *
     * @return void
     */
    protected static function booted() {
        static::registerEventListeners();
    }

    // attribute
    public function getUrlAttribute()
    {
        return config('define.cloud_front_url') . ltrim($this->file_path, '/');
    }
    public function getThmUrlAttribute() {
        if (empty($this->thumbnail_file_path)) {
            return $this->isImage ? $this->url : null;
        }

        return config('define.cloud_front_url') . ltrim($this->thumbnail_file_path, '/');
    }

    public function getFullFileNameAttribute(): string {
        return $this->file_name.'.'.$this->ext;
    }

    public function getIsImageAttribute(): bool {
        return in_array($this->ext, static::IMAGE_EXTENSIONS);
    }

    /** Storage::get()などのために、実体ファイルのフルパスを取得 */
    public function getStorageFullPathAttribute(): string {
        return Storage::path(config('define.put_file_prefix').$this->file_path);
    }
    /**
     * fopenなどのために、実体ファイルのパスを取得
     * ※ Aws\S3\S3Client->registerStreamWrapper()しないと使えない
     */
    public function getS3pathAttribute() {
        $path = $this->storageFullPath;
        if (config('filesystems.default') == 's3') {
            $path = 's3://'.config('filesystems.disks.s3.bucket').'/'.$path;
        }
        return $path;
    }


    /**
     * ImageMagickを使ってサムネイル画像を生成
     */
    public function makeThumbnail() {
        if (!$this->isImage || config('app.env') == 'local') {
            // 画像じゃないのでサムネイル生成処理はスキップ
            return;
        }

        // 画像なのでサムネイルを生成する

        $tmp = explode('/', $this->file_path);

        $tmp2 = explode('.', $tmp[count($tmp)-1]);
        unset($tmp2[count($tmp2)-1]);
        $pathFileName = implode('.', $tmp2);

        unset($tmp[count($tmp)-1]);
        $dirName = implode('/', $tmp) . '/';

        $ext = $this->ext;

        $thmFileName = $pathFileName."-thumbnail";
        $this->thumbnail_file_path = $dirName.$thmFileName.".$ext";

        // サムネイル生成・保存
        try {
            // まずストレージからファイルをダウンロードし、テンポラリディレクトリへ保存する
            $tmpPath = '/tmp/' . config('define.temp_file_prefix') . now()->format('-YmdHis-') . Str::random(10);
            $tf = fopen($tmpPath, 'w');
            fwrite($tf, Storage::get($this->storageFullPath));
            fclose($tf);

            // テンポラリディレクトリに保存した一時ファイルからサムネイル画像を生成
            $thumb = InterventionImage::make($tmpPath)->resize(
                config('define.thumbnail_size.width'),
                config('define.thumbnail_size.height'),
                function($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                })->save('/tmp/' . config('define.temp_file_prefix').$thmFileName);

            $thmFile = new File('/tmp/' . config('define.temp_file_prefix').$thmFileName);
            Storage::putFileAs(config('define.put_file_prefix').$dirName, $thmFile, $thmFileName.".$ext");

            $this->save();

        } finally {
            if (!empty($thmFile)) {
                @unlink($thmFile->path());
            }
            if (!empty($tmpPath)) {
                @unlink($tmpPath);
            }
        }
    }

    /**
     * 実体ファイルを削除する
     */
    public function deleteFile()
    {
        if (config('filesystems.default') == 'local') {
            $pathPrefix = 'app/' . config('define.put_file_prefix');
            $path = storage_path($pathPrefix.$this->file_path);
            @unlink($path);
            if (!empty($this->thumbnail_file_path)) {
                $path = storage_path($pathPrefix.$this->thumbnail_file_path);
                @unlink($path);
            }
        } else {
            Storage::delete(config('define.put_file_prefix').$this->file_path);
            if (!empty($this->thumbnail_file_path)) {
                Storage::delete(config('define.put_file_prefix').$this->thumbnail_file_path);
            }
        }
    }

    /** イベント設定 */
    private static function registerEventListeners() {
        static::creating(function ($media) {
            if (empty($media->id)) $media->id = Str::uuid();
            if (Auth::check()) $media->user_id = Auth::id();
        });
    }

    /**
     * アップロードされたファイルをストレージに保存する
     *
     * @return Media インサートされたメディアオブジェクト
     */
    public static function createFromFile(UploadedFile $file, ?string $fileName = null): static
    {
        Log::debug(__FUNCTION__.' start.', [
            'path' => $file->path(),
            'ext' => $file->extension(),
            'cliExt' => $file->clientExtension(),
            'oriName' => $file->getClientOriginalName(),
            'hashName' => $file->hashName(),
        ]);

        $tmp = explode('.', $fileName ?? $file->getClientOriginalName());
        $ext = strtolower($tmp[count($tmp)-1]);
        unset($tmp[count($tmp)-1]);
        $fileName = implode('.', $tmp);

        $media = static::create([
            'file_name' => $fileName,
            'ext' => $ext,
            'file_path' => 'not_found.jpg',
        ]);

        if (Auth::check()) {
            $media->from_user_id = Auth::id();
        }

        $hash = Str::random(static::HASH_LENGTH);
        $dirName = config('define.file_storage_root').now()->format('Y/m/d/');
        $pathFileName = now()->format('His-').$media->id.'-'.$hash;
        $media->file_path = $dirName.$pathFileName.".$ext";

        $splFile = new File($file->path());

        Storage::putFileAs(config('define.put_file_prefix').$dirName, $splFile, $pathFileName.".$ext");

        $media->save();

        return $media;
    }

}
