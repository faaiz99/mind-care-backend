const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const challengingNegativeThoughtsAboutYourselfJournalSchema = new Schema({
  clientId: {
    type: mongoose.Types.ObjectId,
    ref: 'client'
  },
  questions: {
		type: [String],
	  },
	  answers: {
		type: [String],
	  },
  createdAt:{
		type:Date
	  }
});

const ChallengingNegativeThoughtsAboutYourselfJournalModel = mongoose.model(
  "challengingNegativeThoughtsAboutYourselfJournal",
  challengingNegativeThoughtsAboutYourselfJournalSchema
);
module.exports = ChallengingNegativeThoughtsAboutYourselfJournalModel;
