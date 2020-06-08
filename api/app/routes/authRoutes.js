const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .post('/login/client', authController.loginClient)
  .post('/login/lawyer', authController.loginLawyer);

module.exports = router;
