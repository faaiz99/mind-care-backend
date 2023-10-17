import { Reminder } from "../models/reminder/model.js";
import { IReminder } from "../types/IReminder.js";

import { BreathingExcercise } from "../models/dailyTask/breathingExcercise/model.js";
import { FiveSensesExcercise } from "../models/dailyTask/fiveSensesExcercise/model.js";
import { UnplugUnwindExcercise } from "../models/dailyTask/unplugUnwindExcercise/model.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createBreathingExcersiceByClientId = async (
  breathingExcercise: any,
  id: string,
) => {
  const options = { upsert: true, new: true, setDefaultsOnInsert: true };
  const response = await BreathingExcercise.findOneAndUpdate({clientId:id},{
    clientId: id,
    ...breathingExcercise,
  },options);
  if (!response) throw new Error("Breathing Excercise Could not be created");
  return response;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createFiveSensesExcersiceByClientId = async (
  fiveSensesExcercise: any,
  id: string,
) => {
  const options = { upsert: true, new: true, setDefaultsOnInsert: true };
  const response = await FiveSensesExcercise.findOneAndUpdate({clientId:id},{
    clientId: id,
    ...fiveSensesExcercise,
  },options);
  if (!response) throw new Error("Five Senses Excercise Could not be created");
  return response;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createUnplugUnwindExcerciseByClientId = async (
  unplugUnwindExcercise: any,
  id: string,
) => {
  const options = { upsert: true, new: true, setDefaultsOnInsert: true };
  const response = await UnplugUnwindExcercise.findOneAndUpdate({clientId:id},{
    clientId: id,
    ...unplugUnwindExcercise,
  },options);
  if (!response)
    throw new Error("Unplug Unwind Excercise Could not be created");
  return response;
};

export const getBreathingExcersiceByClientId = async (id: string) => {
  const response = await BreathingExcercise.findOne({ clientId: id });
  if (!response) throw new Error("Breathing Excercise Could not be Found");
  return response;
};

export const getFiveSensesExcersiceByClientId = async (id: string) => {
  const response = await FiveSensesExcercise.findOne({ clientId: id });
  if (!response) throw new Error("Five Senses Excercise Could not be Found");
  return response;
};

export const getUnplugUnwindExcerciseByClientId = async (id: string) => {
  const response = await UnplugUnwindExcercise.findOne({ clientId: id });
  if (!response)
    throw new Error("Unplug Unwind Excercise Excercise Could not be Found");
  console.log(response);
  return response;
};

export const getReminders = async (id: string) => {
  const response = await Reminder.find({ clientId: id }).populate({
    path: "clientId",
    model: "client",
  });
  if (!response) throw new Error("Reminders could not be Found");
  return response;
};

export const createReminder = async (reminder: IReminder) => {
  const response = await Reminder.create(reminder);
  if (!response) throw new Error("Reminder Could not be Created");
  return response;
};

export const updateReminder = async (reminder: IReminder, id: string) => {
  const response = await Reminder.findOneAndUpdate({ _id: id }, reminder, {
    returnOriginal: false,
  });
  if (!response) throw new Error("Reminder Could not be Updated");
  return response;
};

export const deleteReminder = async (id: string) => {
  const response = await Reminder.findOneAndDelete({ _id: id });
  if (!response) throw new Error("Reminder Could not be Deleted");
  return response;
};
