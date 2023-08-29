import { Request, Response,RequestHandler} from 'express'
// Journal Types & Models //

import { GratitudeJournal } from '../models/journals/gratitudeJournal.model.ts';

export const getGratitudeJournal:RequestHandler = async (req:Request, res:Response) => {
	const gratitudeJournal = req.body.clientId;
	let result;
	try {
		result = await GratitudeJournal.find({ clientId: gratitudeJournal })
	} catch (error) {
		console.log('Gratitude Journal could not be found', error)
	}
	res.status(200).json({ status: 'success', message: 'Gratitide Journal found', result })
}
export const createGratitudeJournal:RequestHandler = async (req:Request, res:Response) => {
	const gratitudeJournal = req.body;
	let result;
	try {
		result = await GratitudeJournal.create(gratitudeJournal)
	} catch (error) {
		console.log('Gratitude Journal could not be created', error)
	}
	res.status(200).json({ status: 'success', message: 'Gratitide Journal created', result })
}
export const deleteGratitudeJournal:RequestHandler = async (req:Request, res:Response) => {
	const gratitudeJournal = req.body.journaIld;
	let result;
	try {
		result = await GratitudeJournal.deleteOne({ id: gratitudeJournal })
	} catch (error) {
		console.log('Gratitude Journal could not be deleted', error)
	}
	res.status(200).json({ status: 'success', message: 'Gratitide Journal deleted', result })
}

import { ProblemSolvingJournal } from '../models/journals/problemSolvingJournal.model.ts';

export const getProblemSolvingJournal:RequestHandler = async (req:Request, res:Response) => {
	const problemSolvingJournal = req.body.clientId
	let result;
	try {
		result = await ProblemSolvingJournal.find({ clientId: problemSolvingJournal })
	} catch (error) {
		console.log('Problem Solving Journal could not be found', error)
	}
	res.status(200).json({ status: 'success', message: "Problem Solving Journal found", result })
}

export const createProblemSolvingJournal:RequestHandler = async (req:Request, res:Response) => {
	const problemSolvingJournal = req.body
	let result;
	try {
		result = await ProblemSolvingJournal.create(problemSolvingJournal)
	} catch (error) {
		console.log('Problem Solving Journal could not be created', error)
	}
	res.status(200).json({ status: 'success', message: "Problem Solving Journal created", result })
}

export const deleteProblemSolvingJournal:RequestHandler = async (req:Request, res:Response) => {
	const problemSolvingJournal = req.body.journalId
	let result;
	try {
		result = await ProblemSolvingJournal.deleteOne({ journalId: problemSolvingJournal })
	} catch (error) {
		console.log('Problem Solving Journal could not be deleted', error)
	}
	res.status(200).json({ status: 'success', message: "Problem Solving Journal deleted", result })
}

import { GoalSettingJournal } from '../models/journals/goalSettingJournal.model.ts';

export const getGoalSettingJournal:RequestHandler  = async (req:Request, res:Response) => {
	const goalSettingJournal = req.body.clientId;
	let result;
	try {
		result = await GoalSettingJournal.find({ clientId: goalSettingJournal })
	} catch (error) {
		console.log('Goal Setting Journal could not be found', error)
	}
	res.status(200).json({ status: 'success', message: "Goal Setting Journal found", result })

}

export const createGoalSettingJournal:RequestHandler  = async (req:Request, res:Response) => {
	const goalSettingJournal = req.body
	let result;
	try {
		result = await GoalSettingJournal.create(goalSettingJournal)
	} catch (error) {
		console.log('Goal Setting Journal could not be created', error)
	}
	res.status(200).json({ status: 'success', message: 'Goal Setting Journal created', result })

}

export const deleteGoalSettingJournal:RequestHandler  = async (req:Request, res:Response) => {
	const goalSettingJournal = req.body.journalId
	let result;
	try {
		result = await GoalSettingJournal.deleteOne({ journaIld: goalSettingJournal })
	} catch (error) {
		console.log('Goal Setting Journal could not be deleted', error)
	}
	res.status(200).json({ status: 'success', message: 'Goal Setting Journal deleted', result })


}

