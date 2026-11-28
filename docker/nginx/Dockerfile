ARG NGINX_BASE_STATE=nginx_with_dhparam

FROM nginx:1.27-bookworm AS base
ENV TZ=Asia/Tokyo
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y --no-install-recommends vim curl && \
    apt-get clean && rm -rf /var/lib/apt/lists/*


FROM base AS assets
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash - && \
  apt-get -y install --no-install-recommends nodejs && \
  apt-get clean && rm -rf /var/lib/apt/lists/* && \
  npm install npm@latest -g
WORKDIR /var/www/html/
COPY ./src/package.json ./src/package-lock.json .
RUN npm ci
COPY ./src/resources/ ./resources/
COPY ./src/vite.config.js .
RUN npm run build


FROM base AS nginx_base
ARG DEFAULT_CONF_FILE_NAME=default.conf

COPY ./docker/nginx/${DEFAULT_CONF_FILE_NAME} /etc/nginx/conf.d/default.conf
COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf


FROM nginx_base AS nginx_with_dhparam

# dhparam.pemは以下のコマンドで生成する
# openssl dhparam -out ./docker/nginx/dhparam.pem 4096
COPY ./docker/nginx/dhparam.pem /etc/nginx/dhparam.pem


FROM ${NGINX_BASE_STATE} AS app
ARG SERVER_NAME
ARG PHP_CONTAINER_NAME
ARG SSL_PORT=443

WORKDIR /var/www/html/
COPY --from=assets /var/www/html/public/build ./public/build
COPY ./docker/.vimrc /root
RUN sed -i 's/\r//' /root/.vimrc && \
    sed -i "s/___SERVER_NAME___/${SERVER_NAME}/g" /etc/nginx/conf.d/default.conf && \
    sed -i "s/___PHP_CONTAINER_NAME___/${PHP_CONTAINER_NAME}/g" /etc/nginx/conf.d/default.conf && \
    sed -i "s/___SSL_PORT___/${SSL_PORT}/g" /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 443
