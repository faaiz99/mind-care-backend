import { Schema, model, Types } from "mongoose";

const lookingforwardtoTomorrowSchema = new Schema({
  clientId: {
    type: Types.ObjectId,
    ref: "client",
  },
  questions: {
    type: [String],
  },
  answers: {
    type: [String],
  },
  createdAt: {
    type: Date,
  },
});

export const LookingForwardToTomorrow = model(
  "lookingForwardToTomorrow",
  lookingforwardtoTomorrowSchema,
);
