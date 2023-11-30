import { Request, Response, RequestHandler, NextFunction } from "express";
import * as psychologicalProfileService from "../services/psychologicaProfile.service.js";
import { handleError } from "../middlewares/error/middleware.js";
import { handleResponse } from "../middlewares/response/middleware.js";
import { redisClient } from "../configs/redis/config.js";

export const buildPsychologicalProfile: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await psychologicalProfileService.buildPsychologicalProfile(
      req.params.id,
      req.body,
    );

    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const setTestScore: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await psychologicalProfileService.setTestScore(
      req.params.id,
      req.body,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getPsychologicalProfile: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  let isCached = false;
  try {
    const cachedData = await redisClient.get(
      `psychological-profile-${req.params.id}`,
    );
    if (cachedData) {
      isCached = true;
      handleResponse(res, 200, JSON.parse(cachedData), isCached);
      return;
    } else {
      const data = await psychologicalProfileService.getPsychologicalProfile(
        req.params.id,
      );
      await redisClient.set(
        `psychological-profile-${req.params.id}`,
        JSON.stringify(data),{
          EX: 180,
          NX: true,
        },
      );
      handleResponse(res, 200, data);
    }
  } catch (error) {
    handleError(error, res, next);
  }
};

export const saveAnxietyTest: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await psychologicalProfileService.saveAnxietyTest(
      req.params.id,
      req.body,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const saveDepressionTest: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await psychologicalProfileService.saveDepressionTest(
      req.params.id,
      req.body,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getAnxietyTest: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await psychologicalProfileService.getAnxietyTest(
      req.params.id,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getDepressionTest: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await psychologicalProfileService.getDepressionTest(
      req.params.id,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};
