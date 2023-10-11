/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * TYPES ARE ALSO PENDING
 */

import { GratitudeJournal } from '../models/journals/gratitudeJournal/model.js';
import { ProblemSolvingJournal } from '../models/journals/problemSolvingJournal/model.js';
import { GoalSettingJournal } from '../models/journals/goalSettingJournal/model.js';
import { SelfAffirmationJournal } from '../models/journals/selfAffirmationJournal/model.js';
import { OpenJournal } from '../models/journals/openJournal/model.js';
import { ChallengingNegativeThoughtsAboutYourselfJournal } from '../models/journals/challengingNegativeThoughtsAboutYourself/model.js'
import { BuildingASelfCarePlan } from '../models/journals/buildingASelfCarePlan/model.js';
import { AnxietyThoughtRecordJournal } from '../models/journals/anxietyThoughtRecordJournal/model.js';
import { ReflectionJournal } from '../models/journals/reflectionJournal/model.js';

// Sleep Journal has own types & Models //
import { CalmingTheMind } from '../models/journals/calmingTheMind/model.js';
import { DreamJournal } from '../models/journals/dreamJournal/model.js';
import { FindingPeacefulSpace } from '../models/journals/findingAPeacefulSpace/model.js';
import { LookingForwardToTomorrow } from '../models/journals/lookingForwardToTomorrow/model.js'
import { PlanningTheDayAhead } from '../models/journals/planningTheDayAhead/model.js';

import mongoose from 'mongoose';

export const getJournals = async (id: string) => {
	const journals = [
		'gratitudeJournal',
		'problemSolvingJournal',
		'goalSettingJournal',
		'selfAffirmationJournal',
		'openJournal',
		'challengingNegativeThoughtsAboutYourselfJournal',
		'buildingASelfCarePlan',
		'anxietyThoughtRecordJournal',
		'reflectionJournal',
		'calmingTheMind',
		'dreamJournal',
		'findingPeacefulSpace',
		'lookingForwardToTomorrow',
		'planningTheDayAhead'
	];

	const promises = journals.map(async (journalName) => {
		const journalResponses = await mongoose.model(journalName).find({ clientId: id }).populate({
			path: 'clientId',
			model: 'client',
		});
		return journalResponses;
	});

	const responses = await Promise.allSettled(promises);

	const resolvedResponses = responses
		.filter((result) => result.status === 'fulfilled')
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		.map((result) => (result as unknown as PromiseFulfilledResult<any[]>).value);

	const rejectedResponses = responses
		.filter((result) => result.status === 'rejected')
		.map((result) => (result as PromiseRejectedResult).reason);

	if (rejectedResponses.length > 0) {
		// Handle and log errors from rejected promises
		for (const error of rejectedResponses) {
			console.error(error);
		}
	}

	if (resolvedResponses.length === 0) {
		throw new Error('No Journal Entries Found');
	}

	return resolvedResponses;
}

export const getGratitudeJournal = async (id: string) => {
	const response = await GratitudeJournal.find({ clientId: id })
	if (!response)
		throw new Error('Gratitude Journal Could not be found')
	return response
}

export const createGratitudeJournal = async (gratitudeJournal: any) => {
	const response = await GratitudeJournal.create(gratitudeJournal)
	if (!response)
		throw new Error('Gratitude Journal Could not be Created')
	return response
}

export const deleteGratitudeJournal = async (id: string) => {
	const response = await GratitudeJournal.deleteOne({ _id: id })
	if (!response)
		throw new Error('Gratitude Journal Could no be Deleted')
	return response
}

export const getProblemSolvingJournal = async (id: string) => {
	const response = await ProblemSolvingJournal.find({ clientId: id })
	if (!response)
		throw new Error('Problem Solving Journal Could not be found')
	return response
}

export const createProblemSolvingJournal = async (problemSolvingJournal: any) => {
	const response = await ProblemSolvingJournal.create(problemSolvingJournal)
	if (!response)
		throw new Error('Problem Solving Journal Could not be Created')
	return response
}

export const deleteProblemSolvingJournal = async (id: string) => {
	const response = await ProblemSolvingJournal.deleteOne({ _id: id })
	if (!response)
		throw new Error('Problem Solving Journal Could no be Deleted')
	return response
}

