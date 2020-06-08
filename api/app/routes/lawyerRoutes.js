const express = require('express');
const lawyerController = require('../controllers/lawyerController');
const authHelper = require('../helpers/auth');

const router = express.Router();

const auth = (req, res, next) => {
  authHelper.verifyToken(req, res, next, 'lawyer');
};

router
  .post('/', lawyerController.createLawyer)
  .get('/:id', auth, lawyerController.showLawyer);

module.exports = router;
