import { Schema, model, Types } from "mongoose";
const reflectionJournalSchema = new Schema({
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

export const ReflectionJournal = model(
  "reflectionJournal",
  reflectionJournalSchema,
);
