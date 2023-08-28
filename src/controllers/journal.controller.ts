// Journal Types & Models //

import { GratitudeJournal } from '../models/journals/gratitudeJournal.model.ts';

export const getGratitudeJournal = async (req, res) => {
	const gratitudeJournal = req.body.clientId;
	let result;
	try {
		result = await GratitudeJournal.find({ clientId: gratitudeJournal })
	} catch (error) {
		console.log('Gratitude Journal could not be found', error)
	}
	res.json({ status: 200, message: 'Gratitide Journal found', result })
}
export const createGratitudeJournal = async (req, res) => {
	const gratitudeJournal = req.body;
	let result;
	try {
		result = await GratitudeJournal.create(gratitudeJournal)
	} catch (error) {
		console.log('Gratitude Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Gratitide Journal created', result })
}
export const deleteGratitudeJournal = async (req, res) => {
	const gratitudeJournal = req.body.journaIld;
	let result;
	try {
		result = await GratitudeJournal.deleteOne({ id: gratitudeJournal })
	} catch (error) {
		console.log('Gratitude Journal could not be deleted', error)
	}
	res.json({ status: 200, message: 'Gratitide Journal deleted', result })
}

import { ProblemSolvingJournal } from '../models/journals/problemSolvingJournal.model.ts';

export const getProblemSolvingJournal = async (req, res) => {
	const problemSolvingJournal = req.body.clientId
	let result;
	try {
		result = await ProblemSolvingJournal.find({ clientId: problemSolvingJournal })
	} catch (error) {
		console.log('Problem Solving Journal could not be found', error)
	}
	res.json({ status: 200, message: "Problem Solving Journal found", result })
}

export const createProblemSolvingJournal = async (req, res) => {
	const problemSolvingJournal = req.body
	let result;
	try {
		result = await ProblemSolvingJournal.create(problemSolvingJournal)
	} catch (error) {
		console.log('Problem Solving Journal could not be created', error)
	}
	res.json({ status: 200, message: "Problem Solving Journal created", result })
}

export const deleteProblemSolvingJournal = async (req, res) => {
	const problemSolvingJournal = req.body.journalId
	let result;
	try {
		result = await ProblemSolvingJournal.deleteOne({ journalId: problemSolvingJournal })
	} catch (error) {
		console.log('Problem Solving Journal could not be deleted', error)
	}
	res.json({ status: 200, message: "Problem Solving Journal deleted", result })
}

import { GoalSettingJournal } from '../models/journals/goalSettingJournal.model.ts';

export const getGoalSettingJournal = async (req, res) => {
	const goalSettingJournal = red.body.clientId;
	let result;
	try {
		result = await GoalSettingJournal.find({ clientId: goalSettingJournal })
	} catch (error) {
		console.log('Goal Setting Journal could not be found', error)
	}
	res.json({ status: 200, message: "Goal Setting Journal found", result })

}

export const createGoalSettingJournal = async (req, res) => {
	const goalSettingJournal = req.body
	let result;
	try {
		result = await GoalSettingJournal.create(goalSettingJournal)
	} catch (error) {
		console.log('Goal Setting Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Goal Setting Journal created', result })

}

export const deleteGoalSettingJournal = async (req, res) => {
	const goalSettingJournal = req.body.journalId
	let result;
	try {
		result = await GoalSettingJournal.deleteOne({ journaIld: goalSettingJournal })
	} catch (error) {
		console.log('Goal Setting Journal could not be deleted', error)
	}
	res.json({ status: 200, message: 'Goal Setting Journal deleted', result })


}

import { SelfAffirmationJournal } from '../models/journals/selfAffirmationJournal.model.js';

export const getSelfAffirmationJournal = async (req, res) => {
	const selfAffirmationJournal = req.body.clientId
	let result;
	try {
		result = await SelfAffirmationJournal.find({ clientId: selfAffirmationJournal })
	} catch (error) {
		console.log('Self-Affirmation Journal could not be found', error)
	}
	res.json({ status: 200, message: 'Self-Affirmation Journal found', result })
}

export const createSelfAffirmationJournal = async (req, res) => {
	const selfAffirmationJournal = req.body
	let result;
	try {
		result = await SelfAffirmationJournal.create(selfAffirmationJournal)
	} catch (error) {
		console.log('Self-Affirmation Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Self-Affirmation Journal Created', result })
}

