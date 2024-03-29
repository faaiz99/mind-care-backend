import { Request, Response, RequestHandler, NextFunction } from "express";
import * as teletherapyService from "../services/teletherapy.service.js";
import { handleError } from "../middlewares/error/middleware.js";
import { handleResponse } from "../middlewares/response/middleware.js";
import { redisClient } from "../configs/redis/config.js";

export const getTherapistChat: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await teletherapyService.getTherapistChat(
      req.params.tid,
      req.params.cid,
    );
    await redisClient.set(
      `chat-${req.params.tid}-${req.params.cid}`,
      JSON.stringify(data),
      {
        EX: 180,
        NX: true,
      },
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getClientChat: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await teletherapyService.getClientChat(
      req.params.cid,
      req.params.tid,
    );
    await redisClient.set(
      `chat-${req.params.cid}-${req.params.tid}`,
      JSON.stringify(data),
      {
        EX: 180,
        NX: true,
      },
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getClientChats: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await teletherapyService.getClientChats(req.params.id);
    await redisClient.set(`chats-${req.params.id}`, JSON.stringify(data), {
      EX: 180,
      NX: true,
    });
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getTherapistChats: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await teletherapyService.getTherapistChats(req.params.id);
    await redisClient.set(`chats-${req.params.id}`, JSON.stringify(data), {
      EX: 180,
      NX: true,
    });
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const saveChat: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await teletherapyService.saveChat(req.body);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};
