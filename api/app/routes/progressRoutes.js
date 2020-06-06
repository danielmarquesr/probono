const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');

router
  .get('/lawsuit/:id', progressController.indexProgressOfLawsuit)
  .get('/:id/translation', progressController.showProgressTranslation);

module.exports = router;
