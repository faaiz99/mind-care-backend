import { Schema, model, Types } from "mongoose";
const gratitudeJournalSchema = new Schema({
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

export const GratitudeJournal = model(
  "gratitudeJournal",
  gratitudeJournalSchema,
);
