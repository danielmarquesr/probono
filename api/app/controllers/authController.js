const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const controller = {};

const verifyPassword = (password, hash) => bcrypt.compareSync(password, hash);

controller.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  const hash = user.dataValues.password;
  if (user && verifyPassword(password, hash)) {
    const { id } = user.dataValues;
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 18000,
    });
    res.status(200).json({ token });
  } else {
    res.status(404).json(
      { status: 404, message: 'Wrong email or password !' },
    );
  }
};

module.exports = controller;
