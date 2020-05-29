const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('../app/routes');

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use('/api/v1.0', routes);

module.exports = app;
