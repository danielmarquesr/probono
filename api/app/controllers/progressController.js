const { Translation, Progress } = require('../models');
const controller = {};

controller.indexProgressOfLawsuit = async (req, res) => {
  const lawsuitId = req.params.id;
  const progress = await Progress.findAll({ where: { lawsuitId } });
  res.status(200).json(progress);
};

controller.showProgressTranslation = async (req, res) => {
  const { id } = req.params;
  const attributes = { attributes: { exclude: ['createdAt', 'updatedAt'] } };
  const progressTranslation = await Progress.findOne(
    {
      where: { id },
      attributes,
      include: {
        model: Translation,
        attributes,
      }
    }
  );
  res.status(200).json(progressTranslation);
};

module.exports = controller;
