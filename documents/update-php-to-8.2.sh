sudo yum update

sudo yum install -y php82 php82-php php82-php-fpm php82-php-mbstring php82-php-pdo php82-php-mysql php82-php-xml php82-php-zip

sudo ln -sfn /usr/bin/php82 /usr/bin/php

## php-fpmの設定
sudo cp /etc/opt/remi/php82/php-fpm.d/www.conf /etc/opt/remi/php82/php-fpm.d/www.conf.org
sudo vim /etc/opt/remi/php82/php-fpm.d/www.conf
sudo diff /etc/opt/remi/php82/php-fpm.d/www.conf.org /etc/opt/remi/php82/php-fpm.d/www.conf
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

# nginxの設定
sudo cp /etc/nginx/default.d/php.conf /etc/nginx/default.d/php.conf.php80
sudo vim /etc/nginx/default.d/php.conf
sudo diff /etc/nginx/default.d/php.conf.php80 /etc/nginx/default.d/php.conf
### 28c28
### <     fastcgi_pass   unix:/var/opt/remi/php80/run/php-fpm/www.sock;
### ---
### >     fastcgi_pass   unix:/var/opt/remi/php82/run/php-fpm/www.sock;

# nginx,php-fpmの再起動と自動起動設定
sudo systemctl stop php80-php-fpm
sudo systemctl start php82-php-fpm
sudo systemctl restart nginx

sudo systemctl enable php82-php-fpm
sudo systemctl disable php80-php-fpm
sudo systemctl list-unit-files -t service | grep php
### php80-php-fpm.service                      disabled
### php82-php-fpm.service                      enabled

sudo systemctl restart supervisord

# laravelでなくphpのセッションを使う場合のために権限設定
chgrp -R nginx /var/opt/remi/php82/lib/php/session/

