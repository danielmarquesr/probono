FROM node:14-alpine

EXPOSE 8080

RUN mkdir /code

WORKDIR /code

ADD front/package.json /code

ADD front/ /code

RUN apk update && apk add yarn

RUN yarn install

CMD ['yarn', 'server']