import { SelfAffirmationJournal } from '../models/journals/selfAffirmationJournal.model.js';

export const getSelfAffirmationJournal:RequestHandler  = async (req:Request, res:Response) => {
	const selfAffirmationJournal = req.body.clientId
	let result;
	try {
		result = await SelfAffirmationJournal.find({ clientId: selfAffirmationJournal })
	} catch (error) {
		console.log('Self-Affirmation Journal could not be found', error)
	}
	res.status(200).json({ status: 'success', message: 'Self-Affirmation Journal found', result })
}

export const createSelfAffirmationJournal:RequestHandler  = async (req:Request, res:Response) => {
	const selfAffirmationJournal = req.body
	let result;
	try {
		result = await SelfAffirmationJournal.create(selfAffirmationJournal)
	} catch (error) {
		console.log('Self-Affirmation Journal could not be created', error)
	}
	res.status(200).json({ status: 'success', message: 'Self-Affirmation Journal Created', result })
}

export const deleteSelfAffirmationJournal:RequestHandler  = async (req:Request, res:Response) => {
	const selfAffirmationJournal = req.body.journalId
	let result;
	try {
		result = await SelfAffirmationJournal.deleteOne({ id: selfAffirmationJournal })
	} catch (error) {
		console.log('Self-Affirmation Journal could not be Deleted', error)
	}
	res.status(200).json({ status: 'success', message: 'Self-Affirmation Journal Created', result })

}

import { ReflectionJournal } from '../models/journals/reflectionJournal.model.js';

export const getReflectionJournal:RequestHandler  = async (req:Request, res:Response) => {
	const reflectionJournal = req.body.clientId
	let result;
	try {
		result = await ReflectionJournal.find({ clientId: reflectionJournal })
	} catch (error) {
		console.log('Reflection Journal could not be found', error)
	}
	res.status(200).json({ status: 'success', message: 'Reflection Journal found', result })

}
export const createReflectionJournal:RequestHandler  = async (req:Request, res:Response) => {
	const reflectionJournal = req.body;
	let result;
	try {
		result = await ReflectionJournal.create(reflectionJournal)
	} catch (error) {
		console.log('Reflection Journal could not be created', error)
	}
	res.status(200).json({ status: 'success', message: 'Reflection Journal created', result })

}

export const deleteReflectionJournal:RequestHandler  = async (req:Request, res:Response) => {
	const reflectionJournal = req.body.journalId;
	let result;
	try {
		result = await ReflectionJournal.deleteOne({ id: reflectionJournal })
	} catch (error) {
		console.log('Refection Journal could not be deleted', error)
	}
	res.status(200).json({ status: 'success', message: 'Relfection Journal deleted', result })

}
import { OpenJournal } from '../models/journals/openJournal.model.js';

export const getOpenJournal:RequestHandler  = async (req:Request, res:Response) => {
	const openJournal = req.body.clientId
	let result;
	try {
		result = await OpenJournal.find({ clientId: openJournal })
	} catch (error) {
		console.log('Open Journal could not be found', error)
	}
	res.status(200).json({ status: 'success', message: 'Open Journal found', result })

}

export const createOpenJournal:RequestHandler  = async (req:Request, res:Response) => {
	const openJournal = req.body;
	let result;
	try {
		result = await OpenJournal.create(openJournal)
	} catch (error) {
		console.log('Open Journal could not be created', error)
	}
	res.status(200).json({ status: 'success', message: 'Open Journal created', result })
}

export const deleteOpenJournal:RequestHandler  = async (req:Request, res:Response) => {
	const openJournal = req.body.journalId;
	let result;
	try {
		result = await OpenJournal.deleteOne({ id:openJournal })
	} catch (error) {
		console.log('Open Journal could not be deleted', error)
	}
	res.status(200).json({ status: 'success', message: 'Open Journal deleted', result })
}

import { ChallengingNegativeThoughtsAboutYourselfJournal } from '../models/journals/challengingNegativeThoughtsAboutYourselfJournal.model.js';

