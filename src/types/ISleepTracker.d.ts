import { Document, Schema } from "mongoose";

// Define an interface for the SleepSchedule document
export interface ISleepSchedule extends Document {
  logDate: Date;
  sleepStartTime: Date;
  sleepEndTime: Date;
  timeInBed: number;
  totalSleepTime: number;
  timeAwake: number;
}

// Define an interface for the SleepTracker document
export interface ISleepTracker extends Document {
  clientId: Schema.Types.ObjectId;
  sleepSchedule: ISleepSchedule[];
}
