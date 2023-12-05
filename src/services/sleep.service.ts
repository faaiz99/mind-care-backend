/* eslint-disable @typescript-eslint/no-explicit-any */
import { SleepTracker } from "../models/sleepTracker/model.js";
// import { ISleepTracker } from "../types/ISleepTracker.js";
import { ISleepSchedule } from "../types/ISleepTracker.js";
import { Fitness } from "../models/sleepTracker/fitness/model.js";

/**
 * FITNESS PART IS PENDING
 * SUGGESTION ARE ALSO PENDING
 */

// Create a new fitness record
export const createFitnessRecord = async (fitnessReccord: any, id: string) => {
  const response = await Fitness.create({
    clientId: id,
    ...fitnessReccord,
  });
  if (!response) throw new Error("Fitness Reccord could not be Created");
  return response;
};

// Get all fitness records for a specific client
export const getFitnessRecords = async (id: string) => {
  const response = await Fitness.find({ clientId: id });
  if (!response) throw new Error("Failed to get fitness Reccords");
  return response;
};

// Update a fitness record by ID
export const updateFitnessRecord = async (fitnessReccord: any, id: string) => {
  const response = await Fitness.findByIdAndUpdate(id, fitnessReccord, {
    new: true, // Return the updated record
  });
  if (!response) throw new Error("Failed to update fitness record by ID");
  return response;
};

export const getSleepStats = async (id: string) => {
  const filter = { clientId: id };
  const response = SleepTracker.findOne(filter);
  if (!response) throw new Error("Sleep Stats Could not be Found");
  return response;
};

export const createSleepSchedule = async (
  sleepSchedule: ISleepSchedule,
  id: string,
) => {
  const response = SleepTracker.create({
    clientId: id,
    sleepSchedule: [sleepSchedule],
  });
  if (!response) throw new Error("Sleep Schedule Could not be Created");
  return response;
};

export const updateSleepSchedule = async (
  sleepSchedule: ISleepSchedule,
  id: string,
) => {
  const filter = { clientId: id };
  const response = SleepTracker.findOneAndUpdate(
    filter,
    {
      $push: { sleepSchedule: [sleepSchedule] },
    },
    {
      returnOriginal: false,
    },
  );
  if (!response) throw new Error("Sleep Schedule Could not be Updated");
  return response;
};

export const resetSleepSchedule = async (id: string) => {
  const filter = { clientId: id };
  const response = SleepTracker.findOneAndDelete(filter);
  if (!response) throw new Error("Sleep Schedule Could not be Reset");
  return response;
};

export const getSleepQuality = async (id: string) => {
  try {
    const sleepData = await SleepTracker.findOne({ clientId: id });

    if (!sleepData) {
      throw new Error("Sleep data not found.");
    }

    const sleepQuality = calculateSleepQuality(sleepData.sleepSchedule);

    return sleepQuality;
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    throw new Error(`Error calculating sleep quality: ${error.message}`);
  }
};

export const getSleepEfficiency = async (id: string) => {
  try {
    const sleepData = await SleepTracker.findOne({ clientId: id });

    if (!sleepData) {
      throw new Error("Sleep data not found.");
    }

    const sleepEfficiency = calculateSleepEfficiency(sleepData.sleepSchedule);

    return sleepEfficiency;
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    throw new Error(`Error calculating sleep efficiency: ${error.message}`);
  }
};
/**
 *
 *  Formula for calculating Sleep Quality and Efficiency
 */
export const calculateSleepQuality = (sleepData: Array<ISleepSchedule>) => {
  if (sleepData.length === 0) {
    throw new Error("Sleep data is empty.");
  }

  let totalSleepTime = 0;
  let totalTimeInBed = 0;

  for (const schedule of sleepData) {
    totalSleepTime += schedule.totalSleepTime;
    totalTimeInBed += schedule.timeInBed;
  }

  if (totalTimeInBed <= 0) {
    throw new Error("Total time in bed must be greater than zero.");
  }

  return (totalSleepTime / totalTimeInBed) * 100; // Convert to a percentage
};

export const calculateSleepEfficiency = (sleepData: Array<ISleepSchedule>) => {
  if (sleepData.length === 0) {
    throw new Error("Sleep data is empty.");
  }

  let totalSleepTime = 0;
  let totalTimeInBed = 0;

  for (const schedule of sleepData) {
    totalSleepTime += schedule.totalSleepTime;
    totalTimeInBed += schedule.timeInBed;
  }

  if (totalTimeInBed <= 0) {
    throw new Error("Total time in bed must be greater than zero.");
  }
  return (totalSleepTime / totalTimeInBed) * 100; // Convert to a percentage
};
