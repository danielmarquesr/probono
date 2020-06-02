const express = require('express');
const app = express.Router();
const authRoutes = require('../routes/authRoutes');
const userRoutes = require('../routes/userRoutes');
const lawyerRoutes = require('../routes/lawyerRoutes');
const clientRoutes = require('../routes/clientRoutes');

app
  .use('/auth', authRoutes)
  .use('/users', userRoutes)
  .use('/lawyers', lawyerRoutes)
  .use('/clients', clientRoutes);

module.exports = app;
