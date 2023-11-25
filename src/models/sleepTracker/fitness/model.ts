import { Schema, model, Model } from "mongoose";
import { IFitness } from "../../../types/ISleepTracker.js";

const fitnessSchema = new Schema<IFitness>({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: "client",
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  steps: {
    type: Number,
    required: false,
  },
  distanceTravalled: {
    type: Number,
    required: false,
  },
  logDate: {
    type: Date,
    required: true,
  },
  bmi: {
    type: Number,
    required: false,
  },
});

export const Fitness: Model<IFitness> = model("Fitness", fitnessSchema);
