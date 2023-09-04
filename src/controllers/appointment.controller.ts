import { Request, Response, RequestHandler, NextFunction } from 'express'
import * as appointmentService from '../services/appointment.service.ts'

export const createAppointment: RequestHandler = async (req: Request, res: Response) => {
	try {
		const data = await appointmentService.createAppointment(req.body)
		res.status(200).json({})
	} catch (error) {

	}

}

export const getAppointments: RequestHandler = async (req: Request, res: Response) => {
	try {
		const data = await appointmentService.getAppointments()
		res.status(200).json({})
	} catch (error) {

	}

}

export const getAppointment: RequestHandler = async (req: Request, res: Response) => {
	try {
		const data = await appointmentService.getAppointment()
		res.status(200).json({})
	} catch (error) {

	}

}

export const deleteAppointment: RequestHandler = async (req: Request, res: Response) => {
	try {
		const data = await appointmentService.deleteAppointment()
		res.status(200).json({})
	} catch (error) {

	}

}

export const updateAppointment: RequestHandler = async (req: Request, res: Response) => {
	try {
		const data = await appointmentService.updateAppointment()
		res.status(200).json({})
	} catch (error) {

	}

}

export const getTherapists: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await appointmentService.getTherapists()
		res.status(200).json({ status: 'success', message: "Therapists Found", data: data })
	} catch (error) {
		next(error)
	}
}
export const getTherapistById: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = appointmentService.getTherapistById(req.params.id)
		res.status(200).json({ status: 'success', message: "Therapists Found", data: data })
	} catch (error) {
		next(error)
	}
}