FROM node:10.18.0-alpine3.9
RUN npm i -g @nestjs/cli
RUN mkdir -p /nest_app
WORKDIR /nest_app
EXPOSE 3000