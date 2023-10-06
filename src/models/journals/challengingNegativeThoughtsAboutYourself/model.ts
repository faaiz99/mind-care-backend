import {Schema, model, Types } from 'mongoose'

const challengingNegativeThoughtsAboutYourselfJournalSchema = new Schema({
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

export const ChallengingNegativeThoughtsAboutYourselfJournal = model(
  "challengingNegativeThoughtsAboutYourselfJournal",
  challengingNegativeThoughtsAboutYourselfJournalSchema
);
