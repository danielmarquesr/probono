const express = require('express');
const userController = require('../controllers/userController');
const authHelper = require('../helpers/auth');

const router = express.Router();

const auth = (req, res, next) => {
  authHelper.verifyToken(req, res, next, 'user');
};

router
  .get('/', auth, userController.indexUser)
  .post('/', userController.createUser)
  .get('/:id', auth, userController.showUser)
  .put('/:id', auth, userController.editUser)
  .delete('/:id', auth, userController.deleteUser);

module.exports = router;
