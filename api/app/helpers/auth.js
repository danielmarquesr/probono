const jwt = require('jsonwebtoken');
const { User, Client, Lawyer } = require('../models');

const getUserRole = async (id) => {
  const clientUser = await User.findOne(
    { include: Client }, { where: { id } },
  );
  if (clientUser.dataValues.Client !== undefined) return 'client';
  const lawyerUser = await User.findOne(
    { include: Lawyer }, { where: { id } },
  );
  if (lawyerUser.dataValues.Lawyer !== undefined) return 'lawyer';
};

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
    const token = req.headers.authorization;
    const payload = jwt.verify(token, process.env.SECRET);
    if (verifyRole(routeRole, payload.id)) {
      req.userId = payload.id;
      req.role = payload.role;
      next();
    } else res.status(403).json();
  } catch (error) {
    res.status(401).send({ status: 401, error });
  }
};

module.exports = { getUserRole, verifyToken };
