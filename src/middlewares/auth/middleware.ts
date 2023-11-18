/* eslint-disable @typescript-eslint/no-unused-vars */
import { IToken } from "../../types/ITokens.js";
import { Request, Response, NextFunction, RequestHandler } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// const { ACCESS_JWT_SECRET, REFRESH_JWT_SECRET } = process.env
if(process.env.NODE_ENV !== "production") {
  const ACCESS_JWT_SECRET = dotenv.config().parsed?.ACCESS_JWT_SECRET;
  const REFRESH_JWT_SECRET = dotenv.config().parsed?.REFRESH_JWT_SECRET;
}
const ACCESS_JWT_SECRET = process.env.ACCESS_JWT_SECRET;
const REFRESH_JWT_SECRET = process.env.REFRESH_JWT_SECRET;


export const authenticateToken: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader;
  if (token == null) return res.sendStatus(401);
  jwt.verify(token as string, ACCESS_JWT_SECRET as string, (err, user) => {
    if (err) return res.send(err);
    req.body.user = user;
    next();
  });
};

export const revalidateToken: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const authHeader = req.headers["authorization"];
  if (!authHeader)
    res.status(401).json({
      status: "failure",
      message: "Authorization Header Absent",
      data: authHeader,
    });
  jwt.verify(
    authHeader as string,
    REFRESH_JWT_SECRET as string,
    (err, user) => {
      if (err)
        res
          .status(409)
          .json({ status: "failure", message: "Please Login Again" });
      req.body = user;
      next();
    },
  );
};

export const issueTokens = (userBody: unknown): IToken => {
  // used for both therapist and client

  const token = jwt.sign(
    {
      user: userBody,
    },
    ACCESS_JWT_SECRET as string,
    {
      expiresIn: "10s",
    },
  );
  const refreshToken = jwt.sign(
    {
      user: userBody,
    },
    REFRESH_JWT_SECRET as string,
    {
      expiresIn: "24h",
    },
  );
  return { accessToken: token, refreshToken: refreshToken, data: userBody };
};
