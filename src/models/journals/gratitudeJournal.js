const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gratitudeJournalSchema = new Schema({
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
  createdAt:{
		type:Date
	  }
});

const GratitudeJournal = mongoose.model(
  "GratitudeJournal",
  gratitudeJournalSchema
);
module.exports = GratitudeJournal;
