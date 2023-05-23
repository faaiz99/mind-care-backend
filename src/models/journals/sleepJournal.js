// Discarded And Note Required Anymore

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sleepJournalSchema = new Schema({
  clientId: {
    type: mongoose.Types.ObjectId,
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

const sleepJournalModel = mongoose.model("sleepJournal", sleepJournalSchema);
module.exports = sleepJournalModel;
