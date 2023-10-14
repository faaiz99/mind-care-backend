import { Request, Response, RequestHandler, NextFunction } from "express";
import * as reminderService from "../services/reminder.service.js";
import { handleError } from "../middlewares/error/middleware.js";

export const createBreathingExcersiceByClientId: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await reminderService.createBreathingExcersiceByClientId(
      req.body,
      req.params.id,
    );
    res
      .status(200)
      .json({
        status: "success",
        message: "Breathing Excercise Created",
        data,
      });
  } catch (error) {
    handleError(error, res, next);
  }
};

export const createFiveSensesExcersiceByClientId: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await reminderService.createFiveSensesExcersiceByClientId(
      req.body,
      req.params.id,
    );
    res
      .status(200)
      .json({
        status: "success",
        message: "Five Senses Excercise Created",
        data,
      });
  } catch (error) {
    handleError(error, res, next);
  }
};

export const createUnplugUnwindExcerciseByClientId: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await reminderService.createUnplugUnwindExcerciseByClientId(
      req.body,
      req.params.id,
    );
    res
      .status(200)
      .json({
        status: "success",
        message: "Unplug Unwind Excercise Created",
        data,
      });
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getBreathingExcersiceByClientId: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await reminderService.getBreathingExcersiceByClientId(
      req.params.id,
    );
    res
      .status(200)
      .json({
        status: "success",
        message: "Breathing Excersice Excercise Found",
        data,
      });
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getFiveSensesExcersiceByClientId: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await reminderService.getFiveSensesExcersiceByClientId(
      req.params.id,
    );
    res
      .status(200)
      .json({
        status: "success",
        message: "Five Senses Excercise Found",
        data,
      });
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getUnplugUnwindExcerciseByClientId: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await reminderService.getUnplugUnwindExcerciseByClientId(
      req.params.id,
    );
    res
      .status(200)
      .json({
        status: "success",
        message: "Unplug Unwind Excercise Found",
        data,
      });
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getReminders: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await reminderService.getReminders(req.params.id);
    res
      .status(200)
      .json({ status: "success", message: "Reminders Found", data });
  } catch (error) {
    handleError(error, res, next);
  }
};

export const createReminder: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await reminderService.createReminder(req.body);
    res
      .status(200)
      .json({ status: "success", message: "Reminder Created", data });
  } catch (error) {
    handleError(error, res, next);
  }
};

export const updateReminder: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await reminderService.updateReminder(req.body, req.params.id);
    res
      .status(200)
      .json({ status: "success", message: "Reminder modified", data });
  } catch (error) {
    handleError(error, res, next);
  }
};

export const deleteReminder: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await reminderService.deleteReminder(req.params.id);
    res
      .status(200)
      .json({ status: "success", message: "Reminder Deleted", data });
  } catch (error) {
    handleError(error, res, next);
  }
};
