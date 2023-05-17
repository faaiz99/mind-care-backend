const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const anxietyThoughtRecordJournalSchema = new Schema({
  questions: {
    type: String,
  },
  answers: {
    type: String,
  },
});

const anxietyThoughtRecordJournalModel = mongoose.model(
  "anxietyThoughtRecordJournal",
  anxietyThoughtRecordJournalSchema
);
module.exports = anxietyThoughtRecordJournalModel;
