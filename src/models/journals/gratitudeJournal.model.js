const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gratitudeJournalSchema = new Schema({
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

const GratitudeJournal = mongoose.model(
  "GratitudeJournal",
  gratitudeJournalSchema
);
module.exports = GratitudeJournal;
