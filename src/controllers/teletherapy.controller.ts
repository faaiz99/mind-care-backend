import { Request, Response, RequestHandler, NextFunction } from "express";
import * as teletherapyService from "../services/teletherapy.service.js";
import { handleError } from "../middlewares/error/middleware.js";

export const getClientChats: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  // id -> Clientid
  try {
    const data = await teletherapyService.getClientChats(req.params.id);
    res
      .status(200)
      .json({ status: "success", message: "Client Chats Found", data });
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getTherapistChats: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  // id -> therapistid
  try {
    const data = await teletherapyService.getTherapistChats(req.params.id);
    res
      .status(200)
      .json({ status: "success", message: "Therapist Chats Found", data });
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getMessages: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await teletherapyService.getMessages(req.params.id);
    res
      .status(200)
      .json({ status: "success", message: "Messages Found", data });
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getCurrentChat: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  // Fetch the current Chat for both the users
  try {
    const data = await teletherapyService.getCurrentChat(
      req.params.cid,
      req.params.tid,
    );
    res
      .status(200)
      .json({ status: "success", message: "Current Chat Found", data });
  } catch (error) {
    handleError(error, res, next);
  }
};
