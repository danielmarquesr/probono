const { Client, Lawyer, Lawsuit } = require('../models');

const controller = {};

controller.indexLawsuit = async (req, res) => {
  const { userId, role } = req;
  let lawsuits = {};
  if (role === 'lawyer') {
    const lawyer = await Lawyer.findOne({ where: { userId } });
    const lawyerId = lawyer.dataValues.id;
    lawsuits = await Lawsuit.findAll({
      where: { lawyerId }, include: { model: Client },
    });
  } else {
    const client = await Client.findOne({ where: { userId } });
    const clientId = client.dataValues.id;
    lawsuits = await Lawsuit.findAll({
      where: { clientId }, include: { model: Lawyer },
    });
  }
  res.status(200).json(lawsuits);
};

controller.indexLawsuitOfClient = async (req, res) => {
  const { userId } = req;
  const client = await Client.findOne({ where: { userId } });
  const clientId = client.dataValues.id;
  const lawsuits = await Lawsuit.findAll({ where: { clientId } });
  res.status(200).json(lawsuits);
};

module.exports = controller;
