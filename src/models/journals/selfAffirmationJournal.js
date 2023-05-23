const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const selfAffirmationJournalSchema = new Schema({
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

const SelfAffirmationJournal = mongoose.model(
  "SelfAffirmationJournal",
  selfAffirmationJournalSchema
);
module.exports = SelfAffirmationJournal;
