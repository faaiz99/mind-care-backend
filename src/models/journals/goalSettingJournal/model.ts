import { Schema, model, Types } from "mongoose";

const goalSettingJournalSchema = new Schema({
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

export const GoalSettingJournal = model(
  "goalSettingJournal",
  goalSettingJournalSchema,
);