export const deleteSelfAffirmationJournal = async (req, res) => {
	const selfAffirmationJournal = req.body.journalId
	let result;
	try {
		result = await SelfAffirmationJournal.deleteOne({ id, selfAffirmationJournal })
	} catch (error) {
		console.log('Self-Affirmation Journal could not be Deleted', error)
	}
	res.json({ status: 200, message: 'Self-Affirmation Journal Created', result })

}

import { ReflectionJournal } from '../models/journals/reflectionJournal.model.js';

export const getReflectionJournal = async (req, res) => {
	const reflectionJournal = req.body.clientId
	let result;
	try {
		result = await ReflectionJournal.find({ clientId: reflectionJournal })
	} catch (error) {
		console.log('Reflection Journal could not be found', error)
	}
	res.json({ status: 200, message: 'Reflection Journal found', result })

}
export const createReflectionJournal = async (req, res) => {
	const reflectionJournal = req.body;
	let result;
	try {
		result = await ReflectionJournal.create(reflectionJournal)
	} catch (error) {
		console.log('Reflection Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Reflection Journal created', result })

}

export const deleteReflectionJournal = async (req, res) => {
	const reflectionJournal = req.body.journalId;
	let result;
	try {
		result = await ReflectionJournal.deleteOne({ id, reflectionJournal })
	} catch (error) {
		console.log('Refection Journal could not be deleted', error)
	}
	res.json({ status: 200, message: 'Relfection Journal deleted', result })

}
import { OpenJournal } from '../models/journals/openJournal.model.js';

export const getOpenJournal = async (req, res) => {
	const openJournal = req.body.clientId
	let result;
	try {
		result = await OpenJournal.find({ clientId: openJournal })
	} catch (error) {
		console.log('Open Journal could not be found', error)
	}
	res.json({ status: 200, message: 'Open Journal found', result })

}

export const createOpenJournal = async (req, res) => {
	const openJournal = req.body;
	let result;
	try {
		result = await OpenJournal.create(openJournal)
	} catch (error) {
		console.log('Open Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Open Journal created', result })
}

export const deleteOpenJournal = async (req, res) => {
	const openJournal = req.body.journalId;
	let result;
	try {
		result = await OpenJournal.deleteOne({ id, openJournal })
	} catch (error) {
		console.log('Open Journal could not be deleted', error)
	}
	res.json({ status: 200, message: 'Open Journal deleted', result })
}

import { ChallengingNegativeThoughtsAboutYourselfJournal } from '../models/journals/challengingNegativeThoughtsAboutYourselfJournal.model.js';

export const getChallengingNegativeThoughtsAboutYourselfJournal = async (req, res) => {

	const challengingNegativeThoughtsAboutYourselfJournal = req.body.clientId;
	let result;
	try {
		result = await ChallengingNegativeThoughtsAboutYourselfJournal.find({ clientId: challengingNegativeThoughtsAboutYourselfJournal })
	} catch (error) {
		console.log('Challenge Negative Thoughts Journal could not be found', error)
	}
	res.json({ status: 200, message: "Challenge Negative Thoughts Journal found", result })

}

export const createChallengingNegativeThoughtsAboutYourselfJournal = async (req, res) => {
	const challengingNegativeThoughtsAboutYourselfJournal = req.body;
	let result;
	try {
		result = await ChallengingNegativeThoughtsAboutYourselfJournal.create(challengingNegativeThoughtsAboutYourselfJournal)
	} catch (error) {
		console.log('Challenge Negative Thoughts Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Challenge Negative Thoughts Journal created', result })

}

export const deleteChallengingNegativeThoughtsAboutYourselfJournal = async (req, res) => {
	const challengingNegativeThoughtsAboutYourselfJournal = req.body.journalId;
	let result;
	try {
		result = await ChallengingNegativeThoughtsAboutYourselfJournal.deleteOne({ journalId: challengingNegativeThoughtsAboutYourselfJournal })
	} catch (error) {
		console.log('Challenge Negative Thoughts Journal could not be deleted', error)
	}
	res.json({ status: 200, message: 'Challenge Negative Thoughts Journal deleted', result })

}
import { BuildingASelfCarePlan } from '../models/journals/buildingASelfCarePlan.model.js';

