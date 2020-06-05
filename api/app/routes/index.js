const express = require('express');

const app = express.Router();
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const lawyerRoutes = require('./lawyerRoutes');
const clientRoutes = require('./clientRoutes');
const lawsuitRoutes = require('./lawsuitRoutes');
const progressRoutes = require('./progressRoutes');

app
  .use('/auth', authRoutes)
  .use('/users', userRoutes)
  .use('/lawyers', lawyerRoutes)
  .use('/clients', clientRoutes)
  .use('/lawsuits', lawsuitRoutes)
  .use('/progresses', progressRoutes);

module.exports = app;