export const getChallengingNegativeThoughtsAboutYourselfJournal:RequestHandler  = async (req:Request, res:Response) => {

	const challengingNegativeThoughtsAboutYourselfJournal = req.body.clientId;
	let result;
	try {
		result = await ChallengingNegativeThoughtsAboutYourselfJournal.find({ clientId: challengingNegativeThoughtsAboutYourselfJournal })
	} catch (error) {
		console.log('Challenge Negative Thoughts Journal could not be found', error)
	}
	res.status(200).json({ status: 'success', message: "Challenge Negative Thoughts Journal found", result })

}

export const createChallengingNegativeThoughtsAboutYourselfJournal:RequestHandler  = async (req:Request, res:Response) => {
	const challengingNegativeThoughtsAboutYourselfJournal = req.body;
	let result;
	try {
		result = await ChallengingNegativeThoughtsAboutYourselfJournal.create(challengingNegativeThoughtsAboutYourselfJournal)
	} catch (error) {
		console.log('Challenge Negative Thoughts Journal could not be created', error)
	}
	res.status(200).json({ status: 'success', message: 'Challenge Negative Thoughts Journal created', result })

}

export const deleteChallengingNegativeThoughtsAboutYourselfJournal:RequestHandler  = async (req:Request, res:Response) => {
	const challengingNegativeThoughtsAboutYourselfJournal = req.body.journalId;
	let result;
	try {
		result = await ChallengingNegativeThoughtsAboutYourselfJournal.deleteOne({ journalId: challengingNegativeThoughtsAboutYourselfJournal })
	} catch (error) {
		console.log('Challenge Negative Thoughts Journal could not be deleted', error)
	}
	res.status(200).json({ status: 'success', message: 'Challenge Negative Thoughts Journal deleted', result })

}
import { BuildingASelfCarePlan } from '../models/journals/buildingASelfCarePlan.model.js';

export const getBuildingASelfCarePlan:RequestHandler  = async (req:Request, res:Response) => {
	const buildingASelfCarePlan = req.body.clientId
	let result;
	try {
		result = await BuildingASelfCarePlan.find({ clientId: buildingASelfCarePlan })
	} catch (error) {
		console.log('Building Self-Care Journal could not be found')
	}
	res.status(200).json({ status: 'success', message: 'Building Self-Care Journal found', result })

}

export const createBuildingASelfCarePlan:RequestHandler  = async (req:Request, res:Response) => {
	const buildingASelfCarePlan = req.body
	let result;
	try {
		result = await BuildingASelfCarePlan.create({ buildingASelfCarePlan })
	} catch (error) {
		console.log('Building Self-Care Journal could not be created')
	}
	res.status(200).json({ status: 'success', message: 'Building Self-Care Journal created', result })
}

export const deleteBuildingASelfCarePlan:RequestHandler  = async (req:Request, res:Response) => {
	const buildingASelfCarePlan = req.body.journalId
	let result;
	try {
		result = await BuildingASelfCarePlan.deleteOne({ id: buildingASelfCarePlan })
	} catch (error) {
		console.log('Building Self-Care Journal could not be deleted')
	}
	res.status(200).json({ status: 'success', message: 'Building Self-Care Journal deleted', result })
}
import { AnxietyThoughtRecordJournal } from '../models/journals/AnxietyThoughtRecordJournal.ts';

export const getAnxietyThoughtReccordJournal:RequestHandler  = async (req:Request, res:Response) => {
	const anxietyThoughtRecordJournal = req.body.clientId
	let result;
	try {
		result = await AnxietyThoughtRecordJournal.find({ id: anxietyThoughtRecordJournal })
	} catch (error) {
		console.log('Anxiety Thought Reccord Journal could not be found')
	}
	res.status(200).json({ status: 'success', message: 'Anxiety Thought Reccord Journal found', result })
}

