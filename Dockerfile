# Stage 1 : Astro build
FROM node:22-alpine AS builder

WORKDIR /app

# Copy only dependency files first (better caching)
COPY astro/package.json astro/package-lock.json ./

RUN npm ci

# Copy the rest of the Astro project
COPY astro/ .

# Build the site
RUN npm run build


# Stage 2 : Deployment
FROM nginx:1.28.1-alpine

# Setup NGINX
COPY ./nginx/default.conf /etc/nginx/nginx.conf

WORKDIR /app
COPY --from=builder /app/dist .