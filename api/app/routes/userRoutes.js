const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../helpers/auth');

const auth = (req, res, next) => {
  verifyToken(req, res, next, 'user');
};

router
  .get('/', auth, userController.indexUser)
  .post('/', userController.createUser)
  .get('/:id', auth, userController.showUser)
  .put('/:id', auth, userController.editUser)
  .delete('/:id', auth, userController.deleteUser);

module.exports = router;
