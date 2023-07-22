// Journal Types & Models //

const GratitudeJournal = require('../models/journals/gratitudeJournal')

exports.getGratitudeJournal = async (req, res) => {
	const gratitudeJournal = req.body.clientId;
	var result;
	try {
		result = await GratitudeJournal.find({ clientId: gratitudeJournal })
	} catch (error) {
		console.log('Gratitude Journal could not be found', error)
	}
	res.json({ status: 200, message: 'Gratitide Journal found', result })
}

exports.createGratitudeJournal = async (req, res) => {
	const gratitudeJournal = req.body;
	var result;
	try {
		result = await GratitudeJournal.create(gratitudeJournal)
	} catch (error) {
		console.log('Gratitude Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Gratitide Journal created', result })
}

exports.deleteGratitudeJournal = async (req, res) => {
	const gratitudeJournal = req.body.journaIld;
	var result;
	try {
		result = await GratitudeJournal.deleteOne({ id: gratitudeJournal })
	} catch (error) {
		console.log('Gratitude Journal could not be deleted', error)
	}
	res.json({ status: 200, message: 'Gratitide Journal deleted', result })
}

const ProblemSolvingJournal = require('../models/journals/problemSolvingJournal')

exports.getProblemSolvingJournal = async (req, res) => {
	const problemSolvingJournal = req.body.clientId
	var result;
	try {
		result = await ProblemSolvingJournal.find({ clientId: problemSolvingJournal })
	} catch (error) {
		console.log('Problem Solving Journal could not be found', error)
	}
	res.json({ status: 200, message: "Problem Solving Journal found", result })
}

exports.createProblemSolvingJournal = async (req, res) => {
	const problemSolvingJournal = req.body
	var result;
	try {
		result = await ProblemSolvingJournal.create(problemSolvingJournal)
	} catch (error) {
		console.log('Problem Solving Journal could not be created', error)
	}
	res.json({ status: 200, message: "Problem Solving Journal created", result })
}

exports.deleteProblemSolvingJournal = async (req, res) => {
	const problemSolvingJournal = req.body.journalId
	var result;
	try {
		result = await ProblemSolvingJournal.deleteOne({ journalId: problemSolvingJournal })
	} catch (error) {
		console.log('Problem Solving Journal could not be deleted', error)
	}
	res.json({ status: 200, message: "Problem Solving Journal deleted", result })
}

const GoalSettingJournal = require('../models/journals/goalSettingJournal')

exports.getGoalSettingJournal = async (req, res) => {
	const goalSettingJournal = red.body.clientId;
	var result;
	try {
		result = await GoalSettingJournal.find({ clientId: goalSettingJournal })
	} catch (error) {
		console.log('Goal Setting Journal could not be found', error)
	}
	res.json({ status: 200, message: "Goal Setting Journal found", result })

}

exports.createGoalSettingJournal = async (req, res) => {
	const goalSettingJournal = req.body
	var result;
	try {
		result = await GoalSettingJournal.create(goalSettingJournal)
	} catch (error) {
		console.log('Goal Setting Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Goal Setting Journal created', result })

}

exports.deleteGoalSettingJournal = async (req, res) => {
	const goalSettingJournal = req.body.journalId
	var result;
	try {
		result = await GoalSettingJournal.deleteOne({ journaIld: goalSettingJournal })
	} catch (error) {
		console.log('Goal Setting Journal could not be deleted', error)
	}
	res.json({ status: 200, message: 'Goal Setting Journal deleted', result })


}

const SelfAffirmationJournal = require('../models/journals/selfAffirmationJournal')

exports.getSelfAffirmationJournal = async (req, res) => {
	const selfAffirmationJournal = req.body.clientId
	var result;
	try {
		result = await SelfAffirmationJournal.find({ clientId: selfAffirmationJournal })
	} catch (error) {
		console.log('Self-Affirmation Journal could not be found', error)
	}
	res.json({ status: 200, message: 'Self-Affirmation Journal found', result })
}

exports.createSelfAffirmationJournal = async (req, res) => {
	const selfAffirmationJournal = req.body
	var result;
	try {
		result = await SelfAffirmationJournal.create(selfAffirmationJournal)
	} catch (error) {
		console.log('Self-Affirmation Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Self-Affirmation Journal Created', result })
}

