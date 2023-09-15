import { Request, Response, RequestHandler, NextFunction } from 'express'
import * as reminderService from '../services/reminder.service.ts'

export const getReminders: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await reminderService.getReminders(req.params.id)
		res.status(200).json({ status: 'success', message: 'Reminders Found', data })
	} catch (error) {
		next(error)
	}
}

export const createReminder: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await reminderService.createReminder(req.body)
		res.status(200).json({ status: 'success', message: 'Reminder Created', data })
	}
	catch (error) {
		next(error)
	}
}

export const updateReminder: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await reminderService.updateReminder(req.body, req.params.id)
		res.status(200).json({ status: 'success', message: 'Reminder modified', data })
	} catch (error) {
		next(error)
	}
}

export const deleteReminder: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await reminderService.deleteReminder(req.params.id)
		res.status(200).json({ status: 'success', message: 'Reminder Deleted', data })
	} catch (error) {
		next(error)
	}
}