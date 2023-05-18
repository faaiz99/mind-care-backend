const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const selfAffirmationJournalSchema = new Schema({
  clientId: {
    type: mongoose.Types.ObjectId,
    ref: 'client'
  },
  questions: {
    type: Array,
  },
  answers: {
    type: Array,
  },
});

const SelfAffirmationJournal = mongoose.model(
  "SelfAffirmationJournal",
  selfAffirmationJournalSchema
);
module.exports = SelfAffirmationJournal;
