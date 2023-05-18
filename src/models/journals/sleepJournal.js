// Discarded And Note Required Anymore

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sleepJournalSchema = new Schema({
  questions: {
    type: String,
  },
  answers: {
    type: String,
  },
  date:{
    type:Date
  }
});

const sleepJournalModel = mongoose.model("sleepJournal", sleepJournalSchema);
module.exports = sleepJournalModel;
