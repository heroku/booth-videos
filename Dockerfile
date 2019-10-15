FROM node:latest AS build
COPY . /app
WORKDIR /app
RUN npm ci && npm run build

FROM node:alpine
COPY --from=build /app/build /var/www
RUN npm i -g serve
CMD serve --single --listen tcp://0.0.0.0:$PORT /var/www