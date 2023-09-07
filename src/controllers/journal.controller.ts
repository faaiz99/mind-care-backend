import { Request, Response, RequestHandler, NextFunction } from 'express'

import * as journalService from '../services/journal.service.ts'

export const getGratitudeJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.getGratitudeJournal(req.params.id)
		res.status(200).json({ status: 'success', message: 'Gratitide Journal found', data })
	} catch (error) {
		next(error)
	}
}
export const createGratitudeJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.createGratitudeJournal(req.body)
		res.status(200).json({ status: 'success', message: 'Gratitide Journal created', data })
	} catch (error) {
		next(error)
	}
}
export const deleteGratitudeJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.deleteGratitudeJournal(req.params.id)
		res.status(200).json({ status: 'success', message: 'Gratitide Journal deleted', data })
	} catch (error) {
		next(error)
	}
}
export const getProblemSolvingJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.getProblemSolvingJournal(req.params.id)
		res.status(200).json({ status: 'success', message: 'Problem Solving Journal found', data })
	} catch (error) {
		next(error)
	}
}
export const createProblemSolvingJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.createProblemSolvingJournal(req.body)
		res.status(200).json({ status: 'success', message: "Problem Solving Journal created", data })
	} catch (error) {
		next(error)
	}
}
export const deleteProblemSolvingJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.deleteProblemSolvingJournal(req.params.id)
		res.status(200).json({ status: 'success', message: "Problem Solving Journal deleted", data })
	} catch (error) {
		next(error)
	}
}
export const getGoalSettingJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.getGoalSettingJournal(req.params.id)
		res.status(200).json({ status: 'success', message: 'Goal Setting Journal found', data })
	} catch (error) {
		next(error)
	}
}
export const createGoalSettingJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.createGoalSettingJournal(req.body)
		res.status(200).json({ status: 'success', message: 'Goal Setting Journal created', data })
	} catch (error) {
		next(error)
	}
}
export const deleteGoalSettingJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.deleteGoalSettingJournal(req.params.id)
		res.status(200).json({ status: 'success', message: 'Goal Setting Journal deleted', data })
	} catch (error) {
		next(error)
	}
}
export const getSelfAffirmationJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.getSelfAffirmationJournal(req.params.id)
		res.status(200).json({ status: 'success', message: 'Self Affirmation Journal found', data })
	} catch (error) {
		next(error)
	}
}
export const createSelfAffirmationJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.createSelfAffirmationJournal(req.body)
		res.status(200).json({ status: 'success', message: 'Self-Affirmation Journal Created', data })
	} catch (error) {
		next(error)
	}
}
export const deleteSelfAffirmationJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.deleteSelfAffirmationJournal(req.params.id)
		res.status(200).json({ status: 'success', message: 'Self-Affirmation Journal Created', data })
	} catch (error) {
		next(error)
	}
}
export const getReflectionJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.getReflectionJournal(req.params.id)
		res.status(200).json({ status: 'success', message: 'Reflection Journal found', data })
	} catch (error) {
		next(error)
	}

}
export const createReflectionJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.createReflectionJournal(req.body)
		res.status(200).json({ status: 'success', message: 'Reflection Journal created', data })

	} catch (error) {
		next(error)
	}
}
export const deleteReflectionJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.deleteReflectionJournal(req.params.id)
		res.status(200).json({ status: 'success', message: 'Relfection Journal deleted', data })
	} catch (error) {
		next(error)
	}
}
export const getOpenJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.getOpenJournal(req.params.id)
		res.status(200).json({ status: 'success', message: 'Open Journal Journal found', data })
	} catch (error) {
		next(error)
	}
}
export const createOpenJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.createOpenJournal(req.body)
		res.status(200).json({ status: 'success', message: 'Open Journal created', data })
	} catch (error) {
		next(error)
	}
}
export const deleteOpenJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.deleteOpenJournal(req.params.id)
		res.status(200).json({ status: 'success', message: 'Open Journal deleted', data })
	} catch (error) {
		next(error)
	}
}
export const getChallengingNegativeThoughtsAboutYourselfJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.getChallengingNegativeThoughtsAboutYourselfJournal(req.params.id)
		res.status(200).json({ status: 'success', message: 'Challenging Negative Thoughts About Yourself  Journal found', data })
	} catch (error) {
		next(error)
	}

}
export const createChallengingNegativeThoughtsAboutYourselfJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.createChallengingNegativeThoughtsAboutYourselfJournal(req.body)
		res.status(200).json({ status: 'success', message: 'Challenge Negative Thoughts Journal created', data })
	} catch (error) {
		next(error)
	}
}
export const deleteChallengingNegativeThoughtsAboutYourselfJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.deleteChallengingNegativeThoughtsAboutYourselfJournal(req.params.id)
		res.status(200).json({ status: 'success', message: 'Challenge Negative Thoughts Journal deleted', data })
	} catch (error) {
		next(error)
	}
}
export const getBuildingASelfCarePlan: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.getBuildingASelfCarePlan(req.params.id)
		res.status(200).json({ status: 'success', message: 'Building Self-Care Journal found', data })
	} catch (error) {
		next(error)
	}
}
export const createBuildingASelfCarePlan: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.createBuildingASelfCarePlan(req.body)
		res.status(200).json({ status: 'success', message: 'Building Self-Care Journal created', data })
	} catch (error) {
		next(error)
	}
}
export const deleteBuildingASelfCarePlan: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.deleteBuildingASelfCarePlan(req.params.id)
		res.status(200).json({ status: 'success', message: 'Building Self-Care Journal deleted', data })
	} catch (error) {
		next(error)
	}
}
export const getAnxietyThoughtReccordJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.getAnxietyThoughtReccordJournal(req.params.id)
		res.status(200).json({ status: 'success', message: 'Anxiety Thought Reccord Journal found', data })
	} catch (error) {
		next(error)
	}
}
export const createAnxietyThoughtReccordJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.createAnxietyThoughtReccordJournal(req.body)
		res.status(200).json({ status: 'success', message: 'Anxiety Thought Reccord Journal created', data })
	} catch (error) {
		next(error)
	}
}
export const deleteAnxietyThoughtReccordJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.deleteAnxietyThoughtReccordJournal(req.params.id)
		res.status(200).json({ status: 'success', message: 'Anxiety Thought Reccord Journal deleted', data })
	} catch (error) {
		next(error)
	}
}
// Sleep Journal has own types & Models //

