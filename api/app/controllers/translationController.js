const { Lawsuit, Translation, Progress, Lawyer } = require('../models');
const sequelize = require('sequelize');
const lawyerHelper = require('../helpers/lawyer');
const controller = {};

const matchText = async (textTarget, description) => {
  return description.includes(textTarget)
};

controller.createTranslation = async (req, res) => {
  const { explanation, textTarget } = req.body;
  const lawyerId = await lawyerHelper.getLawyerId(req);
  const lawsuitsProgress = await Lawsuit.findAll(
    { where: lawyerId, include: { model: Progress } }
  );

  const translation = await Translation.create(
    { explanation, textTarget, lawyerId }
  );

  for (lawsuit of lawsuitsProgress) {
    for (progress of lawsuit.dataValues.Progresses) {
      if (await matchText(textTarget, progress.description)) {
        translation.addProgress(progress);
      }
    }
  }
  res.status(200).json(translation);
};

controller.indexTranslationOfLawyer = async (req, res) => {
  const lawyerId = await lawyerHelper.getLawyerId(req);
  const translations = await Translation.findAll({ where: { lawyerId } });
  res.status(200).json(translations);
};

controller.showTranslationProgress = async (req, res) => {
  const { id } = req.params;
  const attributes = { attributes: { exclude: ['createdAt', 'updatedAt'] } };
  const translationProgress = await Translation.findOne({
    where: { id },
    attributes,
    include: { model: Progress, attributes }
  });
  res.status(200).json(translationProgress);
};

module.exports = controller;
