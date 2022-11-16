/**
* ファイルアップロードjs
*
* @param option.formClass ファイルアップロードイベントを仕込むformタグのクラス
* @param option.onSuccess($input, media) ファイルアップロード成功時の処理。$inputは対象のinput[type=file]
* @param option.onFailure($input, res) ファイルアップロード失敗時の処理。$inputは対象のinput[type=file]
* @param option.onComplete($input, xhr) ファイルアップロード完了時の処理。$inputは対象のinput[type=file]
* @param option.onProgress($input, percent) ファイルアップロード中の処理。$inputは対象のinput[type=file]
*/
window.setFileUploadEvent = (option) => {
    const _formClass = (option.formClass || '').length > 0 ? '.'+option.formClass : '';
    const _selector = 'form'+_formClass+' input[type=file][name=file]';
    const _onSuccess = option.onSuccess || (($input, media) => { myConsole.log(media); });
    const _onFailure = option.onFailure || (($input, res) => { myConsole.error(res); });
    const _onComplete = option.onComplete || (($input) => {});
    const _onProgress = option.onProgress || (($input, percent) => {});

    myConsole.log(_selector);

    $('body').on('change', _selector, function() {
        const $self = $(this);
        if (!$self.val()) {
            return;
        }
        
        const $form = $self.closest('form');
        const uploadFile = $self.prop('files')[0];
        const toUserId = $form.find('[name=to_user_id]').val();
        
        (async () => {
            let progressTimer;
            try {
                const CHUNK_SIZE = 128*1024*1024;
                const RETRY_LIMIT = 5;
                const RETRY_INTERVAL = 100;
                const CHUNK_UPLOAD_URL = $('meta[name=chunk_upload_url]').attr('content');
                const CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
                
                let sent = 0; // 送信済みバイト数
                let maybeSent = 0; // 机上の送信済みバイト数。見かけ上のプログレスバー更新のために使う
                let chunkUploadUrl = CHUNK_UPLOAD_URL;
                let wait; // 指数バックオフ用
                
                let bps = 0; // 各アップロードから計算されたBPS[byte/sec]
                progressTimer = setInterval(() => {
                    maybeSent += bps * 0.5;
                    if (maybeSent > sent + CHUNK_SIZE) {
                        maybeSent = sent + CHUNK_SIZE;
                    }
                    let per = maybeSent * 100.0 / uploadFile.size;
                    if (per > 99.9) per = 99.9;
                    _onProgress($self, per);
                }, 1000);
                
                _onProgress($self, 0);
                while (sent < uploadFile.size) {
                    let chunkEnd = sent + CHUNK_SIZE; // 今回送るチャンクの末尾バイト
                    if (sent == 0) {
                        chunkEnd = CHUNK_SIZE / 4; // 最初だけは軽い容量で送り、レスポンスタイムを計測する
                    }
                    
                    const chunkData = uploadFile.slice(sent, chunkEnd);
                    myConsole.log(sent, chunkEnd);
                    myConsole.log(chunkData);
                    
                    const fd = new FormData();
                    fd.append('file_name', uploadFile.name);
                    fd.append('file_size', uploadFile.size);
                    fd.append('chunk_data', chunkData);
                    
                    wait = RETRY_INTERVAL;
                    for (let i = 1 ; i <= RETRY_LIMIT ; i++) {
                        const upStartAt = new Date();
                        
                        const ajaxResult = await $.ajax({
                            type: 'POST',
                            url: chunkUploadUrl,
                            headers: {
                                'X-CSRF-TOKEN': CSRF_TOKEN,
                            },
                            contentType: false,
                            processData: false,
                            data: fd,
                        }).catch(async err => {
                            myConsole.log(err);
                            if (i >= RETRY_LIMIT) {
                                // 規定回数失敗したので、アップロード処理全体を失敗とみなす
                                throw err;
                            } else if(err.status == 422) {
                                // 422はバリデーションエラーなので、何度繰り返してもコケるはず
                                throw err;
                            } else {
                                // 指数バックオフ
                                await sleep(wait);
                                wait *= 2;
                            }
                        });
                        if (ajaxResult?.result == 'OK') {
                            // このチャンクは送信成功したので次に行く
                            
                            // 送信時間を計測
                            const upTime = ((new Date()).getTime() - upStartAt.getTime()) / 1000.0;
                            bps = (chunkEnd - sent) / upTime;
                            
                            // 次のURLが来てたら更新する
                            chunkUploadUrl = ajaxResult.url ?? chunkUploadUrl;
                            break;
                        }
                    }
                    sent = chunkEnd;
                    maybeSent = chunkEnd;
                    
                    _onProgress($self, sent * 100.0 / uploadFile.size);
                }
                
                // 分割アップロード完了したので、最後にファイルを結合する
                const finishData = {
                    file_name: uploadFile.name,
                    file_size: uploadFile.size,
                    is_finish: true,
                };
                if (toUserId) {
                    finishData.to_user_id = toUserId;
                }
                
                let lastAjaxResult;
                wait = RETRY_INTERVAL;
                for (let i = 0 ; i <= RETRY_LIMIT ; i++) {
                    lastAjaxResult = await $.ajax({
                        type: 'POST',
                        url: chunkUploadUrl,
                        headers: {
                            'X-CSRF-TOKEN': CSRF_TOKEN,
                        },
                        contentType: 'application/json',
                        data: JSON.stringify(finishData),
                    }).catch(async err => {
                        myConsole.log(err);
                        if (i >= RETRY_LIMIT) {
                            // 規定回数失敗したので、アップロード処理全体を失敗とみなす
                            throw err;
                        } else if(err.status == 422) {
                            // 422はバリデーションエラーなので、何度繰り返してもコケるはず
                            throw err;
                        } else {
                            // 指数バックオフ
                            await sleep(wait);
                            wait *= 2;
                        }
                    });
                    
                    if (lastAjaxResult?.media) {
                        // ファイル結合APIも成功したので次へ
                        break;
                    }
                }
                myConsole.log(lastAjaxResult);
                if (lastAjaxResult?.media) {
                    // 全部終わったので成功時コールバックを叩く
                    _onSuccess($self, lastAjaxResult.media);
                } else {
                    throw new Error('結合API失敗');
                }
                
            } catch (err) {
                myConsole.error(err);
                _onFailure($self, err);
            } finally {
                clearInterval(progressTimer);
                _onComplete($self);
                $self.val('');
            }
        })();
    });
};