export const getCalmingtheMind: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.getCalmingtheMind(req.params.id)
		res.status(200).json({ status: 'success', message: 'Calming The Mind Journal found', data })
	} catch (error) {
		next(error)
	}
}
export const createCalmingtheMind: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.createCalmingtheMind(req.body)
		res.status(200).json({ status: 'success', message: 'Calming the Mind Journal created', data })
	} catch (error) {
		next(error)
	}
}
export const deleteCalmingtheMind: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.deleteCalmingTheMind(req.params.id)
		res.status(200).json({ status: 'success', message: 'Calming the Mind Journal deleted', data })
	} catch (error) {
		next(error)
	}
}
export const getDreamJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.getDreamJournal(req.params.id)
		res.status(200).json({ status: 'success', message: 'Dream Journal Journal found', data })
	} catch (error) {
		next(error)
	}
}
export const createDreamJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.createDreamJournal(req.body)
		res.status(200).json({ status: 'success', message: 'Dream Journal created', data })
	} catch (error) {
		next(error)
	}
}
export const deleteDreamJournal: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.deleteDreamJournal(req.params.id)
		res.status(200).json({ status: 'success', message: 'Dream Journal deleted', data })
	} catch (error) {
		next(error)
	}
}
export const getFindingPeaceFulSpace: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.getFindingPeaceFulSpace(req.params.id)
		res.status(200).json({ status: 'success', message: 'Finding Peace Space Journal found', data })
	} catch (error) {
		next(error)
	}
}
export const createFindingPeaceFulSpace: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.createFindingPeaceFulSpace(req.body)
		res.status(200).json({ status: 'success', message: 'Finding Peaceful Space Journal found', data })
	} catch (error) {
		next(error)
	}
}
export const deleteFindingPeaceFulSpace: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.deleteFindingPeaceFulSpace(req.params.id)
		res.status(200).json({ status: 'success', message: 'Finding Peaceful Space Journal deleted', data })
	} catch (error) {
		next(error)
	}
}
export const getLookingForwardToTomorrow: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.getLookingForwardToTomorrow(req.params.id)
		res.status(200).json({ status: 'success', message: 'Looking Forward To Tomorrow Journal found', data })
	} catch (error) {
		next(error)
	}

}
export const createLookingForwardToTomorrow: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.createLookingForwardToTomorrow(req.body)
		res.status(200).json({ status: 'success', message: 'Looking Forward to Tomorrow Journal created', data })
	} catch (error) {
		next(error)
	}
}
export const deleteLookingForwardToTomorrow: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.deleteLookingForwardToTomorrow(req.params.id)
		res.status(200).json({ status: 'success', message: 'Looking Forward to Tomorrow Journal deleted', data })
	} catch (error) {
		next(error)
	}
}
export const getPlanningDayAhead: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.getPlanningDayAhead(req.params.id)
		res.status(200).json({ status: 'success', message: 'Planning The Day Ahead Journal found', data })
	} catch (error) {
		next(error)
	}
}
export const createPlanningDayAhead: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.createPlanningDayAhead(req.body)
		res.status(200).json({ status: 'success', message: 'Planning the day Ahead Journal created', data })
	} catch (error) {
		next(error)
	}
}
export const deletePlanningDayAhead: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await journalService.deletePlanningDayAhead(req.params.id)
		res.status(200).json({ status: 'success', message: 'Planning the day Ahead Journal deleted', data })
	} catch (error) {
		next(error)
	}
}
// Get all Journals // 

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { Client } from '../models/client/client.model.ts'
// export const getAllEntries: RequestHandler = (req: Request, res: Response, next: NextFunction):Promise<void>  => {
// 	const id = req.params.id
// 	await Client.find({})
// }


