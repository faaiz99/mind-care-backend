import { Relationship } from "../models/rescueSessions/relationship/model.js";
import { Envy } from "../models/rescueSessions/envy/model.js";
import { Sleep } from "../models/rescueSessions/sleep/model.js";
import { AngerAndFrustration } from "../models/rescueSessions/angerAndFrustration/model.js";
import { Criticism } from "../models/rescueSessions/criticism/model.js";
import { LowMood } from "../models/rescueSessions/lowMood/model.js";
import { OverComingDistractions } from "../models/rescueSessions/overComingDistraction/model.js";
import { RegainingMotivation } from "../models/rescueSessions/regainingMotivation/model.js";
import { IRescueSession } from "../types/IRescueSession.js";

import mongoose from 'mongoose';

export const getAllRescueSessions = async (id: string) => {
    const sessionTypes = [
        'LowMood',
        'OverComingDistraction',
        'RegainingMotivation',
        'Criticism',
        'Relationship',
        'Envy',
        'Sleep',
        'AngerAndFrustration',
    ];

    const promises = sessionTypes.map(async (sessionType) => {
        try {
            const sessionResponses = await mongoose.model(sessionType).find({ clientId: id });
            return { type: sessionType, data: sessionResponses };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            throw new Error(`Error fetching ${sessionType} rescue sessions: ${error.message}`);
        }
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
        throw new Error('No Rescue Sessions Found');
    }

    return resolvedResponses;
};


export const getLowMood = async (id: string) => {
    const response = await LowMood.findOne({ clientId: id });
    if (!response) {
        throw new Error('Low Mood Rescue Session Not Found');
    }
    return response;
};

export const getOverComingDistraction = async (id: string) => {
    const response = await OverComingDistractions.findOne({ clientId: id });
    if (!response) {
        throw new Error('OverComing Distraction Rescue Session Not Found');
    }
    return response;
};

export const getRegainingMotivation = async (id: string) => {
    const response = await RegainingMotivation.findOne({ clientId: id });
    if (!response) {
        throw new Error('Regaining Motivation Rescue Session Not Found');
    }
    return response;
};

export const getCriticism = async (id: string) => {
    const response = await Criticism.findOne({ clientId: id });
    if (!response) {
        throw new Error('Criticism Rescue Session Not Found');
    }
    return response;
};

export const getRelationship = async (id: string) => {
    const response = await Relationship.findOne({ clientId: id });
    if (!response) {
        throw new Error('Relationship Rescue Session Not Found');
    }
    return response;
};

export const getEnvy = async (id: string) => {
    const response = await Envy.findOne({ clientId: id });
    if (!response) {
        throw new Error('Envy Rescue Session Not Found');
    }
    return response;
};

export const getSleep = async (id: string) => {
    const response = await Sleep.findOne({ clientId: id });
    if (!response) {
        throw new Error('Sleep Rescue Session Not Found');
    }
    return response;
};

export const getAngerAndFrustration = async (id: string) => {
    const response = await AngerAndFrustration.findOne({ clientId: id });
    if (!response) {
        throw new Error('Anger And Frustration Rescue Session Not Found');
    }
    return response;
};

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