export const getBuildingASelfCarePlan = async (req, res) => {
	const buildingASelfCarePlan = req.body.clientId
	let result;
	try {
		result = await BuildingASelfCarePlan.find({ clientId: buildingASelfCarePlan })
	} catch (error) {
		console.log('Building Self-Care Journal could not be found')
	}
	res.json({ status: 200, message: 'Building Self-Care Journal found', result })

}

export const createBuildingASelfCarePlan = async (req, res) => {
	const buildingASelfCarePlan = req.body
	let result;
	try {
		result = await BuildingASelfCarePlan.create({ buildingASelfCarePlan })
	} catch (error) {
		console.log('Building Self-Care Journal could not be created')
	}
	res.json({ status: 200, message: 'Building Self-Care Journal created', result })
}

export const deleteBuildingASelfCarePlan = async (req, res) => {
	const buildingASelfCarePlan = req.body.journalId
	let result;
	try {
		result = await BuildingASelfCarePlan.delete({ id: buildingASelfCarePlan })
	} catch (error) {
		console.log('Building Self-Care Journal could not be deleted')
	}
	res.json({ status: 200, message: 'Building Self-Care Journal deleted', result })
}
import { AnxietyThoughtRecordJournal } from '../models/journals/anxietyThoughtRecordJournal.model.js';

export const getAnxietyThoughtReccordJournal = async (req, res) => {
	const anxietyThoughtRecordJournal = req.body.clientId
	let result;
	try {
		result = await AnxietyThoughtRecordJournal.find({ id: anxietyThoughtRecordJournal })
	} catch (error) {
		console.log('Anxiety Thought Reccord Journal could not be found')
	}
	res.json({ status: 200, message: 'Anxiety Thought Reccord Journal found', result })
}

export const createAnxietyThoughtReccordJournal = async (req, res) => {
	const anxietyThoughtRecordJournal = req.body
	let result;
	try {
		result = await anxietyThoughtRecordJournal.create({ anxietyThoughtRecordJournal })
	} catch (error) {
		console.log('Anxiety Thought Reccord Journal could not be created')
	}
	res.json({ status: 200, message: 'Anxiety Thought Reccord Journal created', result })

}

export const deleteAnxietyThoughtReccordJournal = async (req, res) => {
	const anxietyThoughtRecordJournal = req.body.journalId
	let result;
	try {
		result = await anxietyThoughtRecordJournal.deleteOne({ id: anxietyThoughtRecordJournal })
	} catch (error) {
		console.log('Anxiety Thought Reccord Journal could not be deleted')
	}
	res.json({ status: 200, message: 'Anxiety Thought Reccord Journal deleted', result })

}
// Sleep Journal has own types & Models //


import { CalmingtheMind } from '../models/journals/sleepJournal/calmingtheMind.model.js';

export const getCalmingtheMind = async (req, res) => {
	const calmingtheMind = req.body.clientId
	let result;
	try {
		result = await CalmingtheMind.find({ clientId: calmingtheMind })
	} catch (error) {
		console.log('Calming the Mind Journal could not be found', error)
	}
	res.json({ status: 200, message: 'Calming the Mind Journal found', result })
}

export const createCalmingtheMind = async (req, res) => {
	const calmingtheMind = req.body
	let result;
	try {
		result = await CalmingtheMind.create({ calmingtheMind })
	} catch (error) {
		console.log('Calming the Mind Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Calming the Mind Journal created', result })

}

export const deleteCalmingtheMind = async (req, res) => {
	const calmingtheMind = req.body.journalId
	let result;
	try {
		result = await CalmingtheMind.deleteOne({ id: calmingtheMind })
	} catch (error) {
		console.log('Calming the Mind Journal could not be deleted', error)
	}
	res.json({ status: 200, message: 'Calming the Mind Journal deleted', result })
}

import { DreamJournal } from '../models/journals/sleepJournal/dreamJournal.model.js';

export const getDreamJournal = async (req, res) => {
	const dreamJournal = req.body.clientId
	let result;
	try {
		result = await DreamJournal.find({ clientId: dreamJournal })
	} catch (error) {
		console.log('Dream Journal could not be found', error)
	}
	res.json({ status: 200, message: 'Dream Journal found', result })
}
export const createDreamJournal = async (req, res) => {
	const dreamJournal = req.body
	let result;
	try {
		result = await DreamJournal.create(dreamJournal)
	} catch (error) {
		console.log('Dream Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Dream Journal created', result })
}
export const deleteDreamJournal = async (req, res) => {
	const dreamJournal = req.body.journalId
	let result;
	try {
		result = await DreamJournal.deleteOne({ id: dreamJournal })
	} catch (error) {
		console.log('Dream Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Dream Journal deleted', result })

}

