####dfsa7DDDD8-Ed6d

su -

useradd gitti
passwd gitti
visudo

yum update

yum install -y yum-utils epel-release

yum install https://rpms.remirepo.net/enterprise/remi-release-8.rpm

yum install -y php80 php80-php php80-php-fpm php80-php-mbstring php80-php-pdo php80-php-mysql php80-php-xml php80-php-zip

ln -s /usr/bin/php80 /usr/bin/php

### composerインストール

sudo mkdir -p /srv/www/vhosts
sudo chmod 777 /srv/www/vhosts
cd /srv/www/vhosts

## journaldの設定
## journalログは基本使わないので、容量を制限する
sudo cp /etc/systemd/journald.conf /etc/systemd/journald.conf.org
sudo vim /etc/systemd/journald.conf
sudo diff /etc/systemd/journald.conf.org /etc/systemd/journald.conf
### 22c22
### < #SystemMaxUse=
### ---
### > SystemMaxUse=8M
sudo systemctl restart systemd-journald

## nginxの設定
sudo yum install -y nginx

sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.org
sudo vim /etc/nginx/nginx.conf
sudo diff /etc/nginx/nginx.conf.org /etc/nginx/nginx.conf
### 18,20c18,30
### <     log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
### <                       '$status $body_bytes_sent "$http_referer" '
### <                       '"$http_user_agent" "$http_x_forwarded_for"';
### ---
### >     log_format main escape=json '{'
### >         '"time":"$time_local",'
### >         '"cli":"$remote_addr",'
### >         '"st":"$status",'
### >         '"m":"$request_method",'
### >         '"url":"$scheme://$http_host$request_uri",'
### >         '"referer":"$http_referer",'
### >         '"res":$body_bytes_sent,'
### >         '"ua":"$http_user_agent",'
### >         '"request_body":"$request_body",'
### >         '"request":"$request",'
### >         '"forwarded_for":"$http_x_forwarded_for",'
### >         '"authorization":"$http_authorization"}';
### 31c41
### <     default_type        application/octet-stream;
### ---
### >     default_type        text/plain;
### 38,57d47
### <     server {
### <         listen       80 default_server;
### <         listen       [::]:80 default_server;
### <         server_name  _;
### <         root         /usr/share/nginx/html;
### <
### <         # Load configuration files for the default server block.
### <         include /etc/nginx/default.d/*.conf;
### <
### <         location / {
### <         }
### <
### <         error_page 404 /404.html;
### <             location = /40x.html {
### <         }
### <
### <         error_page 500 502 503 504 /50x.html;
### <             location = /50x.html {
### <         }
### <     }

sudo vim /etc/nginx/default.d/php.conf
sudo cat /etc/nginx/default.d/php.conf
### # pass the PHP scripts to FastCGI server
### #
### # See conf.d/php-fpm.conf for socket configuration
### #
### index index.php index.html index.htm;
### 
### location = /favicon.ico { access_log off; log_not_found off; }
### location = /robots.txt  { access_log off; log_not_found off; }
### # location = /health.php  {
### #     access_log off;
### #     log_not_found off;
### #
### #     fastcgi_intercept_errors on;
### #     include        fastcgi_params;
### #     fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
### #     fastcgi_param  PATH_INFO $fastcgi_path_info;
### #     fastcgi_pass   php-fpm;
### # }
### 
### location ~ \.(php|phar)(/.*)?$ {
###     fastcgi_split_path_info ^(.+\.(?:php|phar))(/.*)$;
### 
###     fastcgi_intercept_errors on;
###     fastcgi_index  index.php;
###     include        fastcgi_params;
###     fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
###     fastcgi_param  PATH_INFO $fastcgi_path_info;
###     fastcgi_pass   unix:/var/opt/remi/php80/run/php-fpm/www.sock;
### }

#サイト設定
sudo vim /etc/nginx/conf.d/laravel-dev.boardgame.work.conf
sudo cat /etc/nginx/conf.d/laravel-dev.boardgame.work.conf
### server {
### 
###     server_name laravel-dev.boardgame.work; # server_nameは環境に合わせて変えること
###     if ($host != laravel-dev.boardgame.work) {
###         return 403 o;
###     }
### 
###     root /srv/www/vhosts/laravel-dev.boardgame.work/src/public/;
###     include /etc/nginx/default.d/*.conf;
### 
###     client_max_body_size 128M;
### 
###     access_log /var/log/nginx/laravel-dev.boardgame.work.access.log main;
###     error_log /var/log/nginx/laravel-dev.boardgame.work.error.log;
### 
###     location / {
###         client_max_body_size 1M;
###         try_files $uri $uri/ /index.php?$query_string;
###     }
### 
###     listen [::]:443 ssl ipv6only=on; # managed by Certbot
###     listen 443 ssl; # managed by Certbot
###     ssl_certificate /etc/letsencrypt/live/laravel-dev.boardgame.work/fullchain.pem; # managed by Certbot
###     ssl_certificate_key /etc/letsencrypt/live/laravel-dev.boardgame.work/privkey.pem; # managed by Certbot
###     include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
###     ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
### 
### }
### 
### server {
###     if ($host = laravel-dev.boardgame.work) {
###         return 301 https://$host$request_uri;
###     } # managed by Certbot
### 
###     listen 80;
###     listen [::]:80;
### 
###     server_name laravel-dev.boardgame.work;
###     return 404; # managed by Certbot
### }

