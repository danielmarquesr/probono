const { User, Lawyer } = require('../models');
const controller = {};

controller.createLawyer = async (req, res) => {
  try {
    const { cna, email, password } = req.body;
    let lawyer = { email, password, Lawyer: { cna } };
    lawyer = await User.create(lawyer, { include: Lawyer });
    res.status(201).json(lawyer);
  } catch (error) {
    res.status(500).json({ error });
  }
};

controller.showLawyer = async (req, res) => {
  const lawyerId = req.params.id;
  const lawyer = await Lawyer.findOne({
    attributes: ['id', 'cna'],
    include: { model: User, attributes: ['id', 'email'] }
  },
  { where: { id: lawyerId } }
  );
  res.status(200).json(lawyer);
};

module.exports = controller;
