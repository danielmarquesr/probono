const { Lawyer } = require('../models');

const getLawyerId = async (req) => {
  const { userId } = req;
  const lawyer = await Lawyer.findOne({ where: { userId } });
  const lawyerId = lawyer.dataValues.id;
  return lawyerId;
}

module.exports = { getLawyerId };
