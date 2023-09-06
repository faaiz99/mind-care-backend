import { Request, Response, RequestHandler, NextFunction } from 'express'
import * as teletherapyService from '../services/teletherapy.service.ts'

export const sendMessage: RequestHandler = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
	try {
		const data = await teletherapyService.createChat()
		res.status(200).json({ status: 'success', message: 'message sent successfully', data })
	} catch (error) {
		next(error)
	}
}

export const getUserChat: RequestHandler = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
	try {
		const data = await teletherapyService.getUserChat()
		res.status(200).json({ status: 'success', message: 'message sent successfully', data })
	} catch (error) {
		next(error)
	}
}

export const findCurrentChat: RequestHandler = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
	try {
		const data = await teletherapyService.getCurrentChat()
		res.status(200).json({ status: 'success', message: 'message sent successfully', data })
	} catch (error) {
		next(error)
	}
}