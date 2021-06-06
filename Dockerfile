FROM node AS builder
WORKDIR /app
COPY . /app
RUN yarn && yarn run build

FROM nginx:stable-alpine
COPY --from=builder /app/dist/FengManDam /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
LABEL maintainer="caoyupersonal@hotmail.com"
CMD ["nginx", "-g", "daemon off;"]
