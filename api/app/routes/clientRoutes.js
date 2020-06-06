const express = require('express');
const clientController = require('../controllers/clientController');
const verifyToken = require('../helpers/auth');

const router = express.Router();

const auth = (req, res, next) => {
  verifyToken(req, res, next, 'client');
};

router
  .post('/', clientController.createClient)
  .get('/:id', auth, clientController.showClient);

module.exports = router;
