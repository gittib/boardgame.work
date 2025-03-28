FROM php:8.2-fpm-bookworm AS builder

RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash - && \
  apt-get -y install --no-install-recommends nodejs && \
  apt-get clean && rm -rf /var/lib/apt/lists/* && \
  npm install npm@latest -g
COPY ./src/public /var/www/html/public
COPY ./src/resources/js /var/www/html/resources/js
COPY ./src/resources/sass /var/www/html/resources/sass
COPY ./src/package.json /var/www/html/package.json
COPY ./src/package-lock.json /var/www/html/package-lock.json
COPY ./src/vite.config.js /var/www/html/vite.config.js
RUN npm ci && npm run build



FROM nginx:1.27-bookworm

ARG SERVER_NAME
ARG PHP_CONTAINER_NAME

ENV TZ=Asia/Tokyo

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y vim

COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/.vimrc /root
RUN sed -i 's/\r//' /root/.vimrc
RUN sed -i "s/___SERVER_NAME___/${SERVER_NAME}/g" /etc/nginx/conf.d/default.conf && \
    sed -i "s/___PHP_CONTAINER_NAME___/${PHP_CONTAINER_NAME}/g" /etc/nginx/conf.d/default.conf

COPY ./src/public /var/www/html/public
RUN rm -rf /var/www/html/public/build && \
    rm -rf /var/www/html/public/js
COPY --from=builder /var/www/html/public/build /var/www/html/public/build
COPY --from=builder /var/www/html/public/js /var/www/html/public/js

EXPOSE 80
EXPOSE 443
