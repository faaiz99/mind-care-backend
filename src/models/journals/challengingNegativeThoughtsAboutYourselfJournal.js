const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const challengingNegativeThoughtsAboutYourselfJournalSchema = new Schema({
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

const ChallengingNegativeThoughtsAboutYourselfJournalModel = mongoose.model(
  "challengingNegativeThoughtsAboutYourselfJournal",
  challengingNegativeThoughtsAboutYourselfJournalSchema
);
module.exports = ChallengingNegativeThoughtsAboutYourselfJournalModel;
