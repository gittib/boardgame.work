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
### 19,20c19,20
### <                       '$status $body_bytes_sent "$http_referer" '
### <                       '"$http_user_agent" "$http_x_forwarded_for"';
### ---
### >                       '$status request:$request_length response:$body_bytes_sent $request_time '
### >                       '"$http_referer" "$http_user_agent"';
### 38,57c38,57
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
### ---
### > #    server {
### > #        listen       80 default_server;
### > #        listen       [::]:80 default_server;
### > #        server_name  _;
### > #        root         /usr/share/nginx/html;
### > #
### > #        # Load configuration files for the default server block.
### > #        include /etc/nginx/default.d/*.conf;
### > #
### > #        location / {
### > #        }
### > #
### > #        error_page 404 /404.html;
### > #            location = /40x.html {
### > #        }
### > #
### > #        error_page 500 502 503 504 /50x.html;
### > #            location = /50x.html {
### > #        }
### > #    }

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
###     listen 80;
###     server_name laravel-dev.boardgame.work; # server_nameは環境に合わせて変えること
###     root /srv/www/vhosts/laravel-dev.boardgame.work/public/;
###     include /etc/nginx/default.d/*.conf;
### 
###     client_max_body_size 10M;
### 
###     access_log /var/log/nginx/laravel-dev.boardgame.work.access.log main;
###     error_log /var/log/nginx/laravel-dev.boardgame.work.error.log;
### 
###     location / {
###         try_files $uri $uri/ /index.php?$query_string;
###     }
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



