FROM node:14-alpine

EXPOSE 3000

RUN mkdir /code

WORKDIR /code

ADD . /code

# RUN npm install

CMD ["npx", "nodemon", "server"]
