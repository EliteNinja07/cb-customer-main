# 获取依赖
FROM node:18-alpine as deps
# RUN apk add --no-cache git openssh

WORKDIR /usr/src/
USER root
COPY package.json ./
RUN yarn

# build dist
FROM deps as builder
COPY ./ ./
# RUN echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf
# RUN sysctl -p

RUN yarn build

# nginx镜像
FROM nginx:1.17.8-alpine
COPY --from=builder /usr/src/dist /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/nginx.conf
