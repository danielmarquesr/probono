const { User } = require('../models');

const controller = {};

controller.getUserInfo = (req, res) => {
  const { userId, role } = req;
  res.status(200).json({ userId, role });
}

controller.indexUser = async (req, res) => {
  const users = await User.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt', 'password'] },
  });
  res.status(200).json(users);
};

controller.createUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.create({ email, password });
  res.status(201).json(user);
};

controller.showUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({
    attributes: { exclude: ['createdAt', 'updatedAt', 'password'] },
    where: { id },
  });
  res.status(200).json(user);
};

controller.editUser = async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;
  const user = await User.update({ email }, { where: { id } });
  res.status(200).json({ user });
};

controller.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  res.status(200).json({});
};

module.exports = controller;
