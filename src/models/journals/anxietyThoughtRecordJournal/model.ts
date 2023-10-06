import { Schema, model, Types } from 'mongoose'


const anxietyThoughtRecordJournalSchema = new Schema({
  clientId: {
    type: Types.ObjectId,
    ref: 'client'
  },
  questions: {
    type: [String],
  },
  answers: {
    type: [String],
  },
  createdAt: {
    type: Date
  }
});

export const AnxietyThoughtRecordJournal = model(
  "anxietyThoughtRecordJournal",
  anxietyThoughtRecordJournalSchema
);
