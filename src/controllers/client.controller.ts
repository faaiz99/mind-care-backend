import { Request, Response, NextFunction, RequestHandler } from "express";
import { IToken } from "../types/ITokens.js";
import * as clientService from "../services/client.service.js";
import { handleError } from "../middlewares/error/middleware.js";
import { handleResponse } from "../middlewares/response/middleware.js";

export const enternewPassword: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await clientService.enternewPassword(
      req.body.email,
      req.body.password,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const resetPassword: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await clientService.resetPassword(req.body.email);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const verifyAccount: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await clientService.verifyAccount(req.body.email);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const sendverificationEmail: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  clientService.sendverificationEmail(req.body.email);
  next();
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { accessToken, refreshToken, data }: IToken =
      await clientService.login(req.body.email, req.body.password);
    handleResponse(res, 200, {
      accessToken: accessToken,
      refreshToken: refreshToken,
      data,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.message === "Incorrect Password") handleError(error, res, next);
    else if (error.message === "Account does not exist")
      handleError(error, res, next);
    else handleError(error, res, next);
  }
};

export const signup: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await clientService.signup(req.body);
    handleResponse(res, 200, data);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.message === "email already in database")
      handleError(error, res, next);
    else if (error.message === "account could not be created")
      handleError(error, res, next);
    else handleError(error, res, next);
  }
};

export const renewToken: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { accessToken, refreshToken, data } = await clientService.renewTokens(
      req.body.user,
    );
    handleResponse(res, 200, {
      status: "success",
      accessToken: accessToken,
      refreshToken: refreshToken,
      data,
    });
  } catch (error) {
    handleError(error, res, next);
  }
};

export const about: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await clientService.aboutClient(req.params.id);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};
