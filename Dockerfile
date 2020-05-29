FROM node:13-alpine

EXPOSE 8080

RUN mkdir /code

WORKDIR /code

RUN apk update && apk add yarn

ADD package.json /code

CMD ['yarn', 'start']
