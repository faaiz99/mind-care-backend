import { Request, Response, RequestHandler, NextFunction } from 'express'
import * as appointmentService from '../services/appointment.service.ts'

export const addSessionNotes:RequestHandler = async (req:Request, res:Response, next:NextFunction): Promise<void> =>{
	try {
		const data = await appointmentService.addSessionNotes(req.body,req.params.id)
		res.status(200).json({status:'success', message:'Session Notes Added', data})
	} catch (error) {
		next(error)
	}
}

export const addTherapistReview: RequestHandler = async (req:Request, res:Response, next:NextFunction): Promise<void> =>{
	try {
		const data = await appointmentService.addTherapistReview(req.body, req.params.id)
		res.status(200).json({status:'success', message:'Therapist Review Added', data})
	} catch (error) {
		next(error)
	}
}

export const getTherapistReview: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.getTherapistReview(req.params.id)
		res.status(200).json({status:'success', message:'Therapist Reviews Found', data })
	} catch (error) {
		next(error)
	}
}


export const updateAppointmentStatus: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.updateAppointmentStatus(req.body)
		res.status(200).json({ status: 'success', message: 'Appintment Status Updated', data })
	} catch (error) {
		next(error)
	}
}

export const createAppointment: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.createAppointment(req.body)
		res.status(200).json({ status: 'success', message: 'Appointment created', data })
	} catch (error) {
		res.status(409).json({ status: "fail", message: 'Appointment could not be created' });
		next(error)
	}

}

export const getAppointmentsClient: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.getAppointmentsClient(req.params.id)
		res.status(200).json({ status: 'success', message: 'Appointments found', data })
	} catch (error) {
		res.status(409).json({ status: 'failure', message: 'Appointments could not be found' })
		next(error)
	}

}

export const getAppointmentsTherapist: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.getAppointmentsTherapist(req.params.id)
		res.status(200).json({ status: 'success', message: 'Appointments found', data })
	} catch (error) {
		res.status(409).json({ status: 'failure', message: 'Appointments could not be found' })
		next(error)
	}

}

export const getAppointment: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.getAppointment(req.params.id)
		res.status(200).json({ status: 'success', message: 'Appointment found', data })
	} catch (error) {
		next(error)
	}

}

export const deleteAppointment: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.deleteAppointment(req.params.id)
		res.status(200).json({ status: 'success', message: 'Appointment Deleted', data })
	} catch (error) {
		next(error)
	}
}

export const updateAppointment: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.updateAppointment(req.body)
		res.status(200).json({ status: 'success', message: 'Appointment updated', data })
	} catch (error) {
		next(error)
	}

}

export const getTherapists: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.getTherapists()
		res.status(200).json({ status: 'success', message: "Therapists Found", data })
	} catch (error) {
		next(error)
	}
}
export const getTherapistById: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.getTherapistById(req.params.id)
		res.status(200).json({ status: 'success', message: "Therapists Found", data })
	} catch (error) {
		next(error)
	}
}