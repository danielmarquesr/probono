const express = require('express');

const app = express.Router();
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const lawyerRoutes = require('./lawyerRoutes');
const clientRoutes = require('./clientRoutes');

app
  .use('/auth', authRoutes)
  .use('/users', userRoutes)
  .use('/lawyers', lawyerRoutes)
  .use('/clients', clientRoutes);

module.exports = app;
