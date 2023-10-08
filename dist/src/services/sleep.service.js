import { SleepTracker } from "../models/sleepTracker/model.js";
/**
 * FITNESS PART IS PENDING
 * SUGGESTION ARE ALSO PENDING
 */
export const createSleepSchedule = async (sleepTracker, id) => {
    const filter = { _id: id };
    const response = SleepTracker.findOneAndUpdate(filter, {
        $push: { sleepProfile: sleepTracker }
    }, {
        returnOriginal: false
    });
    if (!response)
        throw new Error('Sleep Schedule Could not be Created');
    return response;
};
export const updateSleepSchedule = async (sleepTracker, id) => {
    const filter = { clientId: id };
    const response = SleepTracker.findOneAndUpdate(filter, {
        $push: { sleepProfile: sleepTracker }
    }, {
        returnOriginal: false
    });
    if (!response)
        throw new Error('Sleep Schedule Could not be Updated');
    return response;
};
export const resetSleepSchedule = async (id) => {
    const filter = { clientId: id };
    const response = SleepTracker.findOneAndDelete(filter);
    if (!response)
        throw new Error('Sleep Schedule Could not be Reset');
    return response;
};
export const getSleepQuality = async (id) => {
    try {
        const sleepData = await SleepTracker.findOne({ clientId: id });
        if (!sleepData) {
            throw new Error('Sleep data not found.');
        }
        const sleepQuality = calculateSleepQuality(sleepData.sleepSchedule);
        return sleepQuality;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (error) {
        throw new Error(`Error calculating sleep quality: ${error.message}`);
    }
};
export const getSleepEfficiency = async (id) => {
    try {
        const sleepData = await SleepTracker.findOne({ clientId: id });
        if (!sleepData) {
            throw new Error('Sleep data not found.');
        }
        const sleepEfficiency = calculateSleepEfficiency(sleepData.sleepSchedule);
        return sleepEfficiency;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (error) {
        throw new Error(`Error calculating sleep efficiency: ${error.message}`);
    }
};
/**
 *
 *  Formula for calculating Sleep Quality and Efficiency
 */
export const calculateSleepQuality = (sleepData) => {
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
export const calculateSleepEfficiency = (sleepData) => {
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
//# sourceMappingURL=sleep.service.js.map