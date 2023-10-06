import { Schema, model, Types } from 'mongoose'
const selfAffirmationJournalSchema = new Schema({
  clientId: {
    type: Types.ObjectId,
    ref: 'client'
  },
  questions: {
    type: [String],
  },
  answers: {
    type: [String],
  }, createdAt: {
    type: Date
  }
});

export const SelfAffirmationJournal = model(
  "selfAffirmationJournal",
  selfAffirmationJournalSchema
);