export const createAnxietyThoughtReccordJournal:RequestHandler  = async (req:Request, res:Response) => {
	const anxietyThoughtRecordJournal = req.body
	let result;
	try {
		result = await anxietyThoughtRecordJournal.create({ anxietyThoughtRecordJournal })
	} catch (error) {
		console.log('Anxiety Thought Reccord Journal could not be created')
	}
	res.status(200).json({ status: 'success', message: 'Anxiety Thought Reccord Journal created', result })

}

export const deleteAnxietyThoughtReccordJournal:RequestHandler  = async (req:Request, res:Response) => {
	const anxietyThoughtRecordJournal = req.body.journalId
	let result;
	try {
		result = await anxietyThoughtRecordJournal.deleteOne({ id: anxietyThoughtRecordJournal })
	} catch (error) {
		console.log('Anxiety Thought Reccord Journal could not be deleted')
	}
	res.status(200).json({ status: 'success', message: 'Anxiety Thought Reccord Journal deleted', result })

}
// Sleep Journal has own types & Models //


import { CalmingtheMind } from '../models/journals/sleepJournal/calmingtheMind.model.js';

export const getCalmingtheMind:RequestHandler  = async (req:Request, res:Response) => {
	const calmingtheMind = req.body.clientId
	let result;
	try {
		result = await CalmingtheMind.find({ clientId: calmingtheMind })
	} catch (error) {
		console.log('Calming the Mind Journal could not be found', error)
	}
	res.status(200).json({ status: 'success', message: 'Calming the Mind Journal found', result })
}

export const createCalmingtheMind:RequestHandler  = async (req:Request, res:Response) => {
	const calmingtheMind = req.body
	let result;
	try {
		result = await CalmingtheMind.create({ calmingtheMind })
	} catch (error) {
		console.log('Calming the Mind Journal could not be created', error)
	}
	res.status(200).json({ status: 'success', message: 'Calming the Mind Journal created', result })

}

export const deleteCalmingtheMind:RequestHandler  = async (req:Request, res:Response) => {
	const calmingtheMind = req.body.journalId
	let result;
	try {
		result = await CalmingtheMind.deleteOne({ id: calmingtheMind })
	} catch (error) {
		console.log('Calming the Mind Journal could not be deleted', error)
	}
	res.status(200).json({ status: 'success', message: 'Calming the Mind Journal deleted', result })
}

import { DreamJournal } from '../models/journals/sleepJournal/dreamJournal.model.js';

export const getDreamJournal:RequestHandler  = async (req:Request, res:Response) => {
	const dreamJournal = req.body.clientId
	let result;
	try {
		result = await DreamJournal.find({ clientId: dreamJournal })
	} catch (error) {
		console.log('Dream Journal could not be found', error)
	}
	res.status(200).json({ status: 'success', message: 'Dream Journal found', result })
}
export const createDreamJournal:RequestHandler  = async (req:Request, res:Response) => {
	const dreamJournal = req.body
	let result;
	try {
		result = await DreamJournal.create(dreamJournal)
	} catch (error) {
		console.log('Dream Journal could not be created', error)
	}
	res.status(200).json({ status: 'success', message: 'Dream Journal created', result })
}
export const deleteDreamJournal:RequestHandler  = async (req:Request, res:Response) => {
	const dreamJournal = req.body.journalId
	let result;
	try {
		result = await DreamJournal.deleteOne({ id: dreamJournal })
	} catch (error) {
		console.log('Dream Journal could not be created', error)
	}
	res.status(200).json({ status: 'success', message: 'Dream Journal deleted', result })

}

import { FindingpeacefulSpace } from '../models/journals/sleepJournal/findingapeacefulSpace.model.js';

export const getFindingPeaceFulSpace:RequestHandler  = async (req:Request, res:Response) => {
	const findingapeacefulSpace = req.body.clientId;
	let result;
	try {
		result = await FindingpeacefulSpace.find({ clientId: findingapeacefulSpace })
	} catch (error) {
		console.log('Finding Peaceful Journal could not be found', error)
	}
	res.status(200).json({ status: 'success', message: 'Finding Peaceful Space Journal found', result })
}

