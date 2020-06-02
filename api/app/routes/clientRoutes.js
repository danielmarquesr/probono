const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const verifyToken = require('../helpers/auth');

const auth = (req, res, next) => {
  verifyToken(req, res, next, 'client');
};

router
  .post('/', auth, clientController.createClient)
  .get('/:id', auth, clientController.showClient);

module.exports = router;
