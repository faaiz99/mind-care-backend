import { Request, Response, NextFunction, RequestHandler } from "express";
import * as commentService from "../services/comment.service.js";
import { handleError } from "../middlewares/error/middleware.js";
import { handleResponse } from "../middlewares/response/middleware.js";
import { redisClient } from "../configs/redis/config.js";
export const createComment: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await commentService.createComment(req.params.id, req.body);

    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const replyComment: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await commentService.replyComment(req.body, req.params.id);

    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const updateComment: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await commentService.updateComment(req.body, req.params.id);

    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const deleteComment: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await commentService.deleteComment(req.params.id);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getComments: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await commentService.getComments(req.params.id);
    await redisClient.set(`comments-${req.params.id}`, JSON.stringify(data), {
      EX: 180,
      NX: true,
    },);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const upvoteComment: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await commentService.upvoteComment(req.body, req.params.id);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const downvoteComment: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await commentService.downvoteComment(req.body, req.params.id);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const reportComment: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await commentService.reportComment(req.body, req.params.id);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const removeUpvoteComment: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await commentService.removeUpvoteComment(
      req.params.uid,
      req.params.cid,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const removeDownvoteComment: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await commentService.removeDownvoteComment(
      req.params.did,
      req.params.cid,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};
