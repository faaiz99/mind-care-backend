import { Schema, model, Types } from "mongoose";

const fiveSensesExcerciseSchema = new Schema({
  clientId: {
    type: Types.ObjectId,
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

export const FiveSensesExcercise = model(
  "fiveSensesExcerciseSchema",
  fiveSensesExcerciseSchema,
);
