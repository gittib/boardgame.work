FROM php:8.2-fpm-bookworm

ARG DEPLOY_ENV
ARG UID=1000
ARG GID=1000
ARG USERNAME=myuser
ARG GROUPNAME=myuser

ENV TZ=Asia/Tokyo \
  # composer environment
  COMPOSER_ALLOW_SUPERUSER=1 \
  COMPOSER_HOME=/composer

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN apt-get update && apt-get -y upgrade && \
  apt-get -y install --no-install-recommends \
    build-essential \
    checkinstall \
    libicu-dev \
    libonig-dev \
    libtidy-dev \
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
    tidy \
    zip && \
  apt-get clean && rm -rf /var/lib/apt/lists/*

RUN composer config -g process-timeout 3600 && \
    composer config -g repos.packagist composer https://packagist.org

RUN if [ "$DEPLOY_ENV" = "local" ]; then \
  curl -sL https://deb.nodesource.com/setup_lts.x | bash - && \
  apt-get -y install --no-install-recommends nodejs && \
  apt-get clean && rm -rf /var/lib/apt/lists/* && \
  npm install npm@latest -g \
; fi

COPY ./docker/.vimrc /root
RUN groupadd -g $GID $GROUPNAME && \
    useradd -m -s /bin/bash -u $UID -g $GID $USERNAME && \
    sed -i 's/\r//' /root/.vimrc && \
    cp /root/.vimrc /home/$USERNAME/.vimrc && \
    chown $USERNAME:$GROUPNAME /home/$USERNAME/.vimrc

WORKDIR /var/www/html
COPY --chown=$USERNAME:$GROUPNAME ./src .
COPY --chown=$USERNAME:$GROUPNAME ./docker/php/.env.${DEPLOY_ENV} ./.env

RUN echo 'export LANG=C.UTF-8' >> /root/.bashrc && \
    chown -R $USERNAME:$GROUPNAME /var/www/html/ && \
    rm -rf storage/logs/*.log && \
    chmod a+r /composer/*.json && \
    chown -R $USERNAME /composer/cache/ && \
    composer update && \
    php artisan cache:clear && \
    php artisan debugbar:clear && \
    php artisan route:cache && \
    php artisan config:cache && \
    php artisan view:cache && \
    chown -R $USERNAME:$GROUPNAME /var/www/html/

USER $USERNAME
RUN if [ "$DEPLOY_ENV" = "local" ]; then \
  npm ci && npm run dev \
; fi
