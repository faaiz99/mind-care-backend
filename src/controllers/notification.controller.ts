import * as notificationService from "../services/notification.service.js";
import { handleError } from "../middlewares/error/middleware.js";
import { handleResponse } from "../middlewares/response/middleware.js";
import { Request, Response, NextFunction, RequestHandler } from "express";
import webpush from "web-push";
export const createNotificationTherapist: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await notificationService.createNotificationTherapist(
      req.body,
      req.params.id,
    );

    const payload = JSON.stringify({
      title: "Appointment Scheduled",
      body: "You have a new appointment scheduled for tomorrow at 10:00 AM",
    });
    const subscription = req.body;
    await webpush.sendNotification(subscription, payload);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const createNotificationClient: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await notificationService.createNotificationClient(
      req.body,
      req.params.id,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const deleteNotificationById: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await notificationService.deleteNotificationById(
      req.params.id,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const markAsReadNotificationById: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await notificationService.markAsReadNotificationById(
      req.params.id,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getNotificationsTherapist: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await notificationService.getNotificationsTherapist(
      req.params.id,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getNotificationsClient: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await notificationService.getNotificationsClient(
      req.params.id,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};
