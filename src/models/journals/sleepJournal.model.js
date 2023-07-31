// Discarded And Note Required Anymore

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sleepJournalSchema = new Schema({
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

export const SleepJournalModel = mongoose.model("sleepJournal", sleepJournalSchema);

