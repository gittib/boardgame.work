ARG APP_BASE_STAGE=php_base
ARG UID=1000
ARG GID=1000
ARG USERNAME=myuser
ARG GROUPNAME=myuser

FROM php:8.3-fpm-bookworm AS base
ENV TZ=Asia/Tokyo \
  # composer environment
  COMPOSER_ALLOW_SUPERUSER=1 \
  COMPOSER_HOME=/composer
RUN apt-get update && apt-get -y upgrade && \
  apt-get -y install --no-install-recommends \
    build-essential \
    checkinstall \
    curl \
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
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer config -g process-timeout 3600 && \
    composer config -g repos.packagist composer https://packagist.org


FROM base AS node_base
WORKDIR /var/www/html
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash - && \
  apt-get -y install --no-install-recommends nodejs && \
  apt-get clean && rm -rf /var/lib/apt/lists/* && \
  npm install npm@latest -g
COPY ./src/package-lock.json ./src/package.json .
RUN npm ci --include=dev


FROM node_base AS assets
COPY ./src/vite.config.js ./src/webpack.mix.js .
COPY ./src/resources/ ./resources/
RUN npm run build


FROM base AS php_base
ARG DEPLOY_ENV
COPY ./docker/.vimrc /root
RUN groupadd -g $GID $GROUPNAME && \
    useradd -m -s /bin/bash -u $UID -g $GID $USERNAME && \
    mkdir -p /var/www/html /composer/cache && \
    chown -R $USERNAME:$GROUPNAME /var/www/html /composer && \
    echo 'export LANG=C.UTF-8' >> /root/.bashrc && \
    sed -i 's/\r//' /root/.vimrc && \
    cp /root/.vimrc /home/$USERNAME/.vimrc && \
    chown $USERNAME:$GROUPNAME /home/$USERNAME/.vimrc && \
    mkdir -p /composer && chown -R $USERNAME:$GROUPNAME /composer
WORKDIR /var/www/html
COPY --chown=$USERNAME:$GROUPNAME ./docker/php/.env.${DEPLOY_ENV} ./.env
COPY --chown=$USERNAME:$GROUPNAME ./src/composer.json ./src/composer.lock .
USER $USERNAME
RUN composer install \
    --no-interaction \
    --prefer-dist \
    --no-scripts \
    --no-autoloader
USER root


FROM php_base AS local_base
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash - && \
  apt-get -y install --no-install-recommends nodejs && \
  apt-get clean && rm -rf /var/lib/apt/lists/* && \
  npm install npm@latest -g
COPY --chown=$USERNAME:$GROUPNAME --from=node_base /var/www/html/node_modules/ ./node_modules/


FROM ${APP_BASE_STAGE} AS app
COPY --chown=$USERNAME:$GROUPNAME ./src .
COPY --chown=$USERNAME:$GROUPNAME --from=assets /var/www/html/public/build/ ./public/build/
RUN rm -rf storage/logs/*.log && \
    chmod a+r /composer/*.json && \
    composer dump-autoload && \
    php artisan cache:clear && \
    php artisan debugbar:clear && \
    php artisan route:clear && \
    php artisan config:clear && \
    php artisan view:cache && \
    chown -R $USERNAME:$GROUPNAME /var/www/html/
USER $USERNAME
