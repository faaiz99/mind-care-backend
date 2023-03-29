const jwt = require('jsonwebtoken');
const { ACCESS_JWT_SECRET, REFRESH_JWT_SECRET } = process.env
const Client = require('../models/client')


exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  let token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, ACCESS_JWT_SECRET, (err, user) => {
    if (err) return res.send(err);
    req.user = user;
    next();
  });
}

exports.revalidateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  let refreshToken = authHeader && authHeader.split(" ")[1];
  if (refreshToken == null) return res.sendStatus(401);
  jwt.verify(refreshToken, REFRESH_JWT_SECRET, (err, user) => {
    if (err) return res.send(err + 'Login Again');
    req.user = user;
    console.log('refresh token verified')
    next();
  });
}

exports.assignTokens = (clientBody) => {
  const token = jwt.sign(
    {
      user: clientBody,
    },
    ACCESS_JWT_SECRET,
    {
      expiresIn: '30s',
    }
  );
  const refreshToken = jwt.sign(
    {
      user: clientBody,
    },
    REFRESH_JWT_SECRET,
    {
      expiresIn: '24h',
    }
  );
  return { status: "OK", "accessToken": token, "refreshToken": refreshToken };
}