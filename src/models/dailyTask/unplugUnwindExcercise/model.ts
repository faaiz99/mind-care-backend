import { Schema, model, Model } from "mongoose";
import { IUnplugUnwindExercise } from "../../../types/IReminder.js";

const unplugUnwindSchema = new Schema<IUnplugUnwindExercise>({
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

export const UnplugUnwindExcercise: Model<IUnplugUnwindExercise> = model(
  "UnplugUnwindExcercise",
  unplugUnwindSchema,
);
