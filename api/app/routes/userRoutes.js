const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../helpers/auth');

router
  .get('/', verifyToken, userController.indexUser)
  .post('/', userController.createUser)
  .get('/:id', verifyToken, userController.showUser)
  .put('/:id', verifyToken, userController.editUser)
  .delete('/:id', verifyToken, userController.deleteUser);

module.exports = router;
