const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('../app/routes');

dotenv.config();

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Authorization,Content-type,Accept,X-Custom-Header');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
});

app.use(bodyParser.json());

app.use('/api/v1', routes);

module.exports = app;
