const jwt = require('jsonwebtoken');
const { User, Client, Lawyer } = require('../models');

const verifyRole = async (routeRole, id) => {
  switch (routeRole) {
    case 'user':
      return true;
    case 'client': {
      const clientUser = await User.findOne(
        { include: Client }, { where: { id } },
      );
      return clientUser.dataValues.Client !== undefined;
    }
    case 'lawyer': {
      const lawyerUser = await User.findOne(
        { include: Lawyer }, { where: { id } },
      );
      return lawyerUser.dataValues.Lawyer !== undefined;
    }
    default:
      return false;
  }
};

const verifyToken = (req, res, next, routeRole) => {
  try {
    const token = req.headers['x-access-token'];
    const payload = jwt.verify(token, process.env.SECRET);
    if (verifyRole(routeRole, payload.id)) {
      req.userId = payload.id;
      next();
    } else res.status(403).json();
  } catch (error) {
    res.status(401).send({ status: 401, error });
  }
};

module.exports = verifyToken;
