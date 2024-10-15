# Stage 1 : Hugo build
FROM ghcr.io/gohugoio/hugo:v0.135.0 AS builder
WORKDIR /app

COPY src /app
RUN hugo

# Stage 2 : Deployment
FROM nginx:alpine

# Setup NGINX
COPY ./nginx/default.conf /etc/nginx/nginx.conf

WORKDIR /app
COPY --from=builder /app/public .