FROM node:14-alpine

EXPOSE 8080

RUN mkdir /code

WORKDIR /code

ADD . /code

# RUN npm install

CMD ['npm', 'run', 'server']
