FROM php:8.2-fpm-bookworm

ARG DEPLOY_ENV

ENV TZ=Asia/Tokyo \
  # composer environment
  COMPOSER_ALLOW_SUPERUSER=1 \
  COMPOSER_HOME=/composer

COPY --from=composer:2.3 /usr/bin/composer /usr/bin/composer

RUN apt-get update && apt-get -y upgrade && \
  apt-get -y install --no-install-recommends \
    build-essential \
    checkinstall \
    libicu-dev \
    libonig-dev \
    libzip-dev \
    locales \
    procps \
    unzip \
    vim && \
  locale-gen ja_JP.UTF-8 && \
  localedef -f UTF-8 -i ja_JP ja_JP.UTF-8 && \
  docker-php-ext-install \
    bcmath \
    intl \
    pdo_mysql \
    zip && \
  apt-get clean && rm -rf /var/lib/apt/lists/*

RUN composer config -g process-timeout 3600 && \
    composer config -g repos.packagist composer https://packagist.org

#RUN sed -i 's/^listen = 127.0.0.1:9000/listen = 9000/g' /usr/local/etc/php-fpm.d/www.conf

RUN if [ "$DEPLOY_ENV" = "local" ]; then \
  curl -sL https://deb.nodesource.com/setup_lts.x | bash - && \
  apt-get -y install --no-install-recommends nodejs && \
  apt-get clean && rm -rf /var/lib/apt/lists/* && \
  npm install npm@latest -g \
; fi

COPY ./docker/.vimrc /root
RUN sed -i 's/\r//' /root/.vimrc

COPY ./src /var/www/html

WORKDIR /var/www/html
RUN composer update
RUN chown -R www-data:www-data storage/ && \
    echo 'export LANG=C.UTF-8' >> /root/.bashrc && \
    chmod -R 777 storage bootstrap/cache && \
    rm -rf storage/logs/*.log
RUN php artisan optimize:clear && \
    php artisan optimize && \
    php artisan cache:clear && \
    php artisan route:cache && \
    php artisan config:cache && \
    php artisan view:cache && \
    chmod -R 777 storage bootstrap/cache

RUN if [ "$DEPLOY_ENV" = "local" ]; then \
  npm ci && npm run dev \
; fi

