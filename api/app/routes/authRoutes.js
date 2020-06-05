const express = require('express');

const router = express.Router();
const authController = require('../controllers/authController');

router
  .post('/login/client', authController.loginClient)
  .post('/login/lawyer', authController.loginLawyer);

module.exports = router;
