const express = require('express');
const clientController = require('../controllers/clientController');
const authHelper = require('../helpers/auth');

const router = express.Router();

const auth = (req, res, next) => {
  authHelper.verifyToken(req, res, next, 'client');
};

router
  .post('/', clientController.createClient)
  .get('/:id', auth, clientController.showClient);

module.exports = router;
