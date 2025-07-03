## 本番リリース用コマンド
git checkout -f develop && \
git pull && \
git checkout master && \
git merge develop -m "Merge branch 'develop'" && \
git push && \
cd ./src/ && \
composer install --no-dev && \
php artisan migrate --force && \
php artisan db:seed "Database\Seeders\InitializeMasterData" \
npm ci && \
npm run build && \
php artisan view:cache && \
php artisan config:cache && \
php artisan route:cache && \
cd ..
