const { User } = require('../models');
const jwt = require('jsonwebtoken');

const controller = {};

controller.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    const id = user.dataValues.id;
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 600
    });
    res.status(200).json({ token });
  } else {
    res.status(404).json(
      { status: 404, message: 'Wrong email or password !' }
    );
  }
};

controller.logout = async (req, res) => {
  const id = req.params.id;
  const user = await User.findAll({ where: { id } });
  res.status(200).json(user);
};

module.exports = controller;