export const getGoalSettingJournal = async (id: string) => {
	const response = await GoalSettingJournal.find({ clientId: id })
	if (!response)
		throw new Error('Goal Setting Journal Could not be found')
	return response
}

export const createGoalSettingJournal = async (goalSettingJournal: any) => {
	const response = await GoalSettingJournal.create(goalSettingJournal)
	if (!response)
		throw new Error('Goal Setting Journal Could not be Created')
	return response
}

export const deleteGoalSettingJournal = async (id: string) => {
	const response = await GoalSettingJournal.deleteOne({ _id: id })
	if (!response)
		throw new Error('Goal Setting Journal Could no be Deleted')
	return response
}


export const getSelfAffirmationJournal = async (id: string) => {
	const response = await SelfAffirmationJournal.find({ clientId: id })
	if (!response)
		throw new Error('Self Affirmation Journal Could not be found')
	return response
}

export const createSelfAffirmationJournal = async (selfAffirmationJournal: any) => {
	const response = await SelfAffirmationJournal.create(selfAffirmationJournal)
	if (!response)
		throw new Error('Self Affirmation Journal Could not be Created')
	return response
}

export const deleteSelfAffirmationJournal = async (id: string) => {
	const response = await SelfAffirmationJournal.deleteOne({ _id: id })
	if (!response)
		throw new Error('Self Affirmation Journal Could no be Deleted')
	return response
}


export const getOpenJournal = async (id: string) => {
	const response = await OpenJournal.find({ clientId: id })
	if (!response)
		throw new Error('Open Journal Could not be found')
	return response
}

export const createOpenJournal = async (openJournal: any) => {
	const response = await OpenJournal.create(openJournal)
	if (!response)
		throw new Error('Open Journal Could not be Created')
	return response
}
export const deleteOpenJournal = async (id: string) => {
	const response = await OpenJournal.deleteOne({ _id: id })
	if (!response)
		throw new Error('Open Journal Journal Could no be Deleted')
	return response
}


export const getChallengingNegativeThoughtsAboutYourselfJournal = async (id: string) => {
	const response = await ChallengingNegativeThoughtsAboutYourselfJournal.find({ clientId: id })
	if (!response)
		throw new Error('Challenging Negative Thoughts About Yourself Journal Could not be found')
	return response
}

export const createChallengingNegativeThoughtsAboutYourselfJournal = async (challengingNegativeThoughtsAboutYourselfJournal: any) => {
	const response = await ChallengingNegativeThoughtsAboutYourselfJournal.create(challengingNegativeThoughtsAboutYourselfJournal)
	if (!response)
		throw new Error('Challenging Negative Thoughts Journal Could not be Created')
	return response
}

export const deleteChallengingNegativeThoughtsAboutYourselfJournal = async (id: string) => {
	const response = await ChallengingNegativeThoughtsAboutYourselfJournal.deleteOne({ _id: id })
	if (!response)
		throw new Error('Challenging Negative Thoughts About Yourself Journal Could no be Deleted')
	return response
}


export const getBuildingASelfCarePlan = async (id: string) => {
	const response = await BuildingASelfCarePlan.find({ clientId: id })
	if (!response)
		throw new Error('Building a Self Care Plan Journal Could not be found')
	return response
}

export const createBuildingASelfCarePlan = async (buildingASelfCarePlan: any) => {
	const response = await BuildingASelfCarePlan.create(buildingASelfCarePlan)
	if (!response)
		throw new Error('Building Self Care Plan Journal could not be created')
	return response
}

export const deleteBuildingASelfCarePlan = async (id: string) => {
	const response = await BuildingASelfCarePlan.deleteOne({ _id: id })
	if (!response)
		throw new Error('Building A Self Care Plan Journal Could no be Deleted')
	return response
}


export const getAnxietyThoughtReccordJournal = async (id: string) => {
	const response = await AnxietyThoughtRecordJournal.find({ clientId: id })
	if (!response)
		throw new Error('Axniety Thought Reccord Journal Could not be found')
	return response
}

export const createAnxietyThoughtReccordJournal = async (anxietyThoughtRecordJournal: any) => {
	const response = await AnxietyThoughtRecordJournal.create(anxietyThoughtRecordJournal)
	if (!response)
		throw new Error('Anxiety Thought Reccord Journal could not be Created')
	return response
}

