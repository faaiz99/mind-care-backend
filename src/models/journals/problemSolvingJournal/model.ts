import { Schema, model, Types } from "mongoose";

const problemSolvingJournalSchema = new Schema({
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

export const ProblemSolvingJournal = model(
  "problemSolvingJournal",
  problemSolvingJournalSchema,
);
