FROM node:14 AS builder
WORKDIR /app
COPY . /app
RUN npm set registry https://mirrors.cloud.tencent.com/npm/ \
    && npm install \
    && node --max_old_space_size=1024 ./node_modules/@angular/cli/bin/ng build --prod

FROM nginx:stable-alpine
COPY --from=builder /app/dist/FengManDam /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
LABEL maintainer="caoyupersonal@hotmail.com"
CMD ["nginx", "-g", "daemon off;"]