exports.deleteSelfAffirmationJournal = async (req, res) => {
	const selfAffirmationJournal = req.body.journalId
	var result;
	try {
		result = await SelfAffirmationJournal.deleteOne({ id, selfAffirmationJournal })
	} catch (error) {
		console.log('Self-Affirmation Journal could not be Deleted', error)
	}
	res.json({ status: 200, message: 'Self-Affirmation Journal Created', result })

}

const ReflectionJournal = require('../models/journals/reflectionJournal')

exports.getReflectionJournal = async (req, res) => {
	const reflectionJournal = req.body.clientId
	var result;
	try {
		result = await ReflectionJournal.find({ clientId: reflectionJournal })
	} catch (error) {
		console.log('Reflection Journal could not be found', error)
	}
	res.json({ status: 200, message: 'Reflection Journal found', result })

}
exports.createReflectionJournal = async (req, res) => {
	const reflectionJournal = req.body;
	var result;
	try {
		result = await ReflectionJournal.create(reflectionJournal)
	} catch (error) {
		console.log('Reflection Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Reflection Journal created', result })

}

exports.deleteReflectionJournal = async (req, res) => {
	const reflectionJournal = req.body.journalId;
	var result;
	try {
		result = await ReflectionJournal.deleteOne({ id, reflectionJournal })
	} catch (error) {
		console.log('Refection Journal could not be deleted', error)
	}
	res.json({ status: 200, message: 'Relfection Journal deleted', result })

}
const OpenJournal = require('../models/journals/openJournal')

exports.getOpenJournal = async (req, res) => {
	const openJournal = req.body.clientId
	var result;
	try {
		result = await OpenJournal.find({ clientId: openJournal })
	} catch (error) {
		console.log('Open Journal could not be found', error)
	}
	res.json({ status: 200, message: 'Open Journal found', result })

}

exports.createOpenJournal = async (req, res) => {
	const openJournal = req.body;
	var result;
	try {
		result = await OpenJournal.create(openJournal)
	} catch (error) {
		console.log('Open Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Open Journal created', result })
}

exports.deleteOpenJournal = async (req, res) => {
	const openJournal = req.body.journalId;
	var result;
	try {
		result = await OpenJournal.deleteOne({ id, openJournal })
	} catch (error) {
		console.log('Open Journal could not be deleted', error)
	}
	res.json({ status: 200, message: 'Open Journal deleted', result })
}

const ChallengingNegativeThoughtsAboutYourselfJournal = require('../models/journals/challengingNegativeThoughtsAboutYourselfJournal')

exports.getChallengingNegativeThoughtsAboutYourselfJournal = async (req, res) => {

	const challengingNegativeThoughtsAboutYourselfJournal = req.body.clientId;
	var result;
	try {
		result = await ChallengingNegativeThoughtsAboutYourselfJournal.find({ clientId: challengingNegativeThoughtsAboutYourselfJournal })
	} catch (error) {
		console.log('Challenge Negative Thoughts Journal could not be found', error)
	}
	res.json({ status: 200, message: "Challenge Negative Thoughts Journal found", result })

}

exports.createChallengingNegativeThoughtsAboutYourselfJournal = async (req, res) => {
	const challengingNegativeThoughtsAboutYourselfJournal = req.body;
	var result;
	try {
		result = await ChallengingNegativeThoughtsAboutYourselfJournal.create(challengingNegativeThoughtsAboutYourselfJournal)
	} catch (error) {
		console.log('Challenge Negative Thoughts Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Challenge Negative Thoughts Journal created', result })

}

exports.deleteChallengingNegativeThoughtsAboutYourselfJournal = async (req, res) => {
	const challengingNegativeThoughtsAboutYourselfJournal = req.body.journalId;
	var result;
	try {
		result = await ChallengingNegativeThoughtsAboutYourselfJournal.deleteOne({ journalId: challengingNegativeThoughtsAboutYourselfJournal })
	} catch (error) {
		console.log('Challenge Negative Thoughts Journal could not be deleted', error)
	}
	res.json({ status: 200, message: 'Challenge Negative Thoughts Journal deleted', result })

}
const BuildingASelfCarePlan = require('../models/journals/buildingASelfCarePlan')

