FROM node:latest AS build
COPY . /app
WORKDIR /app
RUN npm ci && npm run build

FROM syntaqx/serve
COPY --from=build /app/build /var/www