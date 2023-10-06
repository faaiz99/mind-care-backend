import { Request, Response, NextFunction, RequestHandler } from 'express'
import * as sleepTrackerService from '../services/sleep.service.ts'


export const createSleepSchedule: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await sleepTrackerService.createSleepSchedule(req.body, req.params.id)
		res.status(200).json({status:"success", message:"Sleep Schedule Created", data})
	} catch (error) {
		next(error)
	}
}

export const updateSleepSchedule: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await sleepTrackerService.updateSleepSchedule(req.body, req.params.id)
		res.status(200).json({status:"success", message:"Sleep Schedule Update", data})
	} catch (error) {
		next(error)
	}
}

export const resetSleepSchedule: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await sleepTrackerService.resetSleepSchedule(req.params.id)
		res.status(200).json({status:"success", message:"Sleep Schedule Rest", data})
	} catch (error) {
		next(error)
	}
}

export const getSleepEfficiency: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await sleepTrackerService.getSleepEfficiency(req.params.id)
		res.status(200).json({status:"success", message:"Sleep Efficiency", data})
	} catch (error) {
		next(error)
	}
}

export const getSleepQuality: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await sleepTrackerService.getSleepQuality(req.params.id)
		res.status(200).json({status:"success", message:"Sleep Quality", data})
	} catch (error) {
		next(error)
	}
}