const jwt = require('jsonwebtoken');
const { User, Lawyer } = require('../models');

const controller = {};

controller.createLawyer = async (req, res) => {
  try {
    const { cna, email, password } = req.body;
    const lawyer = { email, password, Lawyer: { cna } };
    const userLawyer = await User.create(lawyer, { include: Lawyer });
    const role = 'lawyer';
    const { id } = userLawyer.dataValues;
    const token = jwt.sign({ id, role }, process.env.SECRET, {
      expiresIn: 18000,
    });
    res.status(200).json({ token, role });
  } catch (error) {
    res.status(500).json({ error });
  }
};

controller.showLawyer = async (req, res) => {
  const lawyerId = req.params.id;
  const lawyer = await Lawyer.findOne({
    attributes: ['id', 'cna'],
    include: { model: User, attributes: ['id', 'email'] },
  },
  { where: { id: lawyerId } });
  res.status(200).json(lawyer);
};

module.exports = controller;
