const express = require('express');

const router = express.Router();
const lawyerController = require('../controllers/lawyerController');
const verifyToken = require('../helpers/auth');

const auth = (req, res, next) => {
  verifyToken(req, res, next, 'lawyer');
};

router
  .post('/', lawyerController.createLawyer)
  .get('/:id', auth, lawyerController.showLawyer);

module.exports = router;
