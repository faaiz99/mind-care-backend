import { Schema, Document } from "mongoose";

interface IReminder extends Document {
  clientId: Schema.Types.ObjectId;
  type: string;
  time: string;
  repeatDaily: boolean;
  turnOn: boolean;
}

export interface IExercise extends Document {
  clientId: Schema.Types.ObjectId;
  createdAt: Date;
  completed: boolean;
}

export interface IFiveSensesExercise extends IExercise, Document {}

export interface IUnplugUnwindExercise extends IExercise, Document {}

export interface IBreathingExercise extends IExercise, Document {}