exports.getBuildingASelfCarePlan = async (req, res) => {
	const buildingASelfCarePlan = req.body.clientId
	var result;
	try {
		result = await BuildingASelfCarePlan.find({ clientId: buildingASelfCarePlan })
	} catch (error) {
		console.log('Building Self-Care Journal could not be found')
	}
	res.json({ status: 200, message: 'Building Self-Care Journal found', result })

}

exports.createBuildingASelfCarePlan = async (req, res) => {
	const buildingASelfCarePlan = req.body
	var result;
	try {
		result = await BuildingASelfCarePlan.create({ buildingASelfCarePlan })
	} catch (error) {
		console.log('Building Self-Care Journal could not be created')
	}
	res.json({ status: 200, message: 'Building Self-Care Journal created', result })
}

exports.deleteBuildingASelfCarePlan = async (req, res) => {
	const buildingASelfCarePlan = req.body.journalId
	var result;
	try {
		result = await BuildingASelfCarePlan.delete({ id: buildingASelfCarePlan })
	} catch (error) {
		console.log('Building Self-Care Journal could not be deleted')
	}
	res.json({ status: 200, message: 'Building Self-Care Journal deleted', result })
}
const AnxietyThoughtRecordJournal = require('../models/journals/anxietyThoughtRecordJournal')

exports.getAnxietyThoughtReccordJournal = async (req, res) => {
	const anxietyThoughtRecordJournal = req.body.clientId
	var result;
	try {
		result = await AnxietyThoughtRecordJournal.find({ id: anxietyThoughtRecordJournal })
	} catch (error) {
		console.log('Anxiety Thought Reccord Journal could not be found')
	}
	res.json({ status: 200, message: 'Anxiety Thought Reccord Journal found', result })
}

exports.createAnxietyThoughtReccordJournal = async (req, res) => {
	const anxietyThoughtRecordJournal = req.body
	var result;
	try {
		result = await anxietyThoughtRecordJournal.create({ anxietyThoughtRecordJournal })
	} catch (error) {
		console.log('Anxiety Thought Reccord Journal could not be created')
	}
	res.json({ status: 200, message: 'Anxiety Thought Reccord Journal created', result })

}

exports.deleteAnxietyThoughtReccordJournal = async (req, res) => {
	const anxietyThoughtRecordJournal = req.body.journalId
	var result;
	try {
		result = await anxietyThoughtRecordJournal.deleteOne({ id: anxietyThoughtRecordJournal })
	} catch (error) {
		console.log('Anxiety Thought Reccord Journal could not be deleted')
	}
	res.json({ status: 200, message: 'Anxiety Thought Reccord Journal deleted', result })

}
// Sleep Journal has own types & Models //

const CalmingtheMind = require('../models/journals/sleepJournal/calmingtheMind')
exports.getCalmingtheMind = async (req, res) => {
	const calmingtheMind = req.body.clientId
	var result;
	try {
		result = await CalmingtheMind.find({ clientId: calmingtheMind })
	} catch (error) {
		console.log('Calming the Mind Journal could not be found', error)
	}
	res.json({ status: 200, message: 'Calming the Mind Journal found', result })
}

exports.createCalmingtheMind = async (req, res) => {
	const calmingtheMind = req.body
	var result;
	try {
		result = await CalmingtheMind.create({ calmingtheMind })
	} catch (error) {
		console.log('Calming the Mind Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Calming the Mind Journal created', result })

}

exports.deleteCalmingtheMind = async (req, res) => {
	const calmingtheMind = req.body.journalId
	var result;
	try {
		result = await CalmingtheMind.deleteOne({ id: calmingtheMind })
	} catch (error) {
		console.log('Calming the Mind Journal could not be deleted', error)
	}
	res.json({ status: 200, message: 'Calming the Mind Journal deleted', result })
}

const DreamJournal = require('../models/journals/sleepJournal/dreamJournal')

exports.getDreamJournal = async (req, res) => {
	const dreamJournal = req.body.clientId
	var result;
	try {
		result = await DreamJournal.find({ clientId: dreamJournal })
	} catch (error) {
		console.log('Dream Journal could not be found', error)
	}
	res.json({ status: 200, message: 'Dream Journal found', result })
}
exports.createDreamJournal = async (req, res) => {
	const dreamJournal = req.body
	var result;
	try {
		result = await DreamJournal.create(dreamJournal)
	} catch (error) {
		console.log('Dream Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Dream Journal created', result })
}
exports.deleteDreamJournal = async (req, res) => {
	const dreamJournal = req.body.journalId
	var result;
	try {
		result = await DreamJournal.deleteOne({ id: dreamJournal })
	} catch (error) {
		console.log('Dream Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Dream Journal deleted', result })

}