export const createFindingPeaceFulSpace:RequestHandler  = async (req:Request, res:Response) => {
	const findingapeacefulSpace = req.body;
	let result;
	try {
		result = await FindingpeacefulSpace.create(findingapeacefulSpace)
	} catch (error) {
		console.log('Finding Peaceful Journal could not be found', error)
	}
	res.status(200).json({ status: 'success', message: 'Finding Peaceful Space Journal found', result })
}

export const deleteFindingPeaceFulSpace:RequestHandler  = async (req:Request, res:Response) => {
	const findingapeacefulSpace = req.body.journalId;
	let result;
	try {
		result = await FindingpeacefulSpace.deleteOne({ id: findingapeacefulSpace })
	} catch (error) {
		console.log('Finding Peaceful Journal could not be deleted', error)
	}
	res.status(200).json({ status: 'success', message: 'Finding Peaceful Space Journal deleted', result })
}

import { LookingforwardtoTomorrow } from '../models/journals/sleepJournal/lookingforwardtoTomorrow.model.js';

export const getLookingForwardToTomorrow:RequestHandler  = async (req:Request, res:Response) => {
	const lookingforwardtoTomorrow = req.body.clientId
	let result;
	try {
		result = await LookingforwardtoTomorrow.find({ clientId: lookingforwardtoTomorrow })
	} catch (error) {
		console.log('Looking Forward to Tomorrow Journal could not be found', error)
	}
	res.status(200).json({ status: 'success', message: 'Looking Forward to Tomorrow Journal found', result })

}

export const createLookingForwardToTomorrow:RequestHandler  = async (req:Request, res:Response) => {
	const lookingforwardtoTomorrow = req.body
	let result;
	try {
		result = await LookingforwardtoTomorrow.create(lookingforwardtoTomorrow)
	} catch (error) {
		console.log('Looking Forward to Tomorrow Journal could not be created', error)
	}
	res.status(200).json({ status: 'success', message: 'Looking Forward to Tomorrow Journal created', result })

}

export const deleteLookingForwardToTomorrow:RequestHandler  = async (req:Request, res:Response) => {
	const lookingforwardtoTomorrow = req.body.journalId
	let result;
	try {
		result = await LookingforwardtoTomorrow.deleteOne({ id: lookingforwardtoTomorrow })
	} catch (error) {
		console.log('Looking Forward to Tomorrow Journal could not be deleted', error)
	}
	res.status(200).json({ status: 'success', message: 'Looking Forward to Tomorrow Journal deleted', result })


}
import { PlanningTheDayAhead } from '../models/journals/sleepJournal/planningthedayAhead.model.js';

export const getPlanningDayAhead:RequestHandler  = async (req:Request, res:Response) => {
	const planningthedayAhead = req.body.clientId
	let result;
	try {
		result = await PlanningTheDayAhead.find({ clientId: planningthedayAhead })
	} catch (error) {
		console.log('Planning the day Ahead Journal could not be found')
	}
	res.status(200).json({ status: 'success', message: "Planning the Day Ahead Journal found", result })

}

export const createPlanningDayAhead:RequestHandler  = async (req:Request, res:Response) => {
	const planningthedayAhead = req.body
	let result;
	try {
		result = await PlanningTheDayAhead.create(planningthedayAhead)
	} catch (error) {
		console.log('Planning the day Ahead Journal could not be created', error)
	}
	res.status(200).json({ status: 'success', message: 'Planning the day Ahead Journal created', result })

}

export const deletePlanningDayAhead:RequestHandler = async (req:Request, res:Response) => {
	const planningthedayAhead = req.body.journalId
	let result;
	try {
		result = await PlanningTheDayAhead.deleteOne({ journalId: planningthedayAhead })
	} catch (error) {
		console.log('Planning the day Ahead Journal could not be deleted', error)
	}
	res.status(200).json({ status: 'success', message: 'Planning the day Ahead Journal deleted', result })

}

// Get all Journals // 

export const getAllEntries:RequestHandler = (req:Request, res:Response) => {
``
}


