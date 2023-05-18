const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const anxietyThoughtRecordJournalSchema = new Schema({
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

const AnxietyThoughtRecordJournal= mongoose.model(
  "anxietyThoughtRecordJournal",
  anxietyThoughtRecordJournalSchema
);
module.exports = AnxietyThoughtRecordJournal;
