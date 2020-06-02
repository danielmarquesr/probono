const { User, Client, Lawyer } = require('../models');
const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next, routeRole) => {
  try {
    const token = req.headers['x-access-token'];
    const payload = jwt.verify(token, process.env.SECRET);
    if (verifyRole(routeRole, payload.id)) {
      req.userId = payload.id;
      next();
    }
    else
      res.status(403).json();
  } catch (error) {
    return res.status(401).send({ status: 401, error });
  }
};

const verifyRole = async (routeRole, id) => {
  switch (routeRole) {
    case 'user':
      return true;
    case 'client':
      const clientUser = await User.findOne(
        { include: Client }, { where: { id } }
      );
      return clientUser.dataValues.Client !== undefined;
    case 'lawyer':
      const lawyerUser = await User.findOne(
        { include: Lawyer }, { where: { id } }
      );
      return lawyerUser.dataValues.Lawyer !== undefined;
    default:
      return false;
  }
};

module.exports = verifyToken;
