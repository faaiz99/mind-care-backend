import { SleepTracker } from "../models/sleepTracker/model.js";
import { ISleepTracker } from "../types/ISleepTracker.js";
import { ISleepSchedule } from "../types/ISleepTracker.js";

/**
 * FITNESS PART IS PENDING
 * SUGGESTION ARE ALSO PENDING
 */

export const createSleepSchedule = async (sleepTracker: ISleepTracker, id: string) => {
	const filter = { _id: id }
	const response = SleepTracker.findOneAndUpdate(filter, {
		$push: { sleepProfile: sleepTracker }
	}, {
		returnOriginal: false
	})
	if (!response)
		throw new Error('Sleep Schedule Could not be Created')
	return response
}

export const updateSleepSchedule = async (sleepTracker: ISleepTracker, id: string) => {
	const filter = { clientId: id };
	const response = SleepTracker.findOneAndUpdate(filter, {
		$push: { sleepProfile: sleepTracker }
	}, {
		returnOriginal: false
	})
	if (!response)
		throw new Error('Sleep Schedule Could not be Updated')
	return response
}

export const resetSleepSchedule = async (id: string) => {
	const filter = { clientId: id }
	const response = SleepTracker.findOneAndDelete(filter)
	if (!response)
		throw new Error('Sleep Schedule Could not be Reset')
	return response
}


export const getSleepQuality = async (id: string) => {
	try {
		const sleepData = await SleepTracker.findOne({ clientId: id });

		if (!sleepData) {
			throw new Error('Sleep data not found.');
		}

		const sleepQuality = calculateSleepQuality(sleepData.sleepSchedule);

		return sleepQuality;
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	catch (error: any) {
		throw new Error(`Error calculating sleep quality: ${error.message}`);
	}
};

export const getSleepEfficiency = async (id: string) => {
	try {
		const sleepData = await SleepTracker.findOne({ clientId: id });

		if (!sleepData) {
			throw new Error('Sleep data not found.');
		}

		const sleepEfficiency = calculateSleepEfficiency(sleepData.sleepSchedule);

		return sleepEfficiency;
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	catch (error:any) {
		throw new Error(`Error calculating sleep efficiency: ${error.message}`);
	}
};
/**
 * 
 *  Formula for calculating Sleep Quality and Efficiency
 */
export const calculateSleepQuality = (sleepData: Array<ISleepSchedule>) => {
	if (sleepData.length === 0) {
		throw new Error('Sleep data is empty.');
	}

	let totalSleepTime = 0;
	let totalTimeInBed = 0;

	for (const schedule of sleepData) {
		totalSleepTime += schedule.totalSleepTime;
		totalTimeInBed += schedule.timeInBed;
	}

	if (totalTimeInBed <= 0) {
		throw new Error('Total time in bed must be greater than zero.');
	}

	return (totalSleepTime / totalTimeInBed) * 100; // Convert to a percentage
};

export const calculateSleepEfficiency = (sleepData: Array<ISleepSchedule>) => {
	if (sleepData.length === 0) {
		throw new Error('Sleep data is empty.');
	}

	let totalSleepTime = 0;
	let totalTimeInBed = 0;

	for (const schedule of sleepData) {
		totalSleepTime += schedule.totalSleepTime;
		totalTimeInBed += schedule.timeInBed;
	}

	if (totalTimeInBed <= 0) {
		throw new Error('Total time in bed must be greater than zero.');
	}

	return (totalSleepTime / totalTimeInBed) * 100; // Convert to a percentage
};
