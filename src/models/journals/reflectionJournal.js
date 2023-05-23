const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reflectionJournalSchema = new Schema({
  clientId: {
    type: mongoose.Types.ObjectId,
    ref: 'client'
  },
  questions: {
		type: [String],
	  },
	  answers: {
		type: [String],
	  }, createdAt:{
		type:Date
	  }
});

const ReflectionJournalModel = mongoose.model(
  "reflectionJournal",
  reflectionJournalSchema
);
module.exports = ReflectionJournalModel;
