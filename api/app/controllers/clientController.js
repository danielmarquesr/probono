const jwt = require('jsonwebtoken');
const { User, Client } = require('../models');

const controller = {};

controller.createClient = async (req, res) => {
  try {
    const { cpf, email, password } = req.body;
    const client = { email, password, Client: { cpf } };
    const userClient = await User.create(client, { include: Client });
    const { id } = userClient.dataValues;
    const role = 'client';
    const token = jwt.sign({ id, role }, process.env.SECRET, {
      expiresIn: 18000,
    });
    res.status(200).json({ token, role });
  } catch (error) {
    res.status(500).json({ error });
  }
};

controller.showClient = async (req, res) => {
  const clientId = req.params.id;
  const client = await Client.findOne({
    attributes: ['id', 'cpf'],
    include: { model: User, attributes: ['id', 'email'] },
  },
  { where: { id: clientId } });
  res.status(200).json(client);
};

module.exports = controller;
