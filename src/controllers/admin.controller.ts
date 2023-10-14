import { Request, Response, RequestHandler, NextFunction } from "express";
import * as adminService from "../services/admin.service.js";
import { handleError } from "../middlewares/error/middleware.js";

export const index: RequestHandler = async (req: Request, res: Response) => {
  res.status(200).json({ status: "success", message: "Admin Home" });
};

export const login: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { accessToken, refreshToken, data } = await adminService.login(
      req.body.email,
      req.body.password,
    );
    res
      .status(200)
      .json({
        status: "success",
        accessToken: accessToken,
        refreshToken: refreshToken,
        data,
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.message == "Account does not exist")
      res
        .status(404)
        .json({ status: "fail", message: "Account does not exist" });
    else handleError(error, res, next);
  }
};
export const signup: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await adminService.signup(req.body);
    res
      .status(201)
      .json({ status: "success", message: "Admin Account created", data });
  } catch (error) {
    handleError(error, res, next);
  }
};
export const renewToken: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { accessToken, refreshToken, data } = await adminService.renewTokens(
      req.body.user,
    );
    res
      .status(200)
      .json({
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
) => {
  try {
    const data = await adminService.aboutAdmin(req.params.id);
    res
      .status(200)
      .json({ status: "success", message: "Admin Account found", data });
  } catch (error) {
    handleError(error, res, next);
  }
};
