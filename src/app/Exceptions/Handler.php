<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use Throwable;
use Whoops\Run;
use Whoops\Handler\PrettyPageHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        ValidationException::class,
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });

        if (config('app.debug')) {
            $this->renderable(function (Throwable $e, Request $request) {
                if ($this->isHttpException($e)) {
                    return $this->renderHttpException($e);
                }

                if ($e instanceof ValidationException) {
                    // レスポンスをreturnしないことで、Laravelデフォルトのエラーハンドリングに任せる
                } else {
                    $whoops = new Run;
                    $whoops->pushHandler(new PrettyPageHandler);
                    return response($whoops->handleException($e));
                }
            });
        }
    }
}
