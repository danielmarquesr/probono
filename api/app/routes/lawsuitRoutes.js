const express = require('express');

const router = express.Router();
const lawsuitController = require('../controllers/lawsuitController');
const verifyToken = require('../helpers/auth');

const auth = (req, res, next) => {
  verifyToken(req, res, next, 'user');
};


router
  .post('/lawyer', auth, lawsuitController.indexLawsuitOfLawyer)
  .post('/client', auth, lawsuitController.indexLawsuitOfClient);

module.exports = router;
3
