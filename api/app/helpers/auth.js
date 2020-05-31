const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];
    decoded = jwt.verify(token, process.env.SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).send({ status: 401, error });
  }
};

module.exports = verifyToken;