const FindingpeacefulSpace = require('../models/journals/sleepJournal/findingapeacefulSpace')

exports.getFindingPeaceFulSpace = async (req, res) => {
	const findingapeacefulSpace = req.body.clientId;
	var result;
	try {
		result = await FindingpeacefulSpace.find({ clientId: findingapeacefulSpace })
	} catch (error) {
		console.log('Finding Peaceful Journal could not be found', error)
	}
	res.json({ status: 200, message: 'Finding Peaceful Space Journal found', result })
}

exports.createFindingPeaceFulSpace = async (req, res) => {
	const findingapeacefulSpace = req.body;
	var result;
	try {
		result = await FindingpeacefulSpace.create(findingapeacefulSpace)
	} catch (error) {
		console.log('Finding Peaceful Journal could not be found', error)
	}
	res.json({ status: 200, message: 'Finding Peaceful Space Journal found', result })
}

exports.deleteFindingPeaceFulSpace = async (req, res) => {
	const findingapeacefulSpace = req.body.journalId;
	var result;
	try {
		result = await FindingpeacefulSpace.deleteOne({ id: findingapeacefulSpace })
	} catch (error) {
		console.log('Finding Peaceful Journal could not be deleted', error)
	}
	res.json({ status: 200, message: 'Finding Peaceful Space Journal deleted', result })
}

const LookingforwardtoTomorrow = require('../models/journals/sleepJournal/lookingforwardtoTomorrow')

exports.getLookingForwardToTomorrow = async (req, res) => {
	const lookingforwardtoTomorrow = req.body.clientId
	var result;
	try {
		result = await LookingforwardtoTomorrow.find({ clientId: lookingforwardtoTomorrow })
	} catch (error) {
		console.log('Looking Forward to Tomorrow Journal could not be found', error)
	}
	res.json({ status: 200, message: 'Looking Forward to Tomorrow Journal found', result })

}

exports.createLookingForwardToTomorrow = async (req, res) => {
	const lookingforwardtoTomorrow = req.body
	var result;
	try {
		result = await LookingforwardtoTomorrow.create(lookingforwardtoTomorrow)
	} catch (error) {
		console.log('Looking Forward to Tomorrow Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Looking Forward to Tomorrow Journal created', result })

}

exports.deleteLookingForwardToTomorrow = async (req, res) => {
	const lookingforwardtoTomorrow = req.body.journalId
	var result;
	try {
		result = await LookingforwardtoTomorrow.deleteOne({ id: lookingforwardtoTomorrow })
	} catch (error) {
		console.log('Looking Forward to Tomorrow Journal could not be deleted', error)
	}
	res.json({ status: 200, message: 'Looking Forward to Tomorrow Journal deleted', result })


}
const PlanningthedayAhead = require('../models/journals/sleepJournal/planningthedayAhead')

exports.getPlanningDayAhead = async (req, res) => {
	const planningthedayAhead = req.body.clientId
	var result;
	try {
		result = await PlanningthedayAhead.find({ clientId: planningthedayAhead })
	} catch (error) {
		console.log('Planning the day Ahead Journal could not be found')
	}
	res.json({ status: 200, message: "Planning the Day Ahead Journal found", result })

}

exports.createPlanningDayAhead = async (req, res) => {
	const planningthedayAhead = req.body
	var result;
	try {
		result = await PlanningthedayAhead.create(planningthedayAhead)
	} catch (error) {
		console.log('Planning the day Ahead Journal could not be created', error)
	}
	res.json({ status: 200, message: 'Planning the day Ahead Journal created', result })

}

exports.deletePlanningDayAhead = async (req, res) => {
	const planningthedayAhead = req.body.journalId
	var result;
	try {
		result = await PlanningthedayAhead.deleteOne({ journalId: planningthedayAhead })
	} catch (error) {
		console.log('Planning the day Ahead Journal could not be deleted', error)
	}
	res.json({ status: 200, message: 'Planning the day Ahead Journal deleted', result })

}

// Get all Journals // 

exports.getAllEntries = (req, res) => {

}


