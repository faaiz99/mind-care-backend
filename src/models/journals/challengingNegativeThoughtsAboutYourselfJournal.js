const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const challengingNegativeThoughtsAboutYourselfJournalSchema = new Schema({
  questions: {
    type: String,
  },
  answers: {
    type: String,
  },
});

const challengingNegativeThoughtsAboutYourselfJournalModel = mongoose.model(
  "challengingNegativeThoughtsAboutYourselfJournal",
  challengingNegativeThoughtsAboutYourselfJournalSchema
);
module.exports = challengingNegativeThoughtsAboutYourselfJournalModel;
