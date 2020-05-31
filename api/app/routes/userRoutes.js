const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router
  .get('/', userController.indexUser)
  .post('/', userController.createUser)
  .get('/:id', userController.getUser)
  .put('/:id', userController.editUser)
  .delete('/:id', userController.deleteUser);

module.exports = router;
