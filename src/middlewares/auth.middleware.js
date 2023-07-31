import jwt from 'jsonwebtoken'

const { ACCESS_JWT_SECRET, REFRESH_JWT_SECRET } = process.env

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  let token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, ACCESS_JWT_SECRET, (err, user) => {
    if (err) return res.send(err);
    req.user = user;
    next();
  });
}

export const revalidateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  let refreshToken = authHeader && authHeader.split(" ")[1];
  if (refreshToken == null) return res.sendStatus(401);
  jwt.verify(refreshToken, REFRESH_JWT_SECRET, (err, user) => {
    if (err) return res.send(err + ' \n Please Login Again');
    req.user = user;
    console.log('refresh token verified')
    next();
  });
}

export const issueTokens = (userBody) => {
  // used for both therapist and client
  const token = jwt.sign(
    {
      user: userBody,
    },
    ACCESS_JWT_SECRET,
    {
      expiresIn: '1h',
    }
  );
  const refreshToken = jwt.sign(
    {
      user: userBody,
    },
    REFRESH_JWT_SECRET,
    {
      expiresIn: '24h',
    }
  );
  return { status: 200, "accessToken": token, "refreshToken": refreshToken };
}