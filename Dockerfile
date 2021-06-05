FROM node AS builder
WORKDIR /app
COPY . /app
RUN yarn && yarn run build

FROM nginx:stable-alpine
COPY --from=builder /app/dist/FengManDam /usr/share/nginx/html
EXPOSE 80
LABEL maintainer="caoyupersonal@hotmail.com"
CMD ["nginx", "-g", "daemon off;"]
