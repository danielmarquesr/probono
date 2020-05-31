const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(401).json(
      { auth: false, message: 'Token não informado.' }
    );
  } else {
    try {
      decoded = jwt.verify(token, process.env.SECRET);
      req.userId = decoded.id;
      next();
    } catch (error) {
      return res.status(403).send(
        { error, message: 'Token inválido.' }
      );
    }
  }
};

module.exports = verifyToken;
