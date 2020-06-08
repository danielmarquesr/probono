const express = require('express');
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const lawyerRoutes = require('./lawyerRoutes');
const clientRoutes = require('./clientRoutes');
const lawsuitRoutes = require('./lawsuitRoutes');
const progressRoutes = require('./progressRoutes');
const translationRoutes = require('./translationRoutes');

const router = express.Router();

router
  .use('/auth', authRoutes)
  .use('/users', userRoutes)
  .use('/lawyers', lawyerRoutes)
  .use('/clients', clientRoutes)
  .use('/lawsuits', lawsuitRoutes)
  .use('/progresses', progressRoutes)
  .use('/translations', translationRoutes);

module.exports = router;
