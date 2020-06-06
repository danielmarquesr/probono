const express = require('express');
const lawyerController = require('../controllers/lawyerController');
const verifyToken = require('../helpers/auth');

const router = express.Router();

const auth = (req, res, next) => {
  verifyToken(req, res, next, 'lawyer');
};

router
  .post('/', lawyerController.createLawyer)
  .get('/:id', auth, lawyerController.showLawyer);

module.exports = router;
