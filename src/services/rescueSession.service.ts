import { Relationship } from "../models/rescueSessions/relationship.model.ts";
import { Envy } from "../models/rescueSessions/envy.model.ts";
import { Sleep } from "../models/rescueSessions/sleep.model.ts";
import { AngerAndFrustration } from "../models/rescueSessions/angerFrustration.model.ts";
import { Criticism } from "../models/rescueSessions/criticism.model.ts";
import { LowMood } from "../models/rescueSessions/lowMood.model.ts";
import { OverComingDistractions } from "../models/rescueSessions/overcomingDistractions.model.ts";
import { RegainingMotivation } from "../models/rescueSessions/regainingMotivation.model.ts";
import { IRescueSession } from "../types/IRescueSession.js";

export const createLowMood = async (lowMood: IRescueSession, id: string) => {
	const response = await LowMood.create({
		clientId: id,
		...lowMood
	})
	if (!response)
		throw new Error('Low Mood Rescue Session Created')
	return response
}

export const updateLowMood = async (lowMood: IRescueSession, id: string) => {
	const response = await LowMood.findOneAndUpdate({ clientId: id }, {
		$push: {
			results: lowMood.results
		}
	})
	if (!response)
		throw new Error('Low Mood Rescue Session Updated')
	return response
}

export const createOverComingDistraction = async (overcomingDistractions: IRescueSession, id: string) => {
	const response = await OverComingDistractions.create({
		clientId: id,
		...overcomingDistractions
	})
	if (!response)
		throw new Error('Over Coming Distraction Rescue Session Created')
	return response
}

export const updateOverComingDistraction = async (overcomingDistractions: IRescueSession, id: string) => {
	const response = await OverComingDistractions.findOneAndUpdate({ clientId: id }, {
		$push: {
			results: overcomingDistractions.results
		}
	})
	if (!response)
		throw new Error('Over Coming Distraction Rescue Session Updated')
	return response
}

export const createRegainingMotivation = async (regainingMotivation: IRescueSession, id: string) => {
	const response = await OverComingDistractions.create({
		clientId: id,
		...regainingMotivation
	})
	if (!response)
		throw new Error('Over Coming Distraction Rescue Session Created')
	return response
}

export const updateRegainingMotivation = async (regainingMotivation: IRescueSession, id: string) => {
	const response = await RegainingMotivation.findOneAndUpdate({ clientId: id }, {
		$push: {
			results: regainingMotivation.results
		}
	})
	if (!response)
		throw new Error('Regaining Motivation Rescue Session Updated')
	return response
}

export const createCriticism = async (criticism: IRescueSession, id: string) => {
	const response = await Criticism.create({
		clientId: id,
		...criticism
	})
	if (!response)
		throw new Error('Critism Rescue Session Created')
	return response
}

export const updateCriticism = async (criticism: IRescueSession, id: string) => {
	const response = await Relationship.findOneAndUpdate({ clientId: id }, {
		$push: {
			results: criticism.results
		}
	})
	if (!response)
		throw new Error('Critism Rescue Session Updated')
	return response
}

export const createRelationship = async (relationship: IRescueSession, id: string) => {
	const response = await Relationship.create({
		clientId: id,
		...relationship
	})
	if (!response)
		throw new Error('Relationship Rescue Session Completed')
	return response
}

export const updateRelationship = async (relationship: IRescueSession, id: string) => {
	const response = await Relationship.findOneAndUpdate({ clientId: id }, {
		$push: {
			results: relationship.results
		}
	})
	if (!response)
		throw new Error('Relationship Rescue Session Updated')
	return response
}

export const createEnvy = async (envy: IRescueSession, id: string) => {
	const response = await Envy.create({
		clientId: id,
		...envy
	})
	if (!response)
		throw new Error('Envy Rescue Session Completed')
	return response
}

export const updateEnvy = async (envy: IRescueSession, id: string) => {
	const response = await Relationship.findOneAndUpdate({ clientId: id }, {
		$push: {
			results: envy.results
		}
	})
	if (!response)
		throw new Error('Envy Rescue Session Updated')
	return response
}

export const createSleep = async (sleep: IRescueSession, id: string) => {
	const response = await Sleep.create({
		clientId: id,
		...sleep
	})
	if (!response)
		throw new Error('Sleep Rescue Session Completed')
	return response
}

export const updateSleep = async (sleep: IRescueSession, id: string) => {
	const response = await Sleep.findOneAndUpdate({ clientId: id }, {
		$push: {
			results: sleep.results
		}
	})
	if (!response)
		throw new Error('Sleep Rescue Session Updated')
	return response
}

export const createAngerAndFrustration = async (angerAndFrustration: IRescueSession, id: string) => {
	const response = await AngerAndFrustration.create({ clientId: id, ...angerAndFrustration })
	if (!response)
		throw new Error('Anger And Frustration Rescue Session Updated')
	return response
}

export const updateAngerAndFrustration = async (angerAndFrustration: IRescueSession, id: string) => {
	const response = await AngerAndFrustration.findOneAndUpdate({
		clientId: id
	}, {
		$push: {
			results: angerAndFrustration.results
		}
	})
	if (!response)
		throw new Error('Anger And Frustration Rescue Session Updated')
	return response
}


