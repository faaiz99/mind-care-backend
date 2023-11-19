import { Request, Response, RequestHandler, NextFunction } from "express";
import * as adminService from "../services/admin.service.js";
import { handleError } from "../middlewares/error/middleware.js";
import { handleResponse } from "../middlewares/response/middleware.js";

export const getReportedComment: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await adminService.getReportedComment(req.params.id);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getReportedPost: RequestHandler = async (
  req: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const data = await adminService.getReportedPost(req.params.id);
    handleResponse(response, 200, data);
  } catch (error) {
    handleError(error, response, next);
  }
};

export const getReportedAccount: RequestHandler = async (
  req: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const data = await adminService.getReportedAcccount(req.params.id);
    handleResponse(response, 200, data);
  } catch (error) {
    handleError(error, response, next);
  }
};

export const getReportedPosts: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await adminService.getReportedPosts();
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getReportedComments: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await adminService.getReportedComments();
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getReportedAcccounts: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await adminService.getReportedAcccounts();
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const handleReportPosts: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await adminService.handleReportPosts(req.body, req.params.id);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const handleReportedComments: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await adminService.handleReportedComments(
      req.body,
      req.params.id,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const handleReportAccounts: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await adminService.handleReportAccounts(
      req.body,
      req.params.id,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const handleBlockAccount: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await adminService.handleBlockAccount(req.body, req.params.id);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getDashboardData: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await adminService.getDashboardData();
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const index: RequestHandler = async (req: Request, res: Response) => {
  const data = { message: "Admin Home" };
  handleResponse(res, 200, data);
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
    handleResponse(res, 200, {
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
    handleResponse(res, 201, data);
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
    handleResponse(res, 200, {
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
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};
