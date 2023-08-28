import { Request, Response, NextFunction, RequestHandler } from 'express'
import jwt from 'jsonwebtoken'
const { ACCESS_JWT_SECRET, REFRESH_JWT_SECRET } = process.env

export const authenticateToken: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, ACCESS_JWT_SECRET, (err, user) => {
    if (err) return res.send(err);
    req.user = user;
    next();
  });
}

export const revalidateToken: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const refreshToken = authHeader && authHeader.split(" ")[1];
  if (refreshToken == null) return res.sendStatus(401);
  jwt.verify(refreshToken, REFRESH_JWT_SECRET, (err, user) => {
    if (err) return res.send(err + ' \n Please Login Again');
    req.user = user;
    console.log('refresh token verified')
    next();
  });
}

export const issueTokens = (userBody): {status:number, accessToken:string, refreshToken:string} => {
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
  return { status: 200, accessToken: token, refreshToken: refreshToken };
}