const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const selfAffirmationJournalSchema = new Schema({
  questions: {
    type: String,
  },
  answers: {
    type: String,
  },
});

const reflectionJournalModel = mongoose.model(
  "reflectionJournal",
  reflectionJournalSchema
);
module.exports = reflectionJournalModel;
