const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const anxietyThoughtRecordJournalSchema = new Schema({
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

const AnxietyThoughtRecordJournal= mongoose.model(
  "anxietyThoughtRecordJournal",
  anxietyThoughtRecordJournalSchema
);
module.exports = AnxietyThoughtRecordJournal;
