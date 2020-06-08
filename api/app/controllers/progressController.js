const { Translation, Progress } = require('../models');
const lawyerHelper = require('../helpers/lawyer');

const controller = {};

controller.createProgress = async (req, res) => {
  const { date, description, lawsuitId } = req.body;

  const lawyerId = await lawyerHelper.getLawyerId(req);
  const translations = await Translation.findAll({ where: { lawyerId } });

  const progress = await Progress.create({ date, description, lawsuitId });

  let textTarget = ''
  for(translation of translations) {
    textTarget = await translation.dataValues.textTarget;
    if(await description.includes(textTarget)) {
      await progress.addTranslation(translation);
    }
  }

  res.status(201).json(progress);
};

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
      include: { model: Translation, attributes },
    },
  );
  res.status(200).json(progressTranslation);
};

module.exports = controller;
