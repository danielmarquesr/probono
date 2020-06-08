const express = require('express');
const lawsuitController = require('../controllers/lawsuitController');
const authHelper = require('../helpers/auth');

const router = express.Router();

const auth = (req, res, next) => {
  authHelper.verifyToken(req, res, next, 'user');
};

router
  .post('/lawyer', auth, lawsuitController.indexLawsuit)
  .post('/client', auth, lawsuitController.indexLawsuitOfClient);

module.exports = router;
