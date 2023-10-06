import { Request, Response, NextFunction, RequestHandler } from 'express';
import { IToken } from '../types/ITokens.js'
import * as clientService from '../services/client.service.ts';
import { handleError } from '../middlewares/error.middlewar.ts'

export const enternewPassword: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await clientService.enternewPassword(req.body.email, req.body.password);
    res.status(200).json({ status: 'success', message: 'Account Password Changed', data });
  } catch (error) {
    handleError(error, res, next);
  }
};

export const resetPassword: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await clientService.resetPassword(req.body.email);
    res.status(200).json({ status: 'success', message: 'Account Password Updated', data });
  } catch (error) {
    handleError(error, res, next);
  }
};

export const verifyAccount: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await clientService.verifyAccount(req.body.email);
    res.status(200).json({ status: 'success', message: 'Account successfully verified', data });
  } catch (error) {
    handleError(error, res, next);
  }
};

export const sendverificationEmail: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  clientService.sendverificationEmail(req.body.email);
  next();
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { accessToken, refreshToken, data }: IToken = await clientService.login(req.body.email, req.body.password);
    res.status(200).json({ status: 'success', accessToken: accessToken, refreshToken: refreshToken, data });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.message === 'Incorrect Password')
      handleError(error, res, next);
    else if (error.message === 'Account does not exist')
      handleError(error, res, next);
    else
      handleError(error, res, next);
  }
};

export const signup: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await clientService.signup(req.body);
    res.status(200).json({ status: 'success', message: 'Client Account created', data });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.message === 'email already in database')
      handleError(error, res, next);
    else if (error.message === 'account could not be created')
      handleError(error, res, next);
    else
      handleError(error, res, next);
  }
};

export const renewToken: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { accessToken, refreshToken, data } = await clientService.renewTokens(req.body.user);
    res.status(200).json({ status: 'success', accessToken: accessToken, refreshToken: refreshToken, data });
  } catch (error) {
    handleError(error, res, next);
  }
};

export const about: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await clientService.aboutClient(req.params.id);
    res.status(200).json({ status: 'success', message: 'Client Account found', data });
  } catch (error) {
    handleError(error, res, next);
  }
};
