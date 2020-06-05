const { Lawsuit, Progress } = require('../models');
const controller = {};

controller.indexProgressOfLawsuit = async (req, res) => {
  const lawsuitId = req.params.id;
  const progress = await Progress.findAll({ where: { lawsuitId } });
  res.status(200).json(progress);
}

module.exports = controller;
