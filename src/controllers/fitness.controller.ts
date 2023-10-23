import { Request, Response, NextFunction, RequestHandler } from "express";
import * as fitnessService from "../services/sleep.service.js";
import { handleError } from "../middlewares/error/middleware.js";
import { handleResponse } from "../middlewares/response/middleware.js";
export const createFitnessRecord: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await fitnessService.createFitnessRecord(
      req.body,
      req.params.id,
    );
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};

export const getFitnessRecords: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await fitnessService.getFitnessRecords(req.params.id);
    handleResponse(res, 200, data)

  } catch (error) {
    handleError(error, res, next);
  }
};

export const updateFitnessRecord: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await fitnessService.updateFitnessRecord(
      req.body,
      req.params.id,
    );
    handleResponse(res, 200, data)
  } catch (error) {
    handleError(error, res, next);
  }
};
