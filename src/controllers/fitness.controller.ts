import { Request, Response, NextFunction, RequestHandler } from "express";
import * as fitnessService from "../services/sleep.service.js";
import { handleError } from "../middlewares/error/middleware.js";

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
    res
      .status(200)
      .json({ status: "success", message: "Fitness Reccord Created", data });
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
    res
      .status(200)
      .json({ status: "success", message: "Fitness Reccord Found", data });
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
    res
      .status(200)
      .json({ status: "success", message: "Fitness Reccord Found", data });
  } catch (error) {
    handleError(error, res, next);
  }
};
