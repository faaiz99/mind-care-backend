import { Schema, model, Model } from "mongoose";
import { IBreathingExercise } from "../../../types/IReminder.js";

const breathingExcerciseSchema = new Schema<IBreathingExercise>({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: "client",
  },
  createdAt: {
    type: Date,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

export const BreathingExcercise: Model<IBreathingExercise> = model(
  "BreathingExcercise",
  breathingExcerciseSchema,
);
