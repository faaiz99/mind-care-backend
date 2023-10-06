import { Request, Response, RequestHandler, NextFunction } from 'express'
import * as appointmentService from '../services/appointment.service.ts'
import { handleError } from '../middlewares/error/middleware.ts'

// Request Handlers for Appointments
export const createAppointment: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.createAppointment(req.body);
		res.status(201).json({ status: 'success', message: 'Appointment created', data });
	} catch (error) {
		handleError(error, res, next); // Conflict when appointment cannot be created
	}
};

export const getAppointment: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.getAppointment(req.params.id);
		if (data) {
			res.status(200).json({ status: 'success', message: 'Appointment found', data });
		} else {
			res.status(404).json({ status: 'fail', message: 'Appointment not found', data });
		}
	} catch (error) {
		handleError(error, res, next);
	}
};

export const updateAppointment: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.updateAppointment(req.body, req.params.id);
		res.status(200).json({ status: 'success', message: 'Appointment updated', data });
	} catch (error) {
		handleError(error, res, next);
	}
};

export const updateAppointmentStatus: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.updateAppointmentStatus(req.body, req.params.id)
		res.status(200).json({ status: 'success', message: 'Appintment Status Updated', data })
	} catch (error) {
		handleError(error, res, next);
	}
}

export const deleteAppointment: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.deleteAppointment(req.params.id);
		res.status(200).json({ status: 'success', message: 'Appointment Deleted', data });
	} catch (error) {
		handleError(error, res, next);
	}
};

export const getAppointmentsClient: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.getAppointmentsClient(req.params.id);
		res.status(200).json({ status: 'success', message: 'Appointments found', data });
	} catch (error) {
		handleError(error, res, next);
	}
};

export const getAppointmentsTherapist: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.getAppointmentsTherapist(req.params.id);
		res.status(200).json({ status: 'success', message: 'Appointments found', data });
	} catch (error) {
		handleError(error, res, next);
	}
};

// Request Handlers for Session Notes and Therapist Reviews
export const addSessionNotes: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.addSessionNotes(req.body, req.params.id);
		res.status(200).json({ status: 'success', message: 'Session Notes Added', data });
	} catch (error) {
		handleError(error, res, next);
	}
};

export const addTherapistReview: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.addTherapistReview(req.body, req.params.id);
		res.status(200).json({ status: 'success', message: 'Therapist Review Added', data });
	} catch (error) {
		handleError(error, res, next);
	}
};

export const getTherapistReview: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.getTherapistReview(req.params.id);
		res.status(200).json({ status: 'success', message: 'Therapist Reviews Found', data });
	} catch (error) {
		handleError(error, res, next);
	}
};

export const getTherapists: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.getTherapists();
		res.status(200).json({ status: 'success', message: "Therapists retrieved successfully", data });
	} catch (error) {
		handleError(error, res, next);
	}
};

export const getTherapistById: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.getTherapistById(req.params.id);
		if (data) {
			res.status(200).json({ status: 'success', message: "Therapist found", data });
		} else {
			res.status(404).json({ status: 'fail', message: "Therapist not found" });
		}
	} catch (error) {
		handleError(error, res, next);
	}
};
