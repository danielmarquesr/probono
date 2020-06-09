const { Client, Lawyer, Lawsuit } = require('../models');

const controller = {};

controller.createLawsuit = async (req, res) => {
  const { userId } = req;
  const lawyer = await Lawyer.findOne({ where: { userId } });
  const lawyerId = lawyer.dataValues.id;
  const { date, description } = req.body;
  const lawsuit = await Lawsuit.create({ date, description, lawyerId });
  res.status(201).json(lawsuit);
};

controller.indexLawsuitOfLawyer = async (req, res) => {
  const { userId } = req;
  const lawyer = await Lawyer.findOne({ where: { userId } });
  const lawyerId = lawyer.dataValues.id;
  const lawsuits = await Lawsuit.findAll({
    where: { lawyerId }, include: { model: Client },
  });
  res.status(200).json(lawsuits);
};

controller.indexLawsuitOfClient = async (req, res) => {
  const { userId } = req;
  const client = await Client.findOne({ where: { userId } });
  const clientId = client.dataValues.id;
  const lawsuits = await Lawsuit.findAll({
    where: { clientId }, include: { model: Lawyer },
  });
  res.status(200).json(lawsuits);
};

module.exports = controller;