export const deleteAnxietyThoughtReccordJournal = async (id: string) => {
	const response = await AnxietyThoughtRecordJournal.deleteOne({ _id: id })
	if (!response)
		throw new Error('Anxiety Thought Reccord Journal Could no be Deleted')
	return response
}


export const getReflectionJournal = async (id: string) => {
	const response = await ReflectionJournal.find({ clientId: id })
	if (!response)
		throw new Error('Reflection Journal Could not be found')
	return response
}

export const createReflectionJournal = async (reflectionJournal: any) => {
	const response = await ReflectionJournal.create(reflectionJournal)
	if (!response)
		throw new Error('Reflection Journal Could not be Created')
	return response
}

export const deleteReflectionJournal = async (id: string) => {
	const response = await ReflectionJournal.deleteOne({ _id: id })
	if (!response)
		throw new Error('Reflection Journal Could no be Deleted')
	return response
}


export const getCalmingtheMind = async (id: string) => {
	const response = await CalmingTheMind.find({ clientId: id })
	if (!response)
		throw new Error('Calming The Mind Journal Could not be found')
	return response
}

export const createCalmingtheMind = async (calmingTheMind: any) => {
	const response = await CalmingTheMind.create(calmingTheMind)
	if (!response)
		throw new Error('Calming The Mind Journal could not be Created')
	return response
}

export const deleteCalmingTheMind = async (id: string) => {
	const response = await CalmingTheMind.deleteOne({ _id: id })
	if (!response)
		throw new Error('Calming Journal Could no be Deleted')
	return response
}

export const getDreamJournal = async (id: string) => {
	const response = await DreamJournal.find({ clientId: id })
	if (!response)
		throw new Error('Dream Journal Journal Could not be found')
	return response
}

export const createDreamJournal = async (dreamJournal: any) => {
	const response = await DreamJournal.create(dreamJournal)
	if (!response)
		throw new Error('Dream Journal Could not be Created')
}

export const deleteDreamJournal = async (id: string) => {
	const response = await DreamJournal.deleteOne({ _id: id })
	if (!response)
		throw new Error('Dream Journal Could no be Deleted')
	return response
}


export const getFindingPeaceFulSpace = async (id: string) => {
	const response = await FindingPeacefulSpace.find({ clientId: id })
	if (!response)
		throw new Error('Finding Peaceful Space Journal Could not be found')
	return response
}

export const createFindingPeaceFulSpace = async (findingpeacefulSpace: any) => {
	const response = await FindingPeacefulSpace.create(findingpeacefulSpace)
	if (!response)
		throw new Error('Finding Peaceful Space Journal Could not be Created')
	return response
}

export const deleteFindingPeaceFulSpace = async (id: string) => {
	const response = await FindingPeacefulSpace.deleteOne({ _id: id })
	if (!response)
		throw new Error('Finding Peaceful Space Journal Could no be Deleted')
	return response
}


export const getLookingForwardToTomorrow = async (id: string) => {
	const response = await LookingForwardToTomorrow.find({ clientId: id })
	if (!response)
		throw new Error('Looking Forward To Tomorrow Journal Could not be found')
	return response
}

export const createLookingForwardToTomorrow = async (lookingForwardToTomorrow: any) => {
	const response = await LookingForwardToTomorrow.create(lookingForwardToTomorrow)
	if (!response)
		throw new Error('Looking Forward To Tomorrow Journal Could not be Created')
	return response
}

export const deleteLookingForwardToTomorrow = async (id: string) => {
	const response = await LookingForwardToTomorrow.deleteOne({ _id: id })
	if (!response)
		throw new Error('Looking Forward To Tomorrow Journal Could no be Deleted')
	return response
}


export const getPlanningDayAhead = async (id: string) => {
	const response = await PlanningTheDayAhead.find({ clientId: id })
	if (!response)
		throw new Error('Planning The Day Ahead Journal Could not be found')
	return response
}

export const createPlanningDayAhead = async (planningTheDayAhead: any) => {
	const response = await PlanningTheDayAhead.create(planningTheDayAhead)
	if (!response)
		throw new Error('Planning The Day Ahead Journal Could not be Created')
	return response
}

export const deletePlanningDayAhead = async (id: string) => {
	const response = await PlanningTheDayAhead.deleteOne({ _id: id })
	if (!response)
		throw new Error('Planning The Day Ahead Journal Could no be Deleted')
	return response
}

