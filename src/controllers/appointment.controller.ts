import { Request, Response, RequestHandler, NextFunction } from "express";
import * as appointmentService from "../services/appointment.service.js";
import { handleError } from "../middlewares/error/middleware.js";
import { handleResponse } from "../middlewares/response/middleware.js";
import { redisClient } from "../configs/redis/config.js";

export const createAppointment: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await appointmentService.createAppointment(req.body);
    handleResponse(res, 201, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getAppointment: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await appointmentService.getAppointment(req.params.id);
    if (data) {
      handleResponse(res, 200, data);
    } else {
      res
        .status(404)
        .json({ status: "fail", message: "Appointment not found", data });
    }
  } catch (error) {
    handleError(error, res, next);
  }
};

export const updateAppointment: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await appointmentService.updateAppointment(
      req.body,
      req.params.id,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const updateAppointmentStatus: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await appointmentService.updateAppointmentStatus(
      req.body,
      req.params.id,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const deleteAppointment: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await appointmentService.deleteAppointment(req.params.id);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getAppointmentsClient: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  let isCached = false;
  try {
    const cacheResults = await redisClient.get("appointments-client");
    if (cacheResults) {
      isCached = true;
      handleResponse(res, 200, JSON.parse(cacheResults), true);
    } else {
      const data = await appointmentService.getAppointmentsClient(
        req.params.id,
      );
      await redisClient.set("appointments-client", JSON.stringify(data),{
        EX: 180,
        NX: true,
      });
      handleResponse(res, 200, data, isCached);
    }
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getAppointmentsTherapist: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  let isCached = false;
  try {
    const cacheResults = await redisClient.get("appointments-therapist");
    if (cacheResults) {
      isCached = true;
      handleResponse(res, 200, JSON.parse(cacheResults), true);
    } else {
      const data = await appointmentService.getAppointmentsTherapist(
        req.params.id,
      );
      await redisClient.set("appointments-therapist", JSON.stringify(data) {
        EX: 180,
        NX: true,
      });
      handleResponse(res, 200, data, isCached);
    }
  } catch (error) {
    handleError(error, res, next);
  }
};

export const addSessionNotes: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await appointmentService.addSessionNotes(
      req.body,
      req.params.id,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const addTherapistReview: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await appointmentService.addTherapistReview(
      req.body,
      req.params.id,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getTherapistReview: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await appointmentService.getTherapistReview(req.params.id);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getTherapists: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  let isCached = false;
  try {
    const cacheResults = await redisClient.get("therapists");
    if (cacheResults) {
      isCached = true;
      handleResponse(res, 200, JSON.parse(cacheResults), true);
    } else {
      const data = await appointmentService.getTherapists();
      await redisClient.set("therapists", JSON.stringify(data), {
        EX: 180,
        NX: true,
      });
      handleResponse(res, 200, data, isCached);
    }
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getTherapistById: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = await appointmentService.getTherapistById(req.params.id);
    if (!data) {
      res.status(404).json({ status: "fail", message: "Therapist not found" });
    }
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};
