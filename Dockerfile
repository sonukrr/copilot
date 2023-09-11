# STAGE 1: BUILD
FROM node:lts-alpine AS build
WORKDIR /usr/src/app
ARG build_env=build
RUN echo "Running the build for ----------------- $build_env"
# COPY package.json package-lock.json ./
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run $build_env

# RUN npm i compression -g
# RUN npm i gzipper -g
# RUN npm run gzip
# RUN rm -rf dist/copilot
# RUN mv dist/copilot-gzip dist/copilot

# STAGE 2: RUN
# COPY server.js /usr/src/app
# COPY package-container.json /usr/src/app
# RUN npm install express --save
# EXPOSE 4200
# CMD ["node", "server.js"]

### STAGE 2:RUN ###
# Defining nginx image to be used
FROM nginx:alpine AS ngi
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder
COPY --from=build /usr/src/app/dist/copilot /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
# Exposing a port, here it means that inside the container
# the app will be using Port 80 while running

# install curl
RUN apk --no-cache add curl

EXPOSE 4200
