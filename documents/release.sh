## 本番リリース用コマンド
git checkout -f develop
git pull
git checkout master
git merge develop -m "Merge branch 'develop'"
git push
composer install
npm ci
npm run prod
php artisan view:cache
php artisan config:cache


## ワンライナー版
git checkout -f develop && git pull && git checkout master && git merge develop -m "Merge branch 'develop'" && git push && composer install && npm ci && npm run prod && php artisan view:cache && php artisan config:cache

