import { Token } from '../Types/Tokens.js'
import { Request, Response, NextFunction, RequestHandler } from 'express'
import jwt from 'jsonwebtoken'
const { ACCESS_JWT_SECRET, REFRESH_JWT_SECRET } = process.env

export const authenticateToken: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader;
  if (token == null) return res.sendStatus(401);
  jwt.verify(token as string, ACCESS_JWT_SECRET as string, (err, user) => {
    if (err) return res.send(err);
    req.body.user = user;
    next();
  });
}

export const revalidateToken: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const authHeader = req.headers["authorization"];
  if (authHeader === null || authHeader === undefined)
    res.json({ status: 401, message: 'Authorization Header Absent', data: authHeader })
  jwt.verify(authHeader as string, REFRESH_JWT_SECRET as string, (err, user) => {
    if (err)
      res.status(200).json({message:'Please Login Again'})
    req.body.user = user
    console.log('refresh token verified')
    next();
  });
}

export const issueTokens = (userBody: unknown): Token => {
  // used for both therapist and client
  const token = jwt.sign(
    {
      user: userBody,
    },
    ACCESS_JWT_SECRET as string,
    {
      expiresIn: '1h',
    }
  );
  const refreshToken = jwt.sign(
    {
      user: userBody,
    },
    REFRESH_JWT_SECRET as string,
    {
      expiresIn: '24h',
    }
  );
  return { accessToken: token, refreshToken: refreshToken, data: userBody };
}