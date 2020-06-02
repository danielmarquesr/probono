const { User, Client } = require('../models');

const controller = {};

controller.createClient = async (req, res) => {
  try {
    const { cpf, email, password } = req.body;
    let client = { email, password, client: { cpf } };
    client = await User.create(client, { include: client });
    res.status(201).json(client);
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
