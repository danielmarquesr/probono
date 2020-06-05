const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const controller = {};

const verifyPassword = (password, hash) => bcrypt.compareSync(password, hash);

const sendNotFount = () => {
  res.status(404).json(
    { status: 404, message: 'Wrong email or password !' },
  );
};

controller.loginLawyer = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  const hash = user.dataValues.password;
  if (user && verifyPassword(password, hash)) {
    const { id } = user.dataValues;
    const role = 'laywer';
    const token = jwt.sign({ id, role }, process.env.SECRET, {
      expiresIn: 18000,
    });
    res.status(200).json({ token });
  } else {
    res.status(404).json(
      { status: 404, message: 'Wrong email or password !' },
    );
  }
};

controller.loginClient = async (req, res) => {
  const { cpf, password } = req.body;
  const userClient = await Client.findOne({ where: { cpf }, include: { model: User }});
  if (userClient) {
    const hash = userClient.dataValues.User.dataValues.password;
    if(verifyPassword(password, hash)) {
      const id = userClient.dataValues.userId;
      const role = 'client';
      const token = jwt.sign({ id, role }, process.env.SECRET, {
        expiresIn: 18000,
      });
      res.status(200).json({ token });
    } else sendNotFount();
  } else sendNotFount();
};

module.exports = controller;
