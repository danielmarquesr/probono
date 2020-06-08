const express = require('express');
const translationController = require('../controllers/translationController');
const authHelper = require('../helpers/auth');

const router = express.Router();

const auth = (req, res, next) => {
  authHelper.verifyToken(req, res, next, 'lawyer');
};

router
  .post('', auth, translationController.createTranslation)
  .get('/:id', auth, translationController.indexTranslationOfLawyer)
  .get('/:id/progress', auth, translationController.showTranslationProgress);

module.exports = router;
