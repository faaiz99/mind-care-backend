import { Request, Response, RequestHandler, NextFunction } from 'express'
import * as psychologicalProfileService from '../services/psychologicaProfile.service.ts'

export const buildPsychologicalProfile: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await psychologicalProfileService.buildPsychologicalProfile(req.params.id, req.body)
		res.status(200).json({ status: 'success', message: 'Psychological Profile Built', data })
	} catch (error) {
		next(error)
	}
}

export const setTestScore: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await psychologicalProfileService.setTestScore(req.params.id, req.body)
		res.status(200).json({ status: 'success', message: 'Psychological Test Scores upadated', data })
	} catch (error) {
		next(error)
	}
}

export const getPsychologicalProfile: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await psychologicalProfileService.getPsychologicalProfile(req.params.id)
		res.status(200).json({ status: 'success', message: 'Psychological Profile Found', data })
	} catch (error) {
		next(error)
	}
}

export const saveAnxietyTest: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await psychologicalProfileService.saveAnxietyTest(req.params.id, req.body)
		res.status(200).json({ status: 'success', message: 'Anxiety Test Saved', data })
	} catch (error) {
		next(error)
	}
}

export const saveDepressionTest: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await psychologicalProfileService.saveDepressionTest(req.params.id, req.body)
		res.status(200).json({ status: 'success', message: 'Depression Test Saved', data })
	} catch (error) {
		next(error)
	}
}

export const getAnxietyTest: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {

	try {
		const data = await psychologicalProfileService.getAnxietyTest(req.params.id)
		res.status(200).json({ status: 'success', message: 'Anxiety test Found', data })
	} catch (error) {
		next(error)
	}

}

export const getDepressionTest: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await psychologicalProfileService.getDepressionTest(req.params.id)
		res.status(200).json({ status: 'success', message: 'Depression test Found', data })
	} catch (error) {
		next(error)
	}

}