## php-fpmの設定
sudo cp /etc/opt/remi/php80/php-fpm.d/www.conf /etc/opt/remi/php80/php-fpm.d/www.conf.org
sudo vim /etc/opt/remi/php80/php-fpm.d/www.conf
sudo diff /etc/opt/remi/php80/php-fpm.d/www.conf.org /etc/opt/remi/php80/php-fpm.d/www.conf
### 24c24
### < user = apache
### ---
### > user = nginx
### 26c26
### < group = apache
### ---
### > group = nginx
### 48,50c48,50
### < ;listen.owner = nobody
### < ;listen.group = nobody
### < ;listen.mode = 0660
### ---
### > listen.owner = nginx
### > listen.group = nginx
### > listen.mode = 0660
### 55c55
### < listen.acl_users = apache
### ---
### > listen.acl_users = nginx
### 115c115
### < pm.max_children = 50
### ---
### > pm.max_children = 10
### 120c120
### < pm.start_servers = 5
### ---
### > pm.start_servers = 1
### 125c125
### < pm.min_spare_servers = 5
### ---
### > pm.min_spare_servers = 1
### 130c130
### < pm.max_spare_servers = 35
### ---
### > pm.max_spare_servers = 5


## ImageMagickのインストール
sudo yum -y install php80-php-pear php80-php-devel
sudo ln -s /opt/remi/php80/root/usr/bin/pecl /usr/bin/
sudo yum install ImageMagick-devel php80-php-imagick

# Laravelのインストール
composer create-project laravel/laravel:^8.0 laravel-dev.boardgame.work
cd laravel-dev.boardgame.work

mkdir -p storage/framework/cache/data/
mkdir -p storage/framework/app/cache
mkdir -p storage/framework/sessions
mkdir -p storage/framework/views
sudo chmod -R 777 bootstrap/cache
sudo chmod -R 777 storage
composer update

sudo systemctl start php80-php-fpm
sudo systemctl start nginx



# ファイアウォール設定。Conoha VPS はデフォルトでhttp,httpsをブロックしてるので許可する
sudo firewall-cmd --add-service=http --zone=public
sudo firewall-cmd --add-service=https --zone=public

# mysqlのインストール
sudo dnf localinstall https://dev.mysql.com/get/mysql80-community-release-el8-4.noarch.rpm
sudo dnf module disable mysql
sudo dnf install -y mysql-community-server
sudo mysqld --version
### /usr/sbin/mysqld  Ver 8.0.31 for Linux on x86_64 (MySQL Community Server - GPL)
sudo systemctl start mysqld

# ログから初期パスワードを確認
grep 'temporary password' /var/log/mysqld.log

mysql_secure_installation
# パスワード　 sad4Ed2DW-y

mysql -uroot -p
mysql> CREATE DATABASE boardgame_work_db;
mysql> CREATE USER boardgame_work_user IDENTIFIED BY 'okj325_nRvds';
mysql> GRANT ALL ON boardgame_work_db.* TO boardgame_work_user;
mysql> SHOW GRANTS FOR boardgame_work_user;


# 公開鍵認証を設定
mkdir ~/.ssh
vim ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
# パスフレーズ認証は禁止する
sudo vim /etc/ssh/sshd_config
### PasswordAuthentication no
sudo systemctl restart sshd


## SSL設定
sudo yum install -y epel-release
sudo yum install -y certbot python3-certbot-nginx
sudo certbot --nginx


## nodejsインストール
curl -fsSL https://rpm.nodesource.com/setup_19.x | sudo bash -
sudo yum install nodejs
node -v
### v19.2.0
npm -v
### 8.19.3

cd /srv/www/vhosts/laravel-dev.boardgame.work
npm install
npm i jquery
npm run dev


## supervisorインストール
sudo yum install -y supervisor
supervisord -v
### 4.2.2

# ログローテート設定を確認
sudo cat /etc/logrotate.d/supervisor
### /var/log/supervisor/*.log {
###        missingok
###        weekly
###        notifempty
###        nocompress
### }

## 自動起動設定
sudo systemctl enable supervisord

sudo systemctl is-enabled supervisord
### enabled

# LaravelのJobワーカーをsupervisorに登録
sudo vim /etc/supervisord.d/sangeki-laravel-worker.ini
sudo cat /etc/supervisord.d/sangeki-laravel-worker.ini
### [program:sangeki-laravel-dev]
### process_name=%(program_name)s_%(process_num)02d
### command=php <PATH_TO_DEV>/artisan queue:work --once --queue=default --delay=0 --memory=128 --sleep=5 --tries=1
### autostart=true
### autorestart=true
### startsecs = 0
### stopasgroup=true
### killasgroup=true
### user=<USER_NAME>
### numprocs=1
### redirect_stderr=true
### stdout_logfile=/var/log/supervisor/<DEV>-worker.log
###
### [program:sangeki-laravel-prd]
### process_name=%(program_name)s_%(process_num)02d
### command=php <PATH_TO_PRD>/artisan queue:work --once --queue=default --delay=0 --memory=128 --sleep=5 --tries=1
### autostart=true
### autorestart=true
### startsecs = 0
### stopasgroup=true
### killasgroup=true
### user=<USER_NAME>
### numprocs=1
### redirect_stderr=true
### stdout_logfile=/var/log/supervisor/<PRD>-worker.log

# supervisor起動
sudo systemctl start supervisord
# supervisor起動確認
ps auxf | grep artisan | grep queue

