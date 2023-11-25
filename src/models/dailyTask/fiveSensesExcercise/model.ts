import { Schema, model, Model } from "mongoose";
import { IFiveSensesExercise } from "../../../types/IReminder.js";

const fiveSensesExcerciseSchema = new Schema<IFiveSensesExercise>({
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

export const FiveSensesExcercise: Model<IFiveSensesExercise> = model(
  "FiveSensesExcercise",
  fiveSensesExcerciseSchema,
);
