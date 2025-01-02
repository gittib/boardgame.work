if ($('body').hasClass('game-show')) {
    window.addEventListener('load', event => {
        gamePageFlow(event);
    });

    async function gamePageFlow(event) {
        let gameInfo;
        let skyWayhannel;
        const envParamsDom = document.getElementById('env-params');

        try {
            console.log('初期化処理開始');
            try {
                // SkyWayの初期化
                skyWayhannel = await initSkyWay(envParamsDom);

                // ゲームの状態をロードして変数もろもろセット
                gameInfo = await loadGame(envParamsDom);

                // ゲーム変数に従って各種オブジェクトを生成
                await generateObjects(gameInfo);

                // TODO: 生成したオブジェクトの座標計算などアニメーション処理をキック

            } catch(e) {
                console.error('初期化処理失敗', e);
                throw e;
            }

            console.log('初期化処理完了');

        } catch (e) {
            console.error('エラー発生', e);
            // TODO: エラー発生時の処理
        }
    }

    /**
     * SkyWayの初期化
     */
    async function initSkyWay(envParamsDom) {
        const gameId = envParamsDom.getAttribute('data-gameId');

        const context = await SkyWayContext.Create(token, {
            log: {
                level: envParamsDom.getAttribute('data-logLevel') || 'debug',
            },
        });
        const channel = await SkyWayChannel.FindOrCreate(context, {
            name: 'game-' + gameId,
        });

        // TODO: まだ途中
    }

    /**
     * ゲームの状態をロードして変数もろもろセット
     */
    async function loadGame(envParamsDom) {
        const url = envParamsDom.getAttribute('data-initial_api_url');
        return await fetch(url);
    }

    async function generateObjects(gameInfo) {
        // ボードの座標を取得
        const boardsCenter = (() => {
            const rects = {
                hospital: document.querySelector('.game_wrapper .board_wrapper .board.hospital').getBoundingClientRect(),
                school: document.querySelector('.game_wrapper .board_wrapper .board.school').getBoundingClientRect(),
            };

            const boardsRect = {
                top: rects.hospital.y + pageYOffset,
                left: rects.hospital.x + pageXOffset,
                right: rects.school.right + pageXOffset,
                bottom: rects.hospital.bottom + pageYOffset,
            };

            return {
                x: (boardsRect.left + boardsRect.right) / 2,
                y: (boardsRect.top + boardsRect.bottom) / 2,
            };
        })();

        // hospitalのright,bottom - imgタグのwidth/2,height/2 を初期座標とする

        gameInfo.characters = gameInfo.characters || []; 
        gameInfo.characters.forEach(chara => {
            // キャラクターのimgタグを生成

            // imgタグの座標を移動
        });
    }
}