import { FindingpeacefulSpace } from '../models/journals/sleepJournal/findingapeacefulSpace.model.js';

export const getFindingPeaceFulSpace = async (req, res) => {
	const findingapeacefulSpace = req.body.clientId;
	let result;
	try {
		result = await FindingpeacefulSpace.find({ clientId: findingapeacefulSpace })
	} catch (error) {
		console.log('Finding Peaceful Journal could not be found', error)
	}
	res.json({ status: 200, message: 'Finding Peaceful Space Journal found', result })
}

export const createFindingPeaceFulSpace = async (req, res) => {
	const findingapeacefulSpace = req.body;
	let result;
	try {
		result = await FindingpeacefulSpace.create(findingapeacefulSpace)
	} catch (error) {
		console.log('Finding Peaceful Journal could not be found', error)
	}
	res.json({ status: 200, message: 'Finding Peaceful Space Journal found', result })
}

export const deleteFindingPeaceFulSpace = async (req, res) => {
	const findingapeacefulSpace = req.body.journalId;
	let result;
	try {
		result = await FindingpeacefulSpace.deleteOne({ id: findingapeacefulSpace })
	} catch (error) {
		console.log('Finding Peaceful Journal could not be deleted', error)
	}
	res.json({ status: 200, message: 'Finding Peaceful Space Journal deleted', result })
}

import { LookingforwardtoTomorrow } from '../models/journals/sleepJournal/lookingforwardtoTomorrow.model.js';

export const getLookingForwardToTomorrow = async (req, res) => {
	const lookingforwardtoTomorrow = req.body.clientId
	let result;
	try {
		result = await LookingforwardtoTomorrow.find({ clientId: lookingforwardtoTomorrow })
	} catch (error) {
		console.log('Looking Forward to Tomorrow Journal could not be found', error)
	}
	res.json({ status: 200, message: 'Looking Forward to Tomorrow Journal found', result })

}

export const createLookingForwardToTomorrow = async (req, res) => {
	const lookingforwardtoTomorrow = req.body
	let result;
	try {
		result = await LookingforwardtoTomorrow.create(lookingforwardtoTomorrow)
	} catch (error) {
		console.log('Looking Forward to Tomorrow Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Looking Forward to Tomorrow Journal created', result })

}

export const deleteLookingForwardToTomorrow = async (req, res) => {
	const lookingforwardtoTomorrow = req.body.journalId
	let result;
	try {
		result = await LookingforwardtoTomorrow.deleteOne({ id: lookingforwardtoTomorrow })
	} catch (error) {
		console.log('Looking Forward to Tomorrow Journal could not be deleted', error)
	}
	res.json({ status: 200, message: 'Looking Forward to Tomorrow Journal deleted', result })


}
import { PlanningTheDayAhead } from '../models/journals/sleepJournal/planningthedayAhead.model.js';

export const getPlanningDayAhead = async (req, res) => {
	const planningthedayAhead = req.body.clientId
	let result;
	try {
		result = await PlanningTheDayAhead.find({ clientId: planningthedayAhead })
	} catch (error) {
		console.log('Planning the day Ahead Journal could not be found')
	}
	res.json({ status: 200, message: "Planning the Day Ahead Journal found", result })

}

export const createPlanningDayAhead = async (req, res) => {
	const planningthedayAhead = req.body
	let result;
	try {
		result = await PlanningTheDayAhead.create(planningthedayAhead)
	} catch (error) {
		console.log('Planning the day Ahead Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Planning the day Ahead Journal created', result })

}

export const deletePlanningDayAhead = async (req, res) => {
	const planningthedayAhead = req.body.journalId
	let result;
	try {
		result = await PlanningTheDayAhead.deleteOne({ journalId: planningthedayAhead })
	} catch (error) {
		console.log('Planning the day Ahead Journal could not be deleted', error)
	}
	res.json({ status: 200, message: 'Planning the day Ahead Journal deleted', result })

}

// Get all Journals // 

export const getAllEntries = (req, res) => {

}